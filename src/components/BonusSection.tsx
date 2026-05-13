import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Map, Droplets, ChevronDown, LayoutGrid, Layers, Circle, Compass, TreePine, Zap, BookOpen, Smartphone } from 'lucide-react';

const CATEGORIES = [
  {
    id: "bando",
    title: "DANH MỤC: BẢN ĐỒ",
    subtitle: "Giao diện đầu tiên - 5 chuyên mục lớn",
    icon: <Map className="w-6 h-6 md:w-8 md:h-8" />,
    items: [
      {
        title: "1. THÁP ÁNH SÁNG",
        icon: <Layers className="w-5 h-5 text-[#8B2C24] shrink-0" />,
        content: (
          <div className="space-y-4 font-serif">
             <div className="space-y-3">
                <div className="p-4 border border-[#DBCDB3] rounded-sm bg-[#F6F3E9]">
                  <strong className="text-black text-lg block mb-2">VÙNG HỦY DIỆT:</strong>
                  <div className="text-[var(--color-muted-dark)] italic space-y-1">
                    <p>1: Tà thức</p>
                    <p>2: Tưởng thức</p>
                    <p>3: Vô thức</p>
                    <p className="text-sm border-t border-[#DBCDB3] pt-2 mt-2 font-sans font-bold uppercase">(Ranh giới: Chuyển vùng SINH TỬ)</p>
                  </div>
                </div>
                <div className="p-4 border border-[#DBCDB3] rounded-sm bg-[#F6F3E9]">
                  <strong className="text-black text-lg block mb-2">VÙNG MONG MANH:</strong>
                  <div className="text-[var(--color-muted-dark)] italic space-y-1">
                    <p>4: Nhận thức</p>
                    <p>5: Ý thức</p>
                    <p className="text-sm border-t border-[#DBCDB3] pt-2 mt-2 font-sans font-bold uppercase">(Ranh giới: Chuyển vùng TÂM THỨC)</p>
                  </div>
                </div>
                 <div className="p-4 border border-[#DBCDB3] rounded-sm bg-[#F6F3E9]">
                  <strong className="text-[#8B2C24] text-lg block mb-2">VÙNG ÁNH SÁNG:</strong>
                  <div className="text-[var(--color-muted-dark)] italic space-y-1">
                    <p>6: Duy thức</p>
                    <p>7: Giao thức</p>
                    <p>8: Tâm thức</p>
                    <p>9: Giác ngộ</p>
                    <p>10: Tỉnh thức</p>
                  </div>
                </div>
             </div>
          </div>
        )
      },
      {
         title: "2. THÁP GIÁ TRỊ SỐNG",
         icon: <LayoutGrid className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <div className="space-y-4 font-serif text-base">
               <div className="border-l-2 border-[#DBCDB3] pl-4 py-2">
                  <strong className="text-black block mb-2 uppercase tracking-wider">Nền Tảng / Trưởng Thành</strong>
                  <ul className="list-disc pl-5 text-[var(--color-muted-dark)] italic space-y-2">
                     <li>10: Nền tảng vững chắc</li>
                     <li>20: Trưởng thành có định hướng</li>
                     <li>30: Trưởng thành độc lập</li>
                  </ul>
               </div>
               <div className="border-l-2 border-[#8B2C24] pl-4 py-2">
                  <strong className="text-[#8B2C24] block mb-2 uppercase tracking-wider">Giá Trị Để Lại / Thành Công</strong>
                  <ul className="list-disc pl-5 text-[var(--color-muted-dark)] italic space-y-2">
                     <li>40: Điểm giao thời</li>
                     <li>50: Thành công trải nghiệm</li>
                     <li>60: Thành công thấu hiểu</li>
                     <li>80 - 0: Giá trị để lại truyền thừa</li>
                  </ul>
               </div>
            </div>
         )
      },
      {
         title: "3. 9 CẢNH GIỚI CỦA TÂM, THÂN, TRÍ",
         icon: <Compass className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <div className="grid gap-3 font-serif text-base">
               <div className="bg-[#F6F3E9] p-4 border border-[#DBCDB3] rounded-sm">
                  <strong className="text-[#8B2C24] text-lg block mb-2">TÂM:</strong>
                  <div className="italic text-[var(--color-muted-dark)] space-y-1">
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Cao):</span> 9. Thức tỉnh | 8. Thanh thuần | 7. Thanh tịnh</p>
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Trung):</span> 6. Thuần khiết | 5. Sáng rõ | 4. Sạch dần</p>
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Thấp):</span> 3. Mù mịt | 2. Rối ren | 1. Đen tối</p>
                  </div>
               </div>
               <div className="bg-[#F6F3E9] p-4 border border-[#DBCDB3] rounded-sm">
                  <strong className="text-[#8B2C24] text-lg block mb-2">THÂN:</strong>
                  <div className="italic text-[var(--color-muted-dark)] space-y-1">
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Cao):</span> 9. Giác ngộ | 8. Tỏa hào quang | 7. Xuất thần</p>
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Trung):</span> 6. Yêu đời | 5. Linh hoạt | 4. Khỏe mạnh</p>
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Thấp):</span> 3. Yếu đuối | 2. Ù lì | 1. Rối loạn</p>
                  </div>
               </div>
                <div className="bg-[#F6F3E9] p-4 border border-[#DBCDB3] rounded-sm">
                  <strong className="text-[#8B2C24] text-lg block mb-2">TRÍ:</strong>
                  <div className="italic text-[var(--color-muted-dark)] space-y-1">
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Cao):</span> 9. Thông linh | 8. Thông suốt | 7. Sắc nét</p>
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Trung):</span> 6. Sáng tỏ | 5. Thông minh | 4. Sáng dần</p>
                    <p><span className="text-black not-italic font-bold w-16 inline-block">(Thấp):</span> 3. Lập lòe | 2. Mập mờ | 1. Ngu đần</p>
                  </div>
               </div>
            </div>
         )
      },
      {
         title: "4. VÒNG TRÒN HẠNH PHÚC",
         icon: <Circle className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <div className="font-serif text-base italic text-[var(--color-muted-dark)] bg-white p-6 border border-[#DBCDB3] rounded-sm">
               <span className="block mb-4 not-italic font-bold text-black text-lg">Sơ đồ hình tròn xoay quanh chữ "Hạnh Phúc" ở trung tâm, kết nối với:</span>
               <ul className="list-disc pl-5 space-y-2 text-black font-semibold text-lg">
                  <li>Xung quanh <span className="font-normal italic text-[var(--color-muted-dark)]">(hạnh phúc)</span></li>
                  <li>Bắt đầu <span className="font-normal italic text-[var(--color-muted-dark)]">(thiện sáng)</span></li>
                  <li>Trên đường đi <span className="font-normal italic text-[var(--color-muted-dark)]">(lạc quan)</span></li>
                  <li>Kết thúc <span className="font-normal italic text-[var(--color-muted-dark)]">(phước lành)</span></li>
                  <li>Tương lai <span className="font-normal italic text-[var(--color-muted-dark)]">(rộng mở)</span></li>
                  <li>Toàn thế giới <span className="font-normal italic text-[var(--color-muted-dark)]">(hạnh phúc)</span></li>
               </ul>
            </div>
         )
      },
      {
         title: "5. THÁP TÂM THỨC",
         icon: <TreePine className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <div className="space-y-3 font-serif text-base bg-[#F6F3E9] p-5 border border-[#DBCDB3] rounded-sm">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-dashed border-[#DBCDB3] pb-3 gap-1">
                  <strong className="text-[#8B2C24] uppercase tracking-wider">Đỉnh cao VĨNH CỬU:</strong> 
                  <span className="italic text-[var(--color-ink-dark)]">Tỉnh thức, Giác ngộ</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-dashed border-[#DBCDB3] py-2 gap-1">
                  <strong className="uppercase tracking-wider">Hệ ánh sáng:</strong> 
                  <span className="italic text-[var(--color-muted-dark)]">Tâm thức, Giao thức, Duy thức</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-dashed border-[#DBCDB3] py-2 gap-1">
                  <strong className="uppercase tracking-wider">Điểm sáng:</strong> 
                  <span className="italic text-[var(--color-muted-dark)]">Nhận thức, Ý thức</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 gap-1">
                  <strong className="uppercase tracking-wider text-black">Hủy diệt:</strong> 
                  <span className="italic text-[var(--color-muted-dark)]">Tà thức, Tưởng thức, Vô thức</span>
               </div>
            </div>
         )
      }
    ]
  },
  {
    id: "nhuasong",
    title: "DANH MỤC: NHỰA SỐNG",
    subtitle: "Thực hành nuôi dưỡng và tăng tốc năng lượng",
    icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" />,
    items: [
      {
         title: "1. LIÊN LẠC TÂM THỨC",
         icon: <Zap className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 font-serif text-base">
               <li className="flex flex-col p-4 bg-[#F6F3E9] border border-[#DBCDB3] rounded-sm hover:border-[#988673] transition-colors">
                 <strong className="text-[#8B2C24]">01. NHÌN THẬT RÕ:</strong>
                 <span className="italic text-[var(--color-muted-dark)] mt-1">Nhìn rõ từng CHUYỂN ĐỘNG trong TÂM THỨC.</span>
               </li>
               <li className="flex flex-col p-4 bg-[#F6F3E9] border border-[#DBCDB3] rounded-sm hover:border-[#988673] transition-colors">
                 <strong className="text-[#8B2C24]">02. THẤY THẬT RÕ:</strong> 
                 <span className="italic text-[var(--color-muted-dark)] mt-1">Thấy rõ từng ĐIỂM CHỈNH bắt TÂM THỨC trả lời THẬT LÒNG.</span>
               </li>
               <li className="flex flex-col p-4 bg-[#F6F3E9] border border-[#DBCDB3] rounded-sm hover:border-[#988673] transition-colors">
                 <strong className="text-[#8B2C24]">03. TRẬT TỰ THẬT RÕ:</strong> 
                 <span className="italic text-[var(--color-muted-dark)] mt-1">Hiện hữu từng phần THIỆN SÁNG. CẦM NẮM rõ cảm xúc thật.</span>
               </li>
               <li className="flex flex-col p-4 bg-[#F6F3E9] border border-[#DBCDB3] rounded-sm hover:border-[#988673] transition-colors">
                 <strong className="text-[#8B2C24]">04. LẬP ÁNH SÁNG THẬT:</strong> 
                 <span className="italic text-[var(--color-muted-dark)] mt-1">Nâng cấp NHIỀU GÓC NHÌN, tinh tế để tỏa sáng TÂM HỒN THIỆN.</span>
               </li>
               <li className="flex flex-col p-4 bg-[#F6F3E9] border border-[#DBCDB3] rounded-sm hover:border-[#988673] transition-colors">
                 <strong className="text-[#8B2C24]">05. KIỂM CHỨNG & GẮN KẾT:</strong> 
                 <span className="italic text-[var(--color-muted-dark)] mt-1">Liên lạc SẮC NÉT để quyết định CHẤT LƯỢNG HÀNH ĐỘNG.</span>
               </li>
               <li className="flex flex-col p-4 bg-[#FCFBF8] border-2 border-[#DBCDB3] rounded-sm hover:border-[#8B2C24]/50 transition-colors">
                 <strong className="text-[#8B2C24]">06. THIỆN SÁNG VĨNH CỬU:</strong> 
                 <span className="italic text-[var(--color-muted-dark)] mt-1">Thăng hoa, tôn trọng tâm hồn và gắn THỜI GIAN LÂU DÀI.</span>
               </li>
            </ul>
         )
      },
      {
         title: "2. CỘT NĂNG LƯỢNG SỐNG",
         icon: <BookOpen className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <ul className="grid grid-cols-1 gap-3 font-serif text-base bg-[#F6F3E9] p-5 border border-[#DBCDB3] rounded-sm">
               <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pb-3 border-b border-dashed border-[#DBCDB3]">
                 <strong className="text-[#8B2C24] shrink-0 min-w-[120px]">01. ĐO RÕ:</strong> 
                 <span className="italic text-[var(--color-muted-dark)]">Thả lỏng để cột năng lượng sống BÁM RỄ và HÌNH THÀNH.</span>
               </li>
               <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-dashed border-[#DBCDB3]">
                 <strong className="text-[#8B2C24] shrink-0 min-w-[120px]">02. TRỤ RÕ:</strong> 
                 <span className="italic text-[var(--color-muted-dark)]">Nuôi các sợi cảm xúc để hình thành TRỤ CẢM XÚC MẠNH.</span>
               </li>
               <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-dashed border-[#DBCDB3]">
                 <strong className="text-[#8B2C24] shrink-0 min-w-[120px]">03. TĂNG TỐC:</strong> 
                 <span className="italic text-[var(--color-muted-dark)]">Chảy mạnh cảm xúc - NỐI THẲNG vào tâm thức.</span>
               </li>
               <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-dashed border-[#DBCDB3]">
                 <strong className="text-[#8B2C24] shrink-0 min-w-[120px]">04. ỔN ĐỊNH:</strong> 
                 <span className="italic text-[var(--color-muted-dark)]">Tạo vùng năng lượng ỔN ĐỊNH để SỢI CẢM XÚC được KẾT TINH CHẤT.</span>
               </li>
               <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-dashed border-[#DBCDB3]">
                 <strong className="text-[#8B2C24] shrink-0 min-w-[120px]">05. CHẢY NHỰA SỐNG:</strong> 
                 <span className="italic text-[var(--color-muted-dark)]">Đưa tâm thức vào vùng THUẦN KHIẾT để thấy TUỆ NHẤT QUÁN khi hành động.</span>
               </li>
               <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pt-2">
                 <strong className="text-[#8B2C24] shrink-0 min-w-[120px]">06. VĨNH CỬU:</strong> 
                 <span className="italic text-[var(--color-muted-dark)]">SÁP NHẬP HOÀN THIỆN giữa THÂN và TÂM THỨC.</span>
               </li>
            </ul>
         )
      },
      {
         title: "3. TU, HỌC, LÀM ĐÚNG",
         icon: <TreePine className="w-5 h-5 text-[#8B2C24] shrink-0" />,
         content: (
            <div className="flex flex-col gap-4 text-center">
               <div className="bg-[#FCFBF8] border border-[#DBCDB3] p-5 rounded-sm shadow-sm transform transition-transform hover:scale-[1.02]">
                  <div className="font-bold text-xl md:text-2xl mb-1 text-[var(--color-ink-dark)] font-serif uppercase tracking-widest">
                    TU <span className="text-[var(--color-muted-dark)] font-normal mx-3 font-sans">➔</span> ĐÚNG <span className="text-[var(--color-muted-dark)] font-normal mx-3 font-sans">➔</span> <span className="text-[#8B2C24]">BỔ TÂM</span>
                  </div>
               </div>
               <div className="bg-[#FCFBF8] border border-[#DBCDB3] p-5 rounded-sm shadow-sm transform transition-transform hover:scale-[1.02]">
                  <div className="font-bold text-xl md:text-2xl mb-1 text-[var(--color-ink-dark)] font-serif uppercase tracking-widest">
                    HỌC <span className="text-[var(--color-muted-dark)] font-normal mx-3 font-sans">➔</span> ĐÚNG <span className="text-[var(--color-muted-dark)] font-normal mx-3 font-sans">➔</span> <span className="text-[#8B2C24]">BỔ NÃO</span>
                  </div>
               </div>
               <div className="bg-[#FCFBF8] border border-[#DBCDB3] p-5 rounded-sm shadow-sm transform transition-transform hover:scale-[1.02]">
                  <div className="font-bold text-xl md:text-2xl mb-1 text-[var(--color-ink-dark)] font-serif uppercase tracking-widest">
                    LÀM <span className="text-[var(--color-muted-dark)] font-normal mx-3 font-sans">➔</span> ĐÚNG <span className="text-[var(--color-muted-dark)] font-normal mx-3 font-sans">➔</span> <span className="text-[#8B2C24]">BỔ TƯƠNG LẠI</span>
                  </div>
               </div>
            </div>
         )
      }
    ]
  }
];

export default function BonusSection() {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>("bando");
  const [expandedItemIds, setExpandedItemIds] = useState<Record<string, string | null>>({
    bando: "1. THÁP ÁNH SÁNG",
    nhuasong: "1. LIÊN LẠC TÂM THỨC"
  });

  const toggleCategory = (id: string) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  const toggleItem = (categoryId: string, itemTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItemIds(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === itemTitle ? null : itemTitle
    }));
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-[var(--color-border)] bg-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-[#8B2C24] blur-[30px] opacity-20 rounded-full"></div>
            <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-[#8B2C24] to-[#f45d4d] shadow-[0_0_30px_rgba(139,44,36,0.3)]">
              <Gift className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink-dark)] font-black uppercase tracking-widest leading-tight mb-6">
            MỞ KHÓA HOÀN TOÀN MIỄN PHÍ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2C24] to-[#d64132]">NỘI DUNG SỐNG SÁNG SUỐT</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-ink-dark)] font-bold font-serif mb-8 max-w-2xl mx-auto leading-relaxed">
            Phần quà <span className="uppercase text-[#8B2C24]">đặc biệt</span> dành riêng cho những ai nghiêm túc thực tập <span className="text-[#8B2C24] text-xl md:text-2xl font-black">99 Ngày</span> chuyển hoá cuộc đời!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
             <a href="#" className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg w-full sm:w-auto border border-gray-700">
               <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
               <div className="text-left font-sans">
                  <div className="text-[10px] leading-tight opacity-90">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
               </div>
             </a>
             <a href="#" className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg w-full sm:w-auto border border-gray-700">
               <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
               <div className="text-left font-sans">
                  <div className="text-[10px] leading-tight opacity-90">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
               </div>
             </a>
          </div>
          
          <div className="inline-block bg-[#FCFBF8] border-2 border-dashed border-[#8B2C24] px-6 py-4 rounded-xl shadow-sm mt-2 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#8B2C24] opacity-5 group-hover:opacity-10 transition-opacity"></div>
             <p className="text-base md:text-xl text-[var(--color-ink-dark)] font-bold italic font-serif relative z-10">
               👉 Hãy tải App và nhắn trực tiếp cho <span className="text-[#8B2C24] underline decoration-wavy decoration-1 underline-offset-4">Người hướng dẫn</span> để lấy tài khoản ngay nhé!
             </p>
          </div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {CATEGORIES.map((category, catIndex) => {
            const isCatExpanded = expandedCategoryId === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`border-2 rounded-md md:rounded-md overflow-hidden transition-all duration-700 ease-in-out shadow-sm ${
                  isCatExpanded ? 'border-[#988673] bg-[#FFFdf8]' : 'border-[#DBCDB3] bg-white hover:border-[#988673]/50'
                }`}
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left focus:outline-none group bg-[#F6F3E9]"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-md flex items-center justify-center border transition-colors duration-700 ease-in-out ${isCatExpanded ? 'bg-white border-[#DBCDB3] text-[#8B2C24]' : 'bg-white border-[#DBCDB3] text-[var(--color-ink-dark)] group-hover:bg-[#FCFBF8]'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`font-serif text-2xl sm:text-3xl font-bold uppercase tracking-widest leading-tight transition-colors duration-700 ease-in-out ${isCatExpanded ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>
                        {category.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-serif italic text-[var(--color-muted-dark)] mt-1">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-md shrink-0 flex items-center justify-center border border-[#DBCDB3] transition-all duration-700 ease-in-out ${isCatExpanded ? 'bg-[#FCFBF8] rotate-180' : 'bg-white group-hover:bg-[#FCFBF8]'}`}>
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-ink-dark)] flex-shrink-0" />
                  </div>
                </button>

                <AnimatePresence>
                  {isCatExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-8 pt-4 border-t border-dashed border-[#DBCDB3] grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, idx) => {
                          const isItemExpanded = expandedItemIds[category.id] === item.title;
                          
                          return (
                            <div 
                              key={idx} 
                              className={`border rounded-sm md:rounded-md overflow-hidden transition-all duration-700 ease-in-out ${isItemExpanded ? 'border-[#988673] shadow-sm row-span-2 md:col-span-2' : 'border-[#DBCDB3] hover:border-[#988673]/50 max-h-[72px] sm:max-h-[80px]'}`}
                            >
                              <button
                                onClick={(e) => toggleItem(category.id, item.title, e)}
                                className={`w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none group ${isItemExpanded ? 'bg-[#FCFBF8]' : 'bg-white hover:bg-[#F6F3E9]'}`}
                              >
                                <div className="flex items-center gap-3 sm:gap-4">
                                   <div className={`shrink-0 ${isItemExpanded ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>
                                      {item.icon}
                                   </div>
                                    <h4 className={`font-serif text-lg sm:text-xl font-bold transition-colors line-clamp-1 ${isItemExpanded ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>
                                      {item.title}
                                    </h4>
                                </div>
                                <div className={`shrink-0 transition-transform duration-700 ease-in-out ${isItemExpanded ? 'rotate-180 text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                                  <ChevronDown className="w-5 h-5" />
                                </div>
                              </button>
                              
                              <AnimatePresence>
                                {isItemExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-4 sm:p-5 pt-0 sm:pt-0 border-t border-[#DBCDB3] bg-white mt-4 sm:mt-5 mx-4 sm:mx-5">
                                      {item.content}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
