import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NineRealmsContent from "./NineRealmsSection";
import LightPyramidContent from "./LightPyramidSection";
import ValuePyramidContent from "./ValuePyramidSection";
import { Brain, Triangle, Layers, Compass } from "lucide-react";

export default function FrameworksGroupSection() {
  const [activeTab, setActiveTab] = useState<string>("nine-realms");

  const sections = [
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

        {/* Tabs Header */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-10 w-full max-w-4xl mx-auto">
          {sections.map((section) => {
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-md border-2 transition-all duration-500 ease-in-out focus:outline-none ${isActive ? 'bg-[#FCFBF8] border-[#8B2C24] scale-105 shadow-md z-10 relative' : 'bg-white/60 border-transparent hover:bg-white saturate-50 hover:saturate-100 opacity-70 hover:opacity-100 border-[#DBCDB3]/30'}`}
              >
                <div className={`mb-2 sm:mb-3 transition-colors duration-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-sm ${isActive ? 'bg-[#8B2C24] text-white' : 'bg-[#F6F3E9] text-[var(--color-ink-dark)] border border-[#DBCDB3]'}`}>
                  {React.cloneElement(section.icon as React.ReactElement<any>, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className={`font-serif text-[11px] sm:text-sm md:text-base font-bold text-center tracking-widest uppercase transition-colors duration-500 line-clamp-2 ${isActive ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className={`text-[9px] sm:text-[11px] font-sans text-center transition-colors duration-500 line-clamp-2 px-1 ${isActive ? 'text-[#8B2C24]/80' : 'text-[var(--color-muted-dark)]'}`}>
                      {section.description}
                    </p>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Tab Content Area */}
        <div className="w-full relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {sections.map((section) => {
              if (section.id !== activeTab) return null;
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {section.content}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

