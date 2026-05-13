import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';

export default function GallerySection() {
  const [images, setImages] = useState<{ url: string; title: string; articleId: string }[]>([]);

  useEffect(() => {
    // Collect all image URLs from articles
    const q = query(collection(db, 'articles'), where('isDeleted', '==', false), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allImages: { url: string; title: string; articleId: string }[] = [];
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.imageUrls && Array.isArray(data.imageUrls)) {
          data.imageUrls.forEach((url: string) => {
            allImages.push({
              url,
              title: data.title,
              articleId: doc.id
            });
          });
        }
      });
      setImages(allImages);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'articles for gallery');
    });
    return unsubscribe;
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-24 px-6 border-t border-[var(--color-border)] bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink-dark)] mb-4">Kho Ảnh Thực Hành</h2>
          <p className="text-lg text-[var(--color-muted-dark)] max-w-2xl mx-auto">Những khoảnh khắc chuyển hóa và bài học giá trị.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div key={`${img.articleId}-${index}`} className="break-inside-avoid relative group rounded-md overflow-hidden cursor-pointer shadow-sm border border-slate-100">
              <img src={img.url} alt={img.title} referrerPolicy="no-referrer" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out will-change-transform" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-end p-6">
                <p className="text-white font-medium line-clamp-2">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
