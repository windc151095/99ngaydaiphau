import { motion } from "motion/react";
import { ArrowRight, BatteryWarning, HeartCrack, PenTool, UserX, Ghost, ChevronRight, ChevronLeft, Scale, VenetianMask, Brain, Link as LinkIcon, Repeat, UserMinus, Ear, ShoppingBag, Zap, TrendingDown, MessageSquareX, CloudLightning, Flag, PauseCircle, Target, Footprints, Flower2, Sunrise, HeartHandshake, BatteryCharging, Trophy, Sun, Moon, AlertCircle, Eye, Flame, ShieldAlert, Compass, Sprout, Sparkles } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UnconsciousLevelsSection from "./components/UnconsciousLevelsSection";
import WaterFlushStorySection from "./components/WaterFlushStorySection";
import FrameworksGroupSection from "./components/FrameworksGroupSection";
import ResultsSection from "./components/ResultsSection";
import BonusSection from "./components/BonusSection";
import MapDirectorySection from "./components/MapDirectorySection";
import MantrasSection from "./components/MantrasSection";
import ReflectionsSection from "./components/ReflectionsSection";

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

import RegistrationFormSection from './components/sections/RegistrationFormSection';
export default function App() {
  const painScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPainLeft, setCanScrollPainLeft] = useState(false);
  const [canScrollPainRight, setCanScrollPainRight] = useState(true);

  const checkPainScroll = () => {
    if (painScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = painScrollRef.current;
      setCanScrollPainLeft(scrollLeft > 0);
      setCanScrollPainRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkPainScroll();
    window.addEventListener("resize", checkPainScroll);
    return () => window.removeEventListener("resize", checkPainScroll);
  }, []);

  const scrollPainLeft = () => {
    if (painScrollRef.current) {
      painScrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollPainRight = () => {
    if (painScrollRef.current) {
      painScrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-[var(--color-accent)] selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=2500" 
            alt="Người đứng giữa dòng người" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)] via-[var(--color-paper)]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-[var(--color-gold)] font-sans tracking-[0.15em] uppercase text-xs sm:text-sm md:text-base font-bold mb-4 opacity-90">
              THỬ THÁCH 99 NGÀY ĐẠI PHẪU NỘI TÂM
            </h2>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[var(--color-ink-dark)] mb-2">
              <span className="font-bold">CONNECTING</span> <span className="italic text-[var(--color-gold)] font-medium">WISE MINDS</span>
              <br />
              <span className="font-bold">(CWM)</span>
            </h1>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-bold text-[var(--color-ink-dark)] mt-3 mb-6 uppercase tracking-wide">
              KẾT NỐI TÂM TRÍ SÁNG SUỐT ĐỂ ĐƯA RA<br className="hidden sm:block" /> QUYẾT ĐỊNH ĐÚNG ĐẮN
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-2xl mx-auto mb-10 px-4 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-muted-dark)] font-serif leading-relaxed">
              Ngừng làm nô lệ cho cảm xúc. Giành lại quyền làm chủ cuộc đời từ tay Vô thức.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button onClick={() => { document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" }); }} className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:px-10 font-serif font-bold tracking-widest uppercase text-white bg-[#8B2C24] hover:bg-[#6E2D2A] transition-all duration-700 ease-in-out rounded-md text-sm sm:text-base overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                TÔI MUỐN TỈNH GIẤC NGAY HÔM NAY <span className="text-lg group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
              </span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: CHẠM VÀO NỖI ĐAU */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-[var(--color-border)] bg-[var(--color-paper)] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-12 md:mb-20 text-[var(--color-ink-dark)] max-w-4xl mx-auto leading-tight relative">
              <span className="text-[var(--color-muted)] block text-xs sm:text-sm md:text-base font-sans uppercase tracking-[0.2em] mb-4">Hãy thành thật với chính mình...</span>
              Đã bao lần bạn cảm thấy:
            </h2>
          </FadeIn>

          <div className="relative group/pain">
            {canScrollPainLeft && (
              <button 
                onClick={scrollPainLeft}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[var(--color-ink-dark)] hover:bg-[var(--color-surface)] hover:scale-110 transition-all border border-[var(--color-border)] opacity-0 group-hover/pain:opacity-100"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div 
              ref={painScrollRef} 
              onScroll={checkPainScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
            {[
              { icon: HeartCrack, title: "1. Mất kiểm soát cảm xúc", desc: "Vừa hứa sẽ kiên nhẫn, nhỏ nhẹ với con, nhưng chỉ 5 phút sau lại gầm lên tức giận như một kẻ xa lạ. Để rồi đêm về nhìn con ngủ lại trào nước mắt dằn vặt bản thân?" },
              { icon: BatteryWarning, title: "2. Bận rộn ảo", desc: "Cày cuốc 12-14 tiếng/ngày, lướt điện thoại vô thức đến khuya. Nhìn bề ngoài rất bận rộn, nhưng cuối ngày thấy lòng trống rỗng, không tạo ra giá trị gì ngoài sự rã rời của thể xác?" },
              { icon: Scale, title: "3. Cay cú và Đổ lỗi", desc: "Luôn thấy người khác sai, thấy sếp bất công, thấy vợ/chồng vô tâm không hiểu mình. Ôm cục tức tưởi vào lòng ngày này qua tháng nọ khiến lồng ngực nặng trĩu, sinh ra tâm bệnh, thân bệnh?" },
              { icon: VenetianMask, title: "4. Sống vỏ bọc", desc: "Cố khoác lên mình chiếc áo hào nhoáng, tỏ ra mình ổn, mình tài giỏi thành đạt trên mạng xã hội. Nhưng sâu thẳm khi ở một mình lại là nỗi sợ hãi, tự ti và kiệt quệ năng lượng?" },
              { icon: Brain, title: "5. Tư duy tự hủy (Overthinking)", desc: "Thường xuyên trằn trọc đến 3h sáng, não bộ tự vẽ ra hàng trăm kịch bản tồi tệ về tiền bạc, tương lai, sợ hãi những điều chưa hề xảy ra. Tự mình lấy cắp đi nhựa sống của chính mình?" },
              { icon: LinkIcon, title: "6. Hy sinh độc hại", desc: "Đầu tắt mặt tối lo cho gia đình, nhà cửa gọn gàng, cơm nước tươm tất nhưng khuôn mặt luôn cau có, lời nói đầy đay nghiến. Bạn nghĩ mình đang hy sinh, nhưng thực chất đang \"đầu độc\" không khí gia đình bằng năng lượng oán trách?" },
              { icon: Repeat, title: "7. Nô lệ của sự trì hoãn", desc: "Biết rõ mình cần phải học, phải tập thể dục, phải thay đổi... nhưng luôn tự nhủ \"để ngày mai\", \"để lúc nào rảnh\". Dùng sự bận rộn để ngụy biện cho sự lười biếng và hèn nhát không dám đối diện với cái sai của mình?" },
              { icon: UserMinus, title: "8. Cô đơn giữa đám đông", desc: "Danh bạ hàng ngàn số, đi nhậu nhẹt cười nói thả ga, nhưng lúc tận cùng bế tắc, đau khổ lại không biết gọi cho ai. Các mối quan hệ chỉ dừng ở bề mặt vụ lợi, không có lấy một \"Tri kỷ\" để thấu cảm linh hồn?" },
              { icon: Ear, title: "9. Tù nhân của miệng đời", desc: "Sống rón rén, làm gì cũng sợ người ta đánh giá. Tự bóp nghẹt ước mơ, từ bỏ tiếng nói bên trong mình chỉ để gồng mình làm hài lòng những kẻ thậm chí chẳng quan tâm đến sự sống chết của bạn?" },
              { icon: ShoppingBag, title: "10. Trám lỗ hổng bằng vật chất", desc: "Thấy áp lực là đi mua sắm điên cuồng, ăn nhậu vô độ, quẹt thẻ để thỏa mãn cơn buồn bực chốc lát. Nhưng khi món đồ mang về nhà, niềm vui vụt tắt trong 3 giây, để lại một khoảng trống hoác và sự xót xa vì túi tiền cạn kiệt?" }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.1 + (idx * 0.05)} className="shrink-0 w-[85vw] sm:w-[320px] md:w-[320px] snap-center flex flex-col items-center text-center gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all duration-700 ease-in-out">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-[var(--color-paper)] flex items-center justify-center border border-[var(--color-border)] mb-2">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink-dark)]">{item.title}</h3>
                <p className="text-[var(--color-muted-dark)] text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
            </div>

            {canScrollPainRight && (
              <button 
                onClick={scrollPainRight}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[var(--color-ink-dark)] hover:bg-[var(--color-surface)] hover:scale-110 transition-all border border-[var(--color-border)] opacity-0 group-hover/pain:opacity-100"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          <FadeIn delay={1.1} className="mt-12 md:mt-20 text-center text-[var(--color-ink)] max-w-3xl mx-auto px-4">
            <h4 className="font-serif text-xl sm:text-2xl font-bold italic text-[var(--color-ink-dark)]">Đó không phải là BẠN. Đó là VÔ THỨC đang lập trình bạn.</h4>
          </FadeIn>
        </div>
      </section>



      {/* SECTION 4: THỬ THÁCH 99 NGÀY */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink-dark)] mb-4 leading-tight">
                99 Ngày "Đại Phẫu Tâm Hồn"
              </h2>
              <p className="text-lg sm:text-xl text-[var(--color-muted-dark)] max-w-2xl mx-auto">
                Mỗi tối 30 phút. Không lý thuyết. Chỉ <strong>Thực Hành</strong>.
              </p>
            </div>
          </FadeIn>

          {/* Templates */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-16">
            {/* Tờ 1 Details */}
            <FadeIn delay={0.1}>
              <details className="group bg-[var(--color-ink-dark)] border text-white border-[var(--color-ink)] rounded-[1.5rem] sm:rounded-md shadow-sm relative overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="p-4 sm:p-6 md:p-8 cursor-pointer list-none flex justify-between items-center bg-[var(--color-ink-dark)] hover:bg-white/5 transition-colors relative z-20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm sm:rounded-md bg-white/10 flex items-center justify-center text-xl sm:text-2xl shadow-inner border border-white/5 shrink-0">🌑</div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-1">TỜ 1: BÓC TÁCH VÙNG TỐI</h3>
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/50 mt-1">Viết cho Vô Thức</p>
                    </div>
                  </div>
                  <span className="transition duration-700 ease-in-out group-open:-rotate-180 text-white/50 shrink-0 ml-2 sm:ml-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                
                <div className="relative z-10 px-6 pb-8 md:px-8 border-t border-white/10 bg-[var(--color-ink-dark)] animate-in slide-in-from-top-2 fade-in duration-700 ease-in-out pt-8">
                  <div className="bg-red-950/30 text-red-100 p-5 rounded-md mb-8 border border-red-900/50 flex gap-4 items-start">
                    <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-500" />
                    <div>
                      <h4 className="font-bold mb-1 uppercase tracking-wider text-xs text-red-400">Nguyên tắc thép</h4>
                      <p className="text-sm opacity-90 leading-relaxed">Tàn nhẫn với chính mình. Cấm tuyệt đối chữ "Nhưng" (VD: Tôi sai NHƯNG tại nó...). Phải viết đến khi lồng ngực thấy nghẹn, mặt thấy nóng rát vì nhục nhã với cái "Ngu" của mình.</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-white/20">
                      <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-md bg-[var(--color-ink-dark)] border-2 border-white/20 flex items-center justify-center"><Eye className="w-2.5 h-2.5 text-white/50" /></div>
                      <h4 className="font-bold text-lg mb-2">1. Điểm Xúc Chạm <span className="text-base font-normal text-white/50">(Sự việc &amp; Cảm xúc)</span></h4>
                      <ul className="text-sm text-white/70 space-y-2">
                        <li><strong className="text-white">Sự việc:</strong> Viết 1-2 câu khách quan như camera ghi lại. (Ai nói gì, làm gì?)</li>
                        <li><strong className="text-white">Cảm xúc:</strong> Chân thực nhất. Máu dồn lên não? Khó chịu? Ghen tức? Cay cú? Đang chạm vào Cấp độ bệnh tâm nào?</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-white/20">
                      <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-md bg-[var(--color-ink-dark)] border-2 border-white/20 flex items-center justify-center"><Flame className="w-2.5 h-2.5 text-red-500" /></div>
                      <h4 className="font-bold text-lg mb-2">2. Vô Thức Hành Động <span className="text-base font-normal text-white/50">(Bản ngã lộng hành)</span></h4>
                      <ul className="text-sm text-white/70 space-y-2">
                        <li><strong className="text-white">Suy nghĩ (Cái Ngu bên trong):</strong> Mình đang bị rơi vào căn phòng nào của Vùng Hủy Diệt? Là Tưởng Thức (ngụy biện, đóng vai nạn nhân, tự ái)? Là Tà Thức (muốn chửi mắng, dìm hàng)?</li>
                        <li><strong className="text-white">Hành vi (Cái Ác bên ngoài):</strong> Mình đã làm gì? (Trừng mắt, quát tháo, chiến tranh lạnh, hay làm việc hời hợt, lướt điện thoại trốn việc?)</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-transparent">
                      <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-md bg-[var(--color-ink-dark)] border-2 border-white/20 flex items-center justify-center"><ShieldAlert className="w-2.5 h-2.5 text-orange-500" /></div>
                      <h4 className="font-bold text-lg mb-2">3. Hậu Quả <span className="text-base font-normal text-white/50">(Đo lường sự tàn phá)</span></h4>
                      <ul className="text-sm text-white/70 space-y-2">
                        <li><strong className="text-white">Bên ngoài:</strong> Mối quan hệ sứt mẻ thế nào? Không khí ngột ngạt ra sao?</li>
                        <li><strong className="text-white">Bên trong:</strong> Cột năng lượng sống của mình bị tắc nghẽn, rò rỉ thế nào? Mình mất bao nhiêu POWER (nội lực)?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </FadeIn>

            {/* Tờ 2 Details */}
            <FadeIn delay={0.2}>
              <details className="group bg-white text-[var(--color-ink-dark)] border border-[var(--color-border)] rounded-[1.5rem] sm:rounded-md shadow-xl relative overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--color-accent)]/5 to-transparent pointer-events-none" />
                <summary className="p-4 sm:p-6 md:p-8 cursor-pointer list-none flex justify-between items-center hover:bg-[var(--color-surface)]/50 transition-colors relative z-20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm sm:rounded-md bg-white flex items-center justify-center text-xl sm:text-2xl shadow-sm border border-[var(--color-border)] shrink-0">🌕</div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-ink-dark)] line-clamp-1">TỜ 2: KIẾN TẠO VÙNG SÁNG</h3>
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-muted-dark)] mt-1">Viết cho Tâm Thức</p>
                    </div>
                  </div>
                  <span className="transition duration-700 ease-in-out group-open:-rotate-180 text-[var(--color-muted)] shrink-0 ml-2 sm:ml-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                
                <div className="relative z-10 px-6 pb-8 md:px-8 border-t border-[var(--color-border)] animate-in slide-in-from-top-2 fade-in duration-700 ease-in-out pt-8">
                  <div className="bg-[var(--color-surface)] text-[var(--color-ink-dark)] p-5 rounded-md mb-8 border border-[var(--color-border)] flex gap-4 items-start">
                    <Sparkles className="w-6 h-6 shrink-0 mt-0.5 text-[var(--color-gold)]" />
                    <div>
                      <h4 className="font-bold mb-1 uppercase tracking-wider text-xs text-[var(--color-gold)]">Nguyên tắc thép</h4>
                      <p className="text-sm leading-relaxed">Không hô khẩu hiệu sáo rỗng. Phải dùng Tuệ Năng và các Bộ Pháp (SSS) để vẽ ra kịch bản hành xử chi tiết, thấu tình đạt lý, 100% nằm trong quyền kiểm soát của mình.</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-[var(--color-border)]">
                      <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-md bg-[var(--color-paper)] border-2 border-[var(--color-border)] flex items-center justify-center"><Target className="w-2.5 h-2.5 text-[var(--color-muted)]" /></div>
                      <h4 className="font-bold text-lg mb-2">1. Xác Lập Vị Trí Sự Thật <span className="text-base font-normal text-[var(--color-muted)]">(Tư Duy Gốc)</span></h4>
                      <ul className="text-sm text-[var(--color-muted-dark)] space-y-2">
                        <li><strong className="text-[var(--color-ink)]">Bản chất vấn đề:</strong> Gạt bỏ cảm xúc, sự thật ở đây là gì? (Ví dụ: Sự gắt gỏng của vợ xuất phát từ sự quá tải; lời chê của sếp là để việc tốt hơn).</li>
                        <li><strong className="text-[var(--color-ink)]">Trách nhiệm:</strong> Lỗi của mình ở đâu trong chuỗi này? Mình cần "Tu" cái gì ở đây?</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-[var(--color-border)]">
                      <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-md bg-[var(--color-paper)] border-2 border-[var(--color-border)] flex items-center justify-center"><Compass className="w-2.5 h-2.5 text-blue-500" /></div>
                      <h4 className="font-bold text-lg mb-2">2. Kịch Bản Hành Xử <span className="text-base font-normal text-[var(--color-muted)]">(Khiêu Vũ Cùng Tuệ Năng)</span></h4>
                      <ul className="text-sm text-[var(--color-muted-dark)] space-y-2">
                        <li><strong className="text-[var(--color-ink)]">Bước 1 (Cắt cơn):</strong> Dùng Bộ Định để đứng sừng sững, chặn đứng phản xạ. Dùng Bộ Tan để làm tan chảy tự ái.</li>
                        <li><strong className="text-[var(--color-ink)]">Bước 2 (Thấu hiểu):</strong> Dùng Bộ Dò để nhìn xuyên qua lớp vỏ tức giận, thấy được nỗi đau/sự kẹt của họ.</li>
                        <li><strong className="text-[var(--color-ink)]">Bước 3 (Chuyển hóa):</strong> Dùng Bộ Cảm để tỏa ra năng lượng ấm áp, từ bi. Dùng lời nói mở Cửa Sinh, hóa giải mâu thuẫn.</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-transparent">
                      <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-md bg-[var(--color-paper)] border-2 border-[var(--color-border)] flex items-center justify-center"><Sprout className="w-2.5 h-2.5 text-green-500" /></div>
                      <h4 className="font-bold text-lg mb-2">3. Bài Học &amp; Độ Ngọt <span className="text-base font-normal text-[var(--color-muted)]">(Hạt Giống Trí Tuệ)</span></h4>
                      <ul className="text-sm text-[var(--color-muted-dark)] space-y-2">
                        <li><strong className="text-[var(--color-ink)]">Cạm nhận:</strong> Cột năng lượng sống được tái tạo, tĩnh tại, thăng hoa ra sao?</li>
                        <li><strong className="text-[var(--color-ink)]">Bài học (Hạt):</strong> Đúc kết 1 câu ngắn gọn khắc cốt ghi tâm để ngày mai làm vốn liếng.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </FadeIn>

            {/* Ví dụ áp dụng Details */}
            <FadeIn delay={0.3}>
              <details className="group bg-white rounded-[1.5rem] sm:rounded-md border border-[var(--color-border)] shadow-sm relative overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="p-4 sm:p-6 md:p-8 cursor-pointer list-none flex justify-between items-center bg-[var(--color-paper)] hover:bg-[var(--color-surface)] transition-colors relative z-20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm sm:rounded-md bg-white flex items-center justify-center text-xl sm:text-2xl shadow-sm border border-[var(--color-border)] shrink-0">💡</div>
                    <div>
                      <h3 className="font-serif text-base sm:text-xl md:text-2xl font-bold text-[var(--color-ink-dark)] line-clamp-1">VÍ DỤ ÁP DỤNG THỰC TẾ</h3>
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-muted-dark)] mt-1">Cảnh mẫu cơ bản</p>
                    </div>
                  </div>
                  <span className="transition duration-700 ease-in-out group-open:-rotate-180 text-[var(--color-muted)] shrink-0 ml-2 sm:ml-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                
                <div className="relative z-10 animate-in slide-in-from-top-2 fade-in duration-700 ease-in-out">
                  <div className="bg-white px-6 py-4 md:px-8 border-y border-[var(--color-border)] text-sm text-[var(--color-ink-dark)]">
                    <strong className="text-[var(--color-gold)] mr-2">Tình huống:</strong> Đi làm về mệt, thấy con bày bừa đồ chơi, vợ thì nhăn nhó bảo "Anh dẹp phụ em đi".
                  </div>
                  
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)] bg-[var(--color-ink-dark)] text-white">
                    <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
                      <h4 className="font-bold mb-6 text-white flex items-center gap-2">
                        <span className="text-2xl drop-shadow-sm">🌑</span> TỜ 1: Bóc Tách Vùng Tối
                      </h4>
                      <div className="space-y-6 text-sm text-white/70">
                        <div>
                          <strong className="block text-white mb-1">Điểm xúc chạm:</strong>
                          <p>Mệt mỏi. Cảm thấy bị sai khiến, bị coi thường. Cơn giận (Bệnh tâm cấp 2) bốc lên.</p>
                        </div>
                        <div>
                          <strong className="block text-white mb-1">Vô thức hành động:</strong>
                          <ul className="list-disc pl-4 space-y-2">
                            <li><strong>Suy nghĩ:</strong> Rơi thẳng vào Tưởng thức (đóng vai nạn nhân): "Mình đi kiếm tiền mệt mỏi cả ngày, về nhà không được nghỉ còn bị hành. Cô ta không biết xót chồng".</li>
                            <li><strong>Hành vi:</strong> Tôi đá văng món đồ chơi, gắt lên: "Cả cái nhà này có chút việc không ai làm được, chờ tôi về dọn à!" rồi chui tọt vào phòng đóng sầm cửa.</li>
                          </ul>
                        </div>
                        <div>
                          <strong className="block text-white mb-1">Hậu quả:</strong>
                          <p>Con khóc, vợ uất ức im lặng. Bữa cơm tối thành địa ngục. Bên trong tôi cột năng lượng sống đứt gãy, tôi tự thấy mình hèn hạ vì trút giận lên vợ con. Tôi mất sạch tư cách người trụ cột.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 bg-white text-[var(--color-ink-dark)]">
                      <h4 className="font-bold mb-6 text-[var(--color-ink-dark)] flex items-center gap-2">
                        <span className="text-2xl drop-shadow-sm">🌕</span> TỜ 2: Kiến Tạo Vùng Sáng
                      </h4>
                      <div className="space-y-6 text-sm text-[var(--color-muted-dark)]">
                        <div>
                          <strong className="block text-[var(--color-ink)] mb-1">Sự thật (Tư duy gốc):</strong>
                          <p>Vợ cũng đi làm và kiệt sức như mình. Lời nhờ vả của cô ấy là sự mưu cầu được san sẻ, không phải sự tấn công. Đồ chơi bừa bãi là đặc quyền của trẻ con. Tôi gắt gỏng vì thiếu năng lực quản trị cảm xúc.</p>
                        </div>
                        <div>
                          <strong className="block text-[var(--color-ink)] mb-1">Kịch bản hành xử:</strong>
                          <ul className="list-disc pl-4 space-y-2">
                            <li>Ngay lúc đó, tôi dùng <strong>Bộ Định</strong> để ngậm miệng lại. Dùng <strong>Bộ Tan</strong> để hóa giải cơn giận ngay lập tức.</li>
                            <li>Tôi dùng <strong>Bộ Dò</strong> nhìn vào sự mệt mỏi trên mặt vợ, dùng <strong>Bộ Cảm</strong> khởi lên sự thương xót. Tôi hạ cái tôi xuống.</li>
                            <li>Tôi xắn tay áo lên cùng con cất đồ chơi, biến nó thành trò chơi nhỏ. Bước vào bếp ôm vai vợ: "Em mệt rồi, ra nghỉ đi, anh dọn một loáng là xong".</li>
                          </ul>
                        </div>
                        <div>
                          <strong className="block text-[var(--color-ink)] mb-1">Bài học &amp; Độ ngọt:</strong>
                          <p>Cột năng lượng sống của tôi bừng sáng, ấm áp. Tôi bảo vệ được gia đạo.</p>
                          <div className="mt-4 bg-[var(--color-gold)]/10 text-[var(--color-ink-dark)] px-4 py-3 rounded-sm border border-[var(--color-gold)]/20 shadow-sm leading-relaxed">
                            <strong className="text-[var(--color-gold)]">Hạt đúc kết:</strong> Nhà không phải là nơi để tranh đúng sai, nhà là Đạo tràng để thực hành sự Bao dung.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-[var(--color-ink-dark)] text-white p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-md text-center shadow-lg relative overflow-hidden border border-[var(--color-ink)] mt-10">
              <div className="absolute top-0 right-0 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent pointer-events-none rounded-md blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-gold)] mb-4 sm:mb-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] animate-pulse" />
                <h3 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Sự kỳ diệu của 99 ngày</h3>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  Khi bạn lặp đi lặp lại format này, não bộ của bạn sẽ tự động tạo ra một <strong className="text-white font-medium border-b border-[var(--color-gold)]/50 pb-0.5">"độ trễ" ngay tại Điểm xúc chạm</strong> trong đời thực. Bạn sẽ không cần đợi đến tối mới viết Tờ 2, mà <span className="text-[var(--color-gold)] font-medium">Trí Tuệ và Từ Bi sẽ tự động tuôn trào ngay khoảnh khắc đó</span>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ResultsSection />

      {/* CÂU CHUYỆN: DỘI NƯỚC */}
      <WaterFlushStorySection />

      
      
      <FrameworksGroupSection />
<BonusSection />
<MapDirectorySection />
<MantrasSection />

<RegistrationFormSection />

<ReflectionsSection />
      {/* FOOTER */}
      <footer className="py-12 border-t border-[var(--color-border)] bg-[var(--color-ink-dark)] text-center text-white/50">
        <p>© 2024 Sống Sáng Suốt. All rights reserved.</p>
        <p className="mt-4">
          <Link to="/admin" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">
            Trang Quản Trị Hệ Thống (Admin)
          </Link>
        </p>
      </footer>
    </div>
  );
}
