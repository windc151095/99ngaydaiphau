import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Droplets, Gift, CircleChevronRight, DownloadCloud, Store, Star } from 'lucide-react';

export default function BonusSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative border-t border-[#DBCDB3] bg-[#FCFBF8] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#8B2C24]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#C2A36B]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#8B2C24]/10 mb-8">
            <Gift className="w-10 h-10 text-[#8B2C24]" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-black uppercase tracking-tight leading-tight mb-6">
            Mở Khóa Hoàn Toàn Miễn Phí <br className="hidden sm:block" />
            <span className="text-[#8B2C24] relative inline-block">
              Nội Dung Sống Sáng Suốt
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B2C24] to-transparent opacity-50"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#666] font-serif italic mb-12 max-w-2xl mx-auto">
            Hành trang độc quyền dành cho những ai cam kết thực tập <strong className="text-[#8B2C24] not-italic">99 ngày</strong> chuyển hóa cuộc đời. Không lý thuyết suông, chỉ có thực hành và đo lường.
          </p>

          {/* Download Buttons Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/vn/app/sống-sáng-suốt/id6738382979?l=vi" className="group relative flex items-center gap-4 bg-[#8B2C24] text-white px-8 py-4 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#8B2C24]/20 w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current relative z-10"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <div className="text-left relative z-10">
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Tải trên</div>
                <div className="text-xl font-bold font-sans">App Store</div>
              </div>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.app365hanhnguyen.hanhnguyen" className="group relative flex items-center gap-4 bg-[#1A1A1A] text-white px-8 py-4 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/20 w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current relative z-10"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <div className="text-left relative z-10">
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">Cài đặt từ</div>
                <div className="text-xl font-bold font-sans">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
