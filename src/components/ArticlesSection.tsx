import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import Markdown from 'react-markdown';

export default function ArticlesSection() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'articles'), where('isDeleted', '==', false), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(posts);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'articles');
    });
    return unsubscribe;
  }, []);

  if (articles.length === 0) return null;

  return (
    <section className="py-24 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface)] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink-dark)] mb-4">Bài Viết Thực Hành</h2>
          <p className="text-lg text-[var(--color-muted-dark)] max-w-2xl mx-auto">Những đúc kết từ quá trình thực hành Sống Sáng Suốt được chia sẻ trực tiếp từ người hướng dẫn.</p>
        </div>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-md p-8 md:p-12 shadow-sm border border-[var(--color-border)] relative">
              <h3 className="font-sans text-2xl font-bold bg-gradient-to-r from-[#24201C] to-[#6E2D2A] bg-clip-text text-transparent mb-6">{article.title}</h3>
              {article.imageUrls && article.imageUrls.length > 0 && (
                <div className={`mb-6 grid gap-4 ${article.imageUrls.length === 1 ? 'grid-cols-1' : article.imageUrls.length === 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                  {article.imageUrls.map((url: string, i: number) => (
                    <div key={i} className={`rounded-sm overflow-hidden border border-slate-100 shadow-sm ${article.imageUrls.length === 3 && i === 0 ? 'col-span-2' : ''}`}>
                      <img src={url} alt={`Ảnh đính kèm ${i + 1}`} referrerPolicy="no-referrer" className="w-full h-auto object-cover max-h-[400px]" />
                    </div>
                  ))}
                </div>
              )}
              <div className="markdown-body space-y-4 text-[var(--color-ink-dark)] leading-relaxed [&>p]:mb-4 [&>h4]:font-bold [&>h4]:text-lg [&>h4]:mt-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>strong]:font-bold">
                <Markdown>{article.content}</Markdown>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-sm text-[var(--color-muted)]">
                {article.createdAt?.toDate() ? new Date(article.createdAt.toDate()).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
