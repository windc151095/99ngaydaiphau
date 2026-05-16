import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import NineRealmsContent from "./NineRealmsSection";
import { UnconsciousLevelsContent } from "./UnconsciousLevelsSection";
import LightPyramidContent from "./LightPyramidSection";
import ValuePyramidContent from "./ValuePyramidSection";
import { Brain, Triangle, Layers, Compass, Gift, Sparkles, X, EyeOff, ChevronDown } from "lucide-react";

export default function FrameworksGroupSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isGiftOpened, setIsGiftOpened] = useState<boolean>(false);

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    
    // Confetti effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  const sections = [
    { 
      id: "unconscious-levels", 
      title: "9 TẦNG VÔ THỨC", 
      description: "Cấp độ đánh giá sự thức tỉnh", 
      icon: <EyeOff className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: <UnconsciousLevelsContent /> 
    },
    { 
      id: "nine-realms", 
      title: "9 CẢNH GIỚI THÂN TÂM TRÍ", 
      description: "", 
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: <NineRealmsContent /> 
    },
    { 
      id: "light-pyramid", 
      title: "THÁP ÁNH SÁNG", 
      description: "Thước đo quản trị cảm xúc trong ngày", 
      icon: <Triangle className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: <LightPyramidContent /> 
    },
    { 
      id: "value-pyramid", 
      title: "THÁP GIÁ TRỊ SỐNG", 
      description: "Thước đo và nhiệm vụ quản trị cuộc đời", 
      icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: <ValuePyramidContent /> 
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-0 bg-[#EFECE1] relative border-t border-[var(--color-border)] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-md bg-white border border-[#DBCDB3] shadow-sm mb-4">
            <Compass className="w-6 h-6 md:w-8 md:h-8 text-[#8B2C24]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[var(--color-ink-dark)] leading-tight px-2 md:px-4">
            Thước đo, thang đo và hệ quy chiếu cho chính cuộc đời của mình.<br />
            <span className="font-serif font-bold text-2xl sm:text-3xl md:text-5xl mt-4 md:mt-6 block text-[#8B2C24] uppercase tracking-widest leading-tight">
              ĐỊNH NGHĨA ĐƯỢC THÌ DÙNG ĐƯỢC.<br />
              ĐO LƯỜNG ĐƯỢC THÌ QUẢN TRỊ ĐƯỢC.
            </span>
            <span className="text-sm sm:text-base md:text-lg text-[var(--color-muted-dark)] italic mt-4 md:mt-5 inline-block font-serif normal-case">(Mentor Tuệ Sáng)</span>
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {!isGiftOpened ? (
            <motion.div
              key="gift"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center cursor-pointer group"
              onClick={handleOpenGift}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 animate-ping rounded-full blur-xl"></div>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#8B2C24] to-[#5a1b16] rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-[#B89650]"
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
                  {/* Ribbon Vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-b from-[#DBCDB3] via-[#B89650] to-[#DBCDB3] shadow-lg"></div>
                  {/* Ribbon Horizontal */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-[#DBCDB3] via-[#B89650] to-[#DBCDB3] shadow-lg"></div>
                  
                  <Gift className="w-16 h-16 md:w-24 md:h-24 text-white z-10 drop-shadow-md" />
                  
                  {/* Sparkles */}
                  <Sparkles className="absolute top-4 left-4 w-6 h-6 text-yellow-300 animate-pulse" />
                  <Sparkles className="absolute bottom-6 right-6 w-8 h-8 text-yellow-200 animate-pulse delay-300" />
                  <Sparkles className="absolute top-8 right-8 w-5 h-5 text-yellow-400 animate-pulse delay-700" />
                </motion.div>
              </div>
              
              <h3 className="mt-8 font-serif text-2xl md:text-3xl font-bold text-[var(--color-ink-dark)] tracking-widest text-center">
                MỞ QUÀ TẶNG CỦA BẠN
              </h3>
              <p className="mt-2 text-[var(--color-muted-dark)] font-serif italic text-sm md:text-base text-center max-w-sm">
                Nhấn vào hộp quà để khám phá 4 báu vật giúp bạn quản trị cuộc đời
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="tabs-content"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center"
            >
              <div className="mb-8 w-full max-w-4xl flex items-center justify-between px-4 sm:px-0">
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-ink-dark)] text-center w-full">
                  Bạn đã mở khóa <span className="font-bold text-[#8B2C24]">4 Báu Vật Tâm Thức</span>
                </h3>
              </div>

              {/* Tab Content Area (Changed to Accordion) */}
              <div className="w-full flex flex-col gap-4 mt-8">
                {sections.map((section) => {
                  const isActive = activeTab === section.id;
                  
                  return (
                    <div key={section.id} className="w-full bg-white/60 border border-[#DBCDB3] rounded-md overflow-hidden">
                      <button
                        onClick={() => setActiveTab(isActive ? null : section.id)}
                        className={`w-full flex items-center justify-between p-4 md:p-6 transition-all duration-300 ${isActive ? 'bg-[#FCFBF8] border-b border-[#DBCDB3]' : 'hover:bg-white'}`}
                      >
                        <div className="flex items-center gap-4 text-left">
                          <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex flex-shrink-0 items-center justify-center shadow-sm transition-colors duration-300 ${isActive ? 'bg-[#8B2C24] text-white' : 'bg-[#F6F3E9] text-[var(--color-ink-dark)] border border-[#DBCDB3]'}`}>
                            {React.cloneElement(section.icon as React.ReactElement<any>, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                          </div>
                          <div>
                            <h3 className={`font-serif text-sm md:text-lg font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>
                              {section.title}
                            </h3>
                            {section.description && (
                              <p className="text-xs md:text-sm font-sans text-[var(--color-muted-dark)] mt-1">
                                {section.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-[#8B2C24]/10 text-[#8B2C24]' : 'bg-[#F6F3E9] text-[var(--color-muted-dark)]'}`}>
                            {isActive ? <X className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-white overflow-hidden"
                          >
                            <div className="p-4 md:p-8 pt-8">
                              {section.content}
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
      </div>
    </section>
  );
}

