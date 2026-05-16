import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp, doc, onSnapshot } from 'firebase/firestore';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    referrer: '',
    desire: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [zaloLink, setZaloLink] = useState('');

  useEffect(() => {
    const unsubscribeSettings = onSnapshot(doc(db, 'settings', 'general'), (docSnap) => {
      if (docSnap.exists()) {
        setZaloLink(docSnap.data().zaloLink || '');
      }
    });

    return () => {
      unsubscribeSettings();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'registrations'), {
        ...formData,
        age: Number(formData.age),
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'registrations');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration-form" className="py-16 md:py-24 px-4 sm:px-6 border-t border-[var(--color-border)] bg-[#FDFBF7] relative">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="bg-white p-8 md:p-12 border border-[#DBCDB3] rounded-sm shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-accent)]" />
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink-dark)] font-bold text-center mb-2 uppercase tracking-widest">
              Đăng Ký Hành Trình
            </h2>
            <p className="text-center italic text-[var(--color-muted-dark)] mb-8 font-serif">
              Để lại thông tin để bắt đầu 99 ngày chuyển hóa cuộc đời
            </p>
            
            <form className="space-y-6 font-sans" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-ink-dark)] uppercase tracking-wider block">Họ Tên</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 border-[#DBCDB3] bg-transparent py-2 focus:outline-none focus:border-[#8B2C24] transition-colors" placeholder="Nguyễn Văn A" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-ink-dark)] uppercase tracking-wider block">Số Điện Thoại</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b-2 border-[#DBCDB3] bg-transparent py-2 focus:outline-none focus:border-[#8B2C24] transition-colors" placeholder="090 123 4567" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-ink-dark)] uppercase tracking-wider block">Tuổi</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full border-b-2 border-[#DBCDB3] bg-transparent py-2 focus:outline-none focus:border-[#8B2C24] transition-colors" placeholder="30" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-ink-dark)] uppercase tracking-wider block">Người Giới Thiệu</label>
                  <input type="text" name="referrer" value={formData.referrer} onChange={handleChange} className="w-full border-b-2 border-[#DBCDB3] bg-transparent py-2 focus:outline-none focus:border-[#8B2C24] transition-colors" placeholder="(Nếu có)" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--color-ink-dark)] uppercase tracking-wider block">Mong muốn giá trị đạt được sau hành trình này</label>
                <textarea rows={4} name="desire" value={formData.desire} onChange={handleChange} className="w-full border-2 border-[#DBCDB3] rounded-sm bg-transparent p-4 focus:outline-none focus:border-[#8B2C24] transition-colors resize-none" placeholder="Chia sẻ mong muốn của bạn..." required></textarea>
              </div>
              <div className="pt-4 text-center">
                <button type="submit" disabled={isSubmitting} className="bg-[#8B2C24] hover:bg-[#6A211B] disabled:opacity-50 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-sm transition-colors shadow-md hover:shadow-lg">
                  {isSubmitting ? 'ĐANG GỬI...' : 'Gửi Thông Tin Đăng Ký'}
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white p-8 md:p-12 border border-[#DBCDB3] rounded-sm shadow-xl max-w-lg w-full text-center relative"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-ink-dark)] font-bold mb-4">
                Đăng Ký Thành Công!
              </h3>
              
              <p className="text-[var(--color-muted-dark)] mb-8 font-serif leading-relaxed">
                Chào mừng bạn đã bước chân vào hành trình chuyển hóa tuyệt vời này.<br/>{"\n"}
                Bạn vui lòng tham gia nhóm Zalo học tập bên dưới để nhận thông tin chi tiết và gặp gỡ Cộng Đồng Thực Hành nhé.
              </p>
              
              <div className="space-y-4">
                {zaloLink ? (
                  <a
                    href={zaloLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold py-4 px-8 rounded-sm shadow-md transition-colors w-full uppercase tracking-wider text-sm"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.384 10.354C21.384 5.736 17.585 2 12.898 2S4.412 5.736 4.412 10.354c0 2.224.966 4.225 2.535 5.672-.258.918-.767 1.956-2.227 3.25a.302.302 0 0 0-.083.336.3.3 0 0 0 .285.203c2.72-.036 4.966-1.144 6.136-2.146.623.104 1.258.156 1.84.156 4.687 0 8.486-3.736 8.486-8.354z" />
                    </svg>
                    Tham gia nhóm Zalo Học Tập
                  </a>
                ) : (
                  <p className="text-orange-600 text-sm font-serif italic mb-4">
                    Hiện tại chưa có link Zalo. Vui lòng liên hệ Người Hướng Dẫn của bạn nhé.
                  </p>
                )}
                
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', phone: '', age: '', referrer: '', desire: '' });
                  }}
                  className="w-full text-[var(--color-muted-dark)] hover:text-[#8B2C24] font-bold py-3 transition-colors uppercase tracking-widest text-xs underline decoration-dotted underline-offset-4"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

