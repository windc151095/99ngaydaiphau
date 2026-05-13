import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from './lib/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, updateDoc, where } from 'firebase/firestore';
import { compressImage, getDriveDirectUrl } from './lib/imageUtils';

export default function Admin() {
  const [articles, setArticles] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLocalAdmin, setIsLocalAdmin] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('localAdminToken');
    if (storedAuth === '12345') {
      setIsLocalAdmin(true);
    }
  }, []);

  useEffect(() => {
    if (isLocalAdmin) {
      const q = query(collection(db, 'articles'), where('isDeleted', '==', false), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArticles(posts);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'articles');
      });
      return unsubscribe;
    }
  }, [isLocalAdmin]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'tuesang' && password === '12345') {
      setIsLocalAdmin(true);
      localStorage.setItem('localAdminToken', '12345');
    } else {
      alert('Sai thông tin đăng nhập!');
    }
  };

  const handleLogout = () => {
    setIsLocalAdmin(false);
    localStorage.removeItem('localAdminToken');
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + imageUrls.length > 3) {
      alert('Chỉ được đăng tối đa 3 ảnh');
      return;
    }
    
    // limit files loop just in case
    const filesToProcess = files.slice(0, 3 - imageUrls.length);

    for (const file of filesToProcess) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Vui lòng chọn ảnh nhỏ hơn 5MB');
        continue;
      }
      try {
        const compressedBase64 = await compressImage(file);
        setImageUrls(prev => [...prev, compressedBase64]);
      } catch (error) {
        console.error('Error compressing image:', error);
        alert('Có lỗi xảy ra khi xử lý ảnh');
      }
    }
    
    // reset input
    if (e.target) {
        e.target.value = '';
    }
  };

  const removeImage = (index: number) => {
    setImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLocalAdmin) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'articles'), {
        title,
        content,
        imageUrls: imageUrls,
        createdAt: serverTimestamp(),
        authorId: 'admin_tuesang',
        adminToken: '12345',
        isDeleted: false
      });
      setTitle('');
      setContent('');
      setImageUrls([]);
      alert('Đăng bài thành công!');
    } catch (e) {
      alert('Có lỗi xảy ra: Cơ sở dữ liệu giới hạn 1MB mỗi bài viết nên ảnh không thể đăng. Hãy thử sử dụng nút "Thêm link" bằng Google Drive (bật mục "Bất kỳ ai có liên kết").');
      handleFirestoreError(e, OperationType.CREATE, 'articles');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, currentArticle: any) => {
    if (confirm('Bạn có chắc muốn xóa bài này?')) {
      try {
        // Soft delete implementation because real delete is disabled for security
        await updateDoc(doc(db, 'articles', id), {
          ...currentArticle, // Need to provide all fields for validation helper
          isDeleted: true
        });
      } catch (e) {
        handleFirestoreError(e, OperationType.UPDATE, `articles/${id}`);
      }
    }
  };

  if (!isLocalAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-md shadow-xl w-full max-w-md border border-[var(--color-border)]">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#24201C] mb-2">Quản Trị Hệ Thống</h1>
            <p className="text-gray-500">Đăng nhập tài khoản Local Admin</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Tài khoản</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border p-3 rounded-sm outline-none focus:border-[#6E2D2A] focus:ring-1 focus:ring-[#6E2D2A] transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-3 rounded-sm outline-none focus:border-[#6E2D2A] focus:ring-1 focus:ring-[#6E2D2A] transition-all"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#24201C] hover:bg-[#002b52] text-white font-bold py-3 px-6 rounded-sm transition-colors shadow-md mt-4">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Về trang chủ
            </a>
            <h1 className="text-2xl font-bold hidden sm:block">| Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-[#24201C]">Admin: tuesang</span>
            <button onClick={handleLogout} className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded transition-colors font-medium">Đăng xuất</button>
          </div>
        </div>

        <section className="mb-12 border-b pb-12">
          <h2 className="text-xl font-bold mb-6">Đăng Bài Viết Thực Hành Mới</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Tiêu đề</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full border p-3 rounded-sm outline-none focus:border-[#6E2D2A] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Ảnh đính kèm (tối đa 3 ảnh)</label>
              <div className="space-y-3">
                <input type="file" multiple accept="image/*" onChange={handleImageChange} disabled={imageUrls.length >= 3} className="w-full border p-3 rounded-sm outline-none focus:border-[#6E2D2A] transition-colors disabled:opacity-50" />
                <div className="flex gap-2">
                  <input type="text" id="externalUrl" placeholder="Hoặc dán link ảnh / link Google Drive..." className="flex-1 border p-3 rounded-sm outline-none focus:border-[#6E2D2A] transition-colors disabled:opacity-50" disabled={imageUrls.length >= 3} />
                  <button type="button" onClick={() => {
                    const el = document.getElementById('externalUrl') as HTMLInputElement;
                    if (el && el.value) {
                      if (imageUrls.length >= 3) {
                        alert('Chỉ được đăng tối đa 3 ảnh');
                        return;
                      }
                      const finalUrl = getDriveDirectUrl(el.value);
                      setImageUrls(prev => [...prev, finalUrl]);
                      el.value = '';
                    }
                  }} disabled={imageUrls.length >= 3} className="bg-slate-200 hover:bg-slate-300 px-4 rounded-sm font-medium transition-colors disabled:opacity-50 whitespace-nowrap">
                    Thêm link
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Lưu ý: Nếu sử dụng link Google Drive, vui lòng đảm bảo file ảnh đã được mở quyền truy cập "Bất kỳ ai có liên kết" (Anyone with the link).</p>
              {imageUrls.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {imageUrls.map((url, i) => (
                    <div key={i} className="relative w-max">
                      <img src={url} alt="Preview" referrerPolicy="no-referrer" className="h-32 w-auto object-contain bg-slate-100 rounded-sm border" />
                      <button type="button" onClick={() => removeImage(i)} className="absolute -top-2 -right-2 bg-white rounded-md p-1 shadow border border-slate-200 text-red-500 hover:text-red-700">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nội dung (hỗ trợ Markdown)</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} required rows={10} className="w-full border p-3 rounded-sm outline-none focus:border-[#6E2D2A] transition-colors" placeholder="Ví dụ: **Chữ đậm**, *Chữ nghiêng*, - Danh sách... &#10;Để chèn ảnh vào giữa bài: ![Tên ảnh](Link_URL_Ảnh)" />
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-[#6E2D2A] hover:bg-[#006A46] text-white font-bold px-8 py-3 rounded-sm disabled:opacity-50 transition-colors shadow-md">
              {isSubmitting ? 'Đang đăng...' : 'Đăng Bài Viết'}
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6">Danh sách bài viết đã đăng ({articles.length})</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <div key={a.id} className="border border-slate-200 p-5 rounded-sm flex justify-between items-start hover:shadow-sm transition-shadow">
                <div className="flex gap-4">
                  {a.imageUrls && a.imageUrls.length > 0 && (
                    <div className="flex gap-2">
                      {a.imageUrls.map((url: string, i: number) => (
                        <div key={i} className="w-20 h-20 shrink-0 bg-slate-100 rounded-lg overflow-hidden border">
                          <img src={url} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-lg text-[#24201C]">{a.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {a.createdAt?.toDate() ? new Date(a.createdAt.toDate()).toLocaleString('vi-VN') : 'N/A'}
                    </p>
                  </div>
                </div>
                <button onClick={() => handleDelete(a.id, a)} className="text-red-500 hover:text-white hover:bg-red-500 border border-red-200 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                  Xóa bài
                </button>
              </div>
            ))}
            {articles.length === 0 && (
              <div className="text-center py-8 text-gray-500 border rounded-sm bg-slate-50">
                Chưa có bài viết nào được đăng.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
