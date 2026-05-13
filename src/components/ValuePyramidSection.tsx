import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ChevronDown } from "lucide-react";
import { ageRangesData } from "../data/valuePyramidData";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const AgeRangeContent = ({ item }: { item: any }) => {
  return (
    <div className="px-5 pb-8 pt-2 md:px-8 font-sans">
      <div className="bg-[#EFECE1]/60 p-4 border-l-4 border-[#8B2C24] italic text-[var(--color-ink-dark)] mb-8">
        <span className="font-bold uppercase not-italic text-xs tracking-widest mr-2">Mục tiêu:</span>
        {item.objective}
      </div>
      <div className="space-y-8">
        {item.points.map((pt: any, idx: number) => (
          <div key={idx} className="relative">
            <div className="flex items-start">
              <div className="shrink-0 w-8 h-8 rounded-md bg-[#EFECE1] text-[#8B2C24] flex items-center justify-center font-bold text-sm mr-4 mt-0.5 border border-[#DBCDB3]">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-ink-dark)] text-base md:text-lg mb-3 uppercase">{pt.title}</h4>
                <div className="space-y-3 bg-[#FCFBF8] p-4 border border-[#DBCDB3]/40 rounded-lg">
                  <p className="text-[var(--color-ink-dark)] text-sm md:text-base">
                    <span className="font-bold text-xs uppercase tracking-widest text-[#B59A6D] mr-2 block mb-1">Làm rõ</span> 
                    {pt.clarify}
                  </p>
                  <div className="h-px w-full bg-[#DBCDB3]/30 my-2"></div>
                  <p className="text-[var(--color-muted-dark)] italic text-sm md:text-base">
                    <span className="font-bold text-xs uppercase tracking-widest text-[#1C5C8A] mr-2 block mb-1 not-italic">Ví dụ</span> 
                    {pt.example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component that manages its own expanded state to use within map
const AgeRangeItem = ({ item }: { item: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className={`w-full transition-all duration-700 ease-in-out ${isExpanded ? 'bg-[#FCFBF8] border border-[#8B2C24] shadow-[4px_4px_0_0_rgba(208,48,39,0.2)] rounded-sm relative z-10' : 'bg-[#EFECE1]/50 hover:bg-[#EFECE1]/80 rounded-sm border border-transparent'}`}
    >
      <button 
        onClick={() => !item.locked && setIsExpanded(!isExpanded)}
        className={`w-full p-4 md:p-6 text-left flex justify-between items-center group font-serif ${item.locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-3 mb-1">
            <h3 className={`text-lg md:text-2xl font-bold uppercase tracking-widest ${item.locked ? 'text-[#8F969E]' : 'text-[#8B2C24]'}`}>
              {item.title}
            </h3>
            {item.locked && (
              <span className="inline-flex items-center justify-center px-2 py-1 bg-gray-200 text-gray-500 text-xs font-bold rounded-md uppercase tracking-widest border border-gray-300">
                <Lock className="w-3 h-3 mr-1" /> Khóa
              </span>
            )}
          </div>
          {item.subtitle && (
            <p className="text-xs md:text-sm font-bold text-[var(--color-ink-dark)] uppercase tracking-widest mt-2">{item.subtitle}</p>
          )}
        </div>
        
        {!item.locked && (
          <div className="text-[var(--color-muted-dark)] shrink-0 transition-transform duration-700 ease-in-out" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <ChevronDown className="w-6 h-6" />
          </div>
        )}
      </button>
      
      {!item.locked && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-dashed border-[#DBCDB3] mx-4 md:mx-6 mb-6"></div>
              <AgeRangeContent item={item} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default function ValuePyramidContent() {
  const [showList, setShowList] = useState(true);

  return (
    <div className="relative w-full pt-10 md:pt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-10 relative font-serif">
            <h2 className="text-2xl md:text-4xl font-bold text-[#8B2C24] uppercase tracking-widest border-b-2 border-dashed border-[#DBCDB3] pb-4 inline-block">
              Tháp giá trị sống
            </h2>
          </div>

          {/* Introductory Video */}
          <div className="mb-16 w-full max-w-4xl mx-auto bg-white p-2 md:p-4 rounded-xl border border-[#DBCDB3] shadow-sm">
            <h3 className="font-serif text-lg md:text-xl font-bold text-center text-[#8B2C24] mb-3 md:mb-4 uppercase tracking-wider">
              Video: Giá trị của Tháp Giá Trị Sống
            </h3>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/OmId3BUGKhg" 
                title="Giá trị của Tháp Giá Trị Sống" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </FadeIn>

        {/* The Circle visualization */}
        <FadeIn delay={0.2}>
          <div className="relative w-full max-w-4xl mx-auto mb-20 bg-[#FCFBF8] rounded-md p-6 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-[#DBCDB3]/50">
            {/* Aspect square forces a nice circle layout container */}
            <div className="aspect-[4/5] sm:aspect-square relative w-full flex items-center justify-center">
              
              {/* SVG Chart */}
              <svg viewBox="0 0 100 100" className="w-[85%] md:w-[70%] h-[85%] md:h-[70%] rounded-md shadow-2xl transform -rotate-90 relative z-20">
                {/* Top Right (Nền Tảng) */}
                <path d="M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z" fill="#EFA924" />
                {/* Bottom Right (Trưởng Thành) */}
                <path d="M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z" fill="#D37B68" />
                {/* Bottom Left (Thành Công) */}
                <path d="M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z" fill="#44A8D6" />
                {/* Top Left (Giá trị để lại) */}
                <path d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z" fill="#2E6FA7" />

                {/* Dashed lines for 10-year splits */}
                <line x1="50" y1="50" x2="85.355" y2="85.355" stroke="white" strokeWidth="0.8" strokeDasharray="2, 2" />
                <line x1="50" y1="50" x2="14.645" y2="85.355" stroke="white" strokeWidth="0.8" strokeDasharray="2, 2" />
                <line x1="50" y1="50" x2="14.645" y2="14.645" stroke="white" strokeWidth="0.8" strokeDasharray="2, 2" />
                <line x1="50" y1="50" x2="85.355" y2="14.645" stroke="white" strokeWidth="0.8" strokeDasharray="2, 2" />
                
                {/* Cross axes */}
                <line x1="100" y1="50" x2="0" y2="50" stroke="white" strokeWidth="1" />
                <line x1="50" y1="100" x2="50" y2="0" stroke="white" strokeWidth="1" />
                
                {/* Center small decorative circle */}
                <circle cx="50" cy="50" r="10" fill="white" />
                <path d="M 50 50 L 60 50 A 10 10 0 0 1 50 60 Z" fill="#A8D08D" />
                <path d="M 50 50 L 50 60 A 10 10 0 0 1 40 50 Z" fill="#FFE699" />
                <path d="M 50 50 L 40 50 A 10 10 0 0 1 50 40 Z" fill="#C55A11" />
                <path d="M 50 50 L 50 40 A 10 10 0 0 1 60 50 Z" fill="#9DC3E6" />
                <circle cx="50" cy="50" r="2.5" fill="white" />
              </svg>

              {/* Inner quadrant texts (NỀN TẢNG, etc) */}
              <div className="absolute top-[32%] sm:top-[28%] md:top-[26%] right-[20%] sm:right-[22%] md:right-[26%] rotate-45 text-[#9D6800] font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl opacity-50 tracking-wider pointer-events-none z-30">
                NỀN TẢNG
              </div>
              <div className="absolute bottom-[32%] sm:bottom-[28%] md:bottom-[26%] right-[16%] sm:right-[18%] md:right-[24%] -rotate-45 text-white/50 sm:text-white/60 font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wider pointer-events-none leading-none z-30">
                TRƯỞNG <br/> THÀNH
              </div>
              <div className="absolute bottom-[32%] sm:bottom-[28%] md:bottom-[26%] left-[16%] sm:left-[20%] md:left-[24%] rotate-45 text-white/50 sm:text-white/60 font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wider pointer-events-none leading-none z-30">
                THÀNH <br/> CÔNG
              </div>
              <div className="absolute top-[32%] sm:top-[28%] md:top-[26%] left-[20%] sm:left-[22%] md:left-[26%] -rotate-45 text-white/50 font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wider pointer-events-none text-right leading-none z-30">
                GIÁ TRỊ<br/>ĐỂ LẠI
              </div>

              {/* Floating Numbers around the circle */}
              <div className="absolute top-[8%] sm:top-[0] md:top-[10%] left-1/2 -translate-x-1/2 -translate-y-5 md:-translate-y-12 bg-[#FCFBF8] px-2 text-[#8B2C24] font-bold text-lg md:text-2xl border-2 border-[#8B2C24] rounded-md z-40 w-auto h-8 md:h-12 flex items-center justify-center min-w-[3rem] md:min-w-[5rem]">
                 <span className="absolute -top-4 md:-top-6 text-[10px] md:text-sm text-[var(--color-ink)] font-normal">tuổi</span>
                 80 <span className="text-[var(--color-ink)] font-normal text-sm md:text-xl ml-1 md:ml-3">0</span>
              </div>
              <div className="absolute top-[18%] md:top-[22%] right-[5%] md:right-[15%] translate-x-1/2 -translate-y-1/2 bg-[#FCFBF8] text-gray-700 font-bold text-sm md:text-xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-md z-40 hidden sm:flex">
                 10
              </div>
              <div className="absolute top-1/2 right-[5%] sm:right-0 md:right-[10%] translate-x-1/2 -translate-y-1/2 bg-[#FCFBF8] text-gray-700 font-bold text-sm md:text-xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-md z-40 border border-[#DBCDB3]">
                 20
              </div>
              <div className="absolute bottom-[18%] md:bottom-[22%] right-[5%] md:right-[15%] translate-x-1/2 translate-y-1/2 bg-[#FCFBF8] text-gray-700 font-bold text-sm md:text-xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-md z-40 hidden sm:flex">
                 30
              </div>
              <div className="absolute bottom-[8%] sm:bottom-0 md:bottom-[10%] left-1/2 -translate-x-1/2 translate-y-2 md:translate-y-12 bg-[#FCFBF8] border border-[#DBCDB3] text-gray-700 font-bold text-lg md:text-2xl w-auto h-8 md:h-12 flex items-center justify-center rounded-md z-40 px-3 md:px-4">
                 40 <span className="text-[10px] md:text-sm font-normal ml-1">tuổi</span>
              </div>
              <div className="absolute bottom-[18%] md:bottom-[22%] left-[5%] md:left-[15%] -translate-x-1/2 translate-y-1/2 bg-[#FCFBF8] text-gray-700 font-bold text-sm md:text-xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-md z-40 hidden sm:flex">
                 50
              </div>
              <div className="absolute top-1/2 left-[5%] sm:left-0 md:left-[10%] -translate-x-1/2 -translate-y-1/2 bg-[#FCFBF8] border border-[#DBCDB3] text-gray-700 font-bold text-sm md:text-xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-md z-40">
                 60
              </div>
              <div className="absolute top-[18%] md:top-[22%] left-[5%] md:left-[15%] -translate-x-1/2 -translate-y-1/2 bg-[#FCFBF8] text-gray-700 font-bold text-sm md:text-xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-md z-40 hidden sm:flex">
                 70
              </div>
              
              {/* Text Labels positioned around the circle */}
              <div className="absolute top-[12%] sm:top-[8%] right-[8%] sm:right-[10%] md:right-[20%] text-right text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                Xây <span className="font-bold">NỀN TẢNG</span> <br className="md:hidden"/> đầu tiên
              </div>
              <div className="absolute top-[32%] sm:top-[30%] md:top-[28%] -right-[2%] sm:-right-2 md:right-[4%] text-left text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[90px] md:max-w-[160px] leading-tight">
                Xây <span className="font-bold">NỀN TẢNG</span> <br/> vững chắc
              </div>
              
              <div className="absolute bottom-[32%] sm:bottom-[30%] md:bottom-[28%] -right-[2%] sm:-right-2 md:right-[4%] text-left text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                <span className="font-bold uppercase">Trưởng thành</span> <br/> có định hướng
              </div>
              <div className="absolute bottom-[12%] sm:bottom-[8%] right-[8%] sm:right-[10%] md:right-[20%] text-left text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                <span className="font-bold uppercase">Trưởng thành</span> <br className="md:hidden"/> độc lập
              </div>
              
              <div className="absolute bottom-[12%] sm:bottom-[8%] left-[8%] sm:left-[10%] md:left-[20%] text-right text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                <span className="font-bold uppercase">Thành công</span> <br className="md:hidden"/> trải nghiệm
              </div>
              <div className="absolute bottom-[32%] sm:bottom-[30%] md:bottom-[28%] -left-[2%] sm:-left-2 md:left-[4%] text-right text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                <span className="font-bold uppercase">Thành công</span> <br/> thấu hiểu
              </div>
              
              <div className="absolute top-[32%] sm:top-[30%] md:top-[28%] -left-[2%] sm:-left-2 md:left-[4%] text-right text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                GIÁ TRỊ ĐỂ LẠI<br/><span className="font-bold">truyền thừa</span>
              </div>
              <div className="absolute top-[12%] sm:top-[8%] left-[8%] sm:left-[10%] md:left-[20%] text-left sm:text-center md:text-right text-[10px] sm:text-xs md:text-base border-b border-gray-300 pb-1 z-30 max-w-[100px] md:max-w-[160px] leading-tight">
                GIÁ TRỊ ĐỂ LẠI<br className="md:hidden"/><span className="font-bold"> kết tinh</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.4}>
          <div className="text-center mb-12 relative z-20">
            <h3 className="text-lg md:text-2xl font-serif text-[var(--color-ink-dark)] uppercase tracking-widest border-b-2 border-dashed border-[#DBCDB3] pb-4 inline-block font-bold">
              Giá trị ĐỒNG HÀNH giữa tuổi ĐỜI và tuổi TUỆ
            </h3>
          </div>
        </FadeIn>

        <div className="flex justify-center mt-8 relative z-20">
          <button 
            onClick={() => setShowList(!showList)}
            className="px-8 py-3 bg-[#FCFBF8] border-2 border-[#DBCDB3] text-[var(--color-ink-dark)] font-serif font-bold uppercase tracking-wider text-sm hover:bg-[#EFECE1] transition-colors"
            style={{ boxShadow: '4px 4px 0px 0px rgba(213,208,178,0.4)' }}
          >
            {showList ? "Ẩn danh sách" : "Xem danh sách tuổi"}
          </button>
        </div>

        <AnimatePresence>
          {showList && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 w-full max-w-4xl mx-auto relative z-20"
            >
              <div className="w-full">
                <div className="flex flex-col space-y-4">
                  {ageRangesData.map((item, idx) => (
                    <AgeRangeItem key={idx} item={item} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
