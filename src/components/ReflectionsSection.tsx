import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { loginWithGoogle, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { compressImage, getDriveDirectUrl } from '../lib/imageUtils';

const CATEGORIES = ["Chung", "Bản thân", "Gia đình", "Sự nghiệp"];

export default function ReflectionsSection() {
  const { user, isAdmin } = useAuth();
  const [reflections, setReflections] = useState<any[]>([]);
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [category, setCategory] = useState('Chung');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const q = query(collection(db, 'reflections'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReflections(posts);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'reflections');
    });
    return unsubscribe;
  }, []);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + imageUrls.length > 3) {
      alert('Vui lòng chọn tối đa 3 ảnh');
      return;
    }
    
    const newUrls: string[] = [];
    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Có ảnh vượt quá 5MB, đã bị bỏ qua');
        continue;
      }
      try {
        const compressedBase64 = await compressImage(file);
        newUrls.push(compressedBase64);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
    setImageUrls(prev => [...prev, ...newUrls]);
    if (e.target) e.target.value = '';
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImageUrls(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'reflections'), {
        content,
        authorName: user.displayName || 'Học viên ẩn danh',
        authorId: user.uid,
        category,
        imageUrls: imageUrls,
        createdAt: serverTimestamp()
      });
      setContent('');
      setImageUrls([]);
      setCategory('Chung');
      alert('Đã gửi chia sẻ thành công!');
    } catch (e) {
      handleFirestoreError(e, OperationType.CREATE, 'reflections');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa chia sẻ này?')) {
      try {
        await deleteDoc(doc(db, 'reflections', id));
      } catch (e) {
        handleFirestoreError(e, OperationType.DELETE, `reflections/${id}`);
      }
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredReflections = activeFilter === 'Tất cả' 
    ? reflections 
    : reflections.filter(ref => ref.category === activeFilter);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-classic-border bg-[var(--color-paper)] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink-dark)] mb-4 animate-classic-fade">Góc Chuyển Hóa</h2>
          <p className="text-base sm:text-lg text-[var(--color-muted-dark)] max-w-2xl mx-auto px-2 format-classic-text">
            Nơi lưu giữ những cảm xúc chân thật, những kết quả chuyển hóa màu nhiệm từ cộng đồng thực hành. Mời bạn chia sẻ câu chuyện của mình (tối đa 500 chữ, đính kèm 3 hình ảnh).
          </p>
        </div>

        <div className="bg-white rounded-md p-6 sm:p-8 shadow-sm classic-border mb-12 md:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-xl font-bold text-[var(--color-ink-dark)] mb-6 relative z-10 font-serif">Chia sẻ trải nghiệm của bạn</h3>
          
          {user ? (
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="mb-4">
                <label className="block text-sm font-medium text-[var(--color-muted-dark)] mb-2 font-serif italic">Chọn chủ đề chuyển hóa:</label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all classic-border ${category === cat ? 'bg-[var(--color-ink-dark)] text-[var(--color-paper)] border-[var(--color-ink-dark)]' : 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface)]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Câu chuyện hoặc cảm xúc của bạn trong quá trình thực hành..."
                className="w-full border border-classic-border rounded-sm p-4 min-h-[160px] focus:ring-1 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition-all resize-none mb-4 bg-[var(--color-paper)]/50"
                required
                maxLength={3000}
              />
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full">
                  <label className="flex items-center gap-2 cursor-pointer text-[var(--color-accent)] bg-white/50 border border-classic-border px-4 py-2 rounded-sm hover:bg-[var(--color-surface)] transition-colors text-sm font-bold whitespace-nowrap uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Tải ảnh lên ({imageUrls.length}/3)
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" disabled={imageUrls.length >= 3} />
                  </label>
                  <div className="flex flex-1 w-full gap-2 text-sm">
                    <input type="text" id="reflectionExternalUrl" placeholder="Hoặc dán link ảnh / link Google Drive..." className="flex-1 border border-classic-border p-2 rounded-sm outline-none focus:border-[var(--color-gold)] bg-white/50 transition-colors disabled:opacity-50" disabled={imageUrls.length >= 3} />
                    <button type="button" onClick={() => {
                        const el = document.getElementById('reflectionExternalUrl') as HTMLInputElement;
                        if (el && el.value) {
                          if (imageUrls.length >= 3) {
                            alert('Tối đa 3 ảnh');
                            return;
                          }
                          const finalUrl = getDriveDirectUrl(el.value);
                          setImageUrls(prev => [...prev, finalUrl]);
                          el.value = '';
                        }
                      }} 
                      disabled={imageUrls.length >= 3} 
                      className="bg-[var(--color-surface)] border border-classic-border hover:bg-[var(--color-surface-alt)] px-4 py-2 rounded-sm text-[var(--color-ink)] font-bold uppercase tracking-widest transition-colors whitespace-nowrap disabled:opacity-50"
                    >
                      Thêm link
                    </button>
                  </div>
                </div>
                {imageUrls.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {imageUrls.map((url, idx) => (
                      <div key={idx} className="relative w-max group">
                        <img src={url} alt={`Preview ${idx + 1}`} referrerPolicy="no-referrer" className="h-28 w-28 object-cover rounded-md classic-border" />
                        <button type="button" onClick={() => handleRemoveImage(idx)} className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md border border-classic-border text-[var(--color-accent)] hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-4">
                <div className="text-sm text-gray-500 font-serif italic">Gửi với tư cách: <span className="font-semibold text-gray-700 not-italic">{user.displayName || user.email}</span></div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[var(--color-ink)] hover:bg-[var(--color-ink-dark)] text-[var(--color-paper)] font-bold py-3 px-8 rounded-md transition-all shadow-md disabled:opacity-50 uppercase tracking-widest w-full sm:w-auto"
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi Chia Sẻ'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 relative z-10 bg-[var(--color-surface)] rounded-md classic-border">
              <p className="text-[var(--color-ink)] mb-6 font-serif text-lg italic">Bạn cần đăng nhập để chia sẻ cảm xúc và chuyển hóa của mình.</p>
              <button 
                onClick={loginWithGoogle}
                className="bg-white border border-classic-border hover:bg-[var(--color-paper)] text-[var(--color-ink-dark)] font-bold py-3 px-8 rounded-md transition-all shadow-sm flex items-center gap-3 mx-auto uppercase tracking-widest text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Đăng nhập tham gia
              </button>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["Tất cả", ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all uppercase tracking-widest ${activeFilter === cat ? 'bg-[var(--color-gold)] text-white shadow-md' : 'bg-white text-[var(--color-ink)] border border-classic-border hover:bg-[var(--color-surface)]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 max-h-[800px] overflow-y-auto pr-3 custom-scrollbar">
          {filteredReflections.map((ref) => {
            // handle legacy data format where it might be `imageUrl` instead of `imageUrls`
            const postImages = ref.imageUrls || (ref.imageUrl ? [ref.imageUrl] : []);
            const isExpanded = expandedPosts[ref.id];
            const isLongText = ref.content && ref.content.length > 250;
            const canDelete = user && (user.uid === ref.authorId || isAdmin);

            return (
              <div key={ref.id} className="bg-white p-6 md:p-8 rounded-md shadow-sm classic-border flex flex-col sm:flex-row gap-5 items-start animate-classic-fade relative group">
                <div className="w-14 h-14 bg-[var(--color-surface)] border border-classic-border rounded-md flex items-center justify-center text-[var(--color-ink-dark)] font-serif font-bold text-2xl shrink-0">
                  {(ref.authorName || 'A').charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 w-full relative">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4 mb-4 border-b border-dashed border-classic-border pb-3 pr-8">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      <h4 className="font-bold text-[var(--color-ink-dark)] font-serif text-lg">{ref.authorName}</h4>
                      <div className="flex items-center gap-3">
                        {ref.category && (
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)] bg-[var(--color-surface)] px-2 py-0.5 rounded-sm border border-classic-border">
                            {ref.category}
                          </span>
                        )}
                        <span className="text-sm font-serif italic text-[var(--color-muted)]">
                          {ref.createdAt?.toDate() ? new Date(ref.createdAt.toDate()).toLocaleDateString('vi-VN') : 'Vừa xong'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-[var(--color-ink)] leading-relaxed font-sans text-base whitespace-pre-wrap ${!isExpanded && isLongText ? 'line-clamp-4 relative' : ''}`}>
                    {ref.content}
                    {!isExpanded && isLongText && (
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                    )}
                  </div>
                  
                  {isLongText && (
                    <button 
                      onClick={() => toggleExpand(ref.id)}
                      className="mt-2 text-sm font-bold text-[var(--color-gold)] hover:text-[var(--color-gold)]/80 uppercase tracking-widest transition-colors"
                    >
                      {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                    </button>
                  )}

                  {postImages.length > 0 && (
                    <div className={`mt-6 grid gap-4 ${postImages.length === 1 ? 'grid-cols-1 sm:w-2/3 md:w-1/2' : postImages.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                      {postImages.map((img: string, i: number) => (
                        <div key={i} className="aspect-square sm:aspect-auto sm:h-48 md:h-56 relative w-full overflow-hidden rounded-sm classic-border group/img bg-[var(--color-surface)]">
                          <img 
                            src={img} 
                            alt={`Đính kèm ${i+1}`} 
                            referrerPolicy="no-referrer" 
                            className="absolute inset-0 w-full h-full object-cover sm:hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer" 
                            onClick={() => window.open(img, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {canDelete && (
                  <button
                    onClick={() => handleDelete(ref.id)}
                    className="absolute top-4 right-4 text-red-400 hover:text-red-600 hover:bg-slate-50 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    title="Xóa bài viết"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
          {filteredReflections.length === 0 && (
            <div className="text-center py-16 text-[var(--color-muted)] font-serif italic text-lg opacity-70">
              Chưa có chia sẻ nào. Hãy là người đầu tiên gieo hạt giống cảm xúc!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
