import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from './lib/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, updateDoc, setDoc, where } from 'firebase/firestore';
import { compressImage, getDriveDirectUrl } from './lib/imageUtils';

export default function Admin() {
  const [articles, setArticles] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [zaloLink, setZaloLink] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLocalAdmin, setIsLocalAdmin] = useState(false);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isSavingZalo, setIsSavingZalo] = useState(false);

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

      const unsubscribeSettings = onSnapshot(doc(db, 'settings', 'general'), (docSnap) => {
        if (docSnap.exists()) {
          setZaloLink(docSnap.data().zaloLink || '');
        }
      });

      const qReg = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
      const unsubscribeReg = onSnapshot(qReg, (snapshot) => {
        const regs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRegistrations(regs);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'registrations');
      });

      return () => {
        unsubscribe();
        unsubscribeSettings();
        unsubscribeReg();
      };
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
          <h2 className="text-xl font-bold mb-6">Cấu Hình Chung</h2>
          <div className="bg-slate-50 border p-5 rounded-sm">
            <h3 className="font-bold mb-3 text-[#24201C] flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M2.999 12c0 5.4 4.5 9.771 10.088 10L13.1 24l2.133-3.213c4.276-.713 7.767-4.225 7.767-8.787 0-5.523-4.925-10-11-10s-11 4.477-11 10zm11.396 2.378h-2.186l2.373-3.2c.115-.152.193-.321.233-.502.04-.182.042-.37-.004-.552-.047-.183-.135-.35-.258-.493L13.1 8 8 11.536h2.185L7.81 14.736c-.114.152-.191.321-.231.503-.04.181-.042.368.005.55.047.183.136.35.259.493L9.297 18 14.395 14.378z"/></svg>
              Link Nhóm Zalo
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={zaloLink}
                onChange={(e) => setZaloLink(e.target.value)}
                placeholder="https://zalo.me/g/..."
                className="flex-1 border p-3 rounded-sm outline-none focus:border-[#6E2D2A] transition-colors"
                disabled={isSavingZalo}
              />
              <button
                onClick={async () => {
                  setIsSavingZalo(true);
                  setSaveSuccess(false);
                  try {
                    await setDoc(doc(db, 'settings', 'general'), { zaloLink }, { merge: true });
                    setSaveSuccess(true);
                    setTimeout(() => setSaveSuccess(false), 3000);
                  } catch (e) {
                    alert('Lỗi cập nhật. Vui lòng thử lại.');
                    console.error(e);
                  } finally {
                    setIsSavingZalo(false);
                  }
                }}
                disabled={isSavingZalo}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold px-6 rounded-sm transition-colors flex items-center justify-center min-w-[100px]"
                id="zalo-save-btn"
              >
                {isSavingZalo ? 'Đang lưu...' : 'Lưu'}
              </button>
            </div>
            {saveSuccess ? (
              <p className="text-green-600 text-sm mt-2 font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Lưu cấu hình thành công!
              </p>
            ) : (
              <p className="text-xs text-slate-500 mt-2">Đường link này sẽ hiển thị ở "Góc Chuyển Hóa", kèm nút bấm tham gia sau khi đăng ký/đăng nhập.</p>
            )}
          </div>
        </section>

        <section className="mb-12 border-b pb-12">
          <h2 className="text-xl font-bold mb-6">Danh Sách Đăng Ký</h2>
          <div className="overflow-x-auto bg-white border rounded-sm">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 border-b">
                <tr>
                  <th className="px-4 py-3 font-bold text-gray-700">Thời gian</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Họ tên</th>
                  <th className="px-4 py-3 font-bold text-gray-700">SĐT</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Tuổi</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Giới thiệu</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Mong muốn</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      Chưa có dữ liệu đăng ký
                    </td>
                  </tr>
                ) : (
                  registrations.map(reg => (
                    <tr key={reg.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {reg.createdAt?.toDate ? new Date(reg.createdAt.toDate()).toLocaleString('vi-VN') : 'Mới đây'}
                      </td>
                      <td className="px-4 py-3 font-medium">{reg.name}</td>
                      <td className="px-4 py-3">{reg.phone}</td>
                      <td className="px-4 py-3">{reg.age}</td>
                      <td className="px-4 py-3 text-gray-600">{reg.referrer}</td>
                      <td className="px-4 py-3 max-w-xs truncate" title={reg.desire}>{reg.desire}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

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
