import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Map, Layers, Grid, Compass, Circle, Pyramid, Droplet, ChevronUp, ChevronDown, Zap, BookOpen, TreePine } from "lucide-react";

export default function MapDirectorySection() {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [isLifeExpanded, setIsLifeExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>("thap-anh-sang");

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="py-16 px-4 font-serif bg-[#F6F3E9]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="flex justify-center mb-8">
          <div className="border border-dashed border-[#8B2C24] rounded-lg px-6 py-3 bg-[#FCFBF8]">
            <p className="text-[#8B2C24] italic text-sm md:text-base font-serif">
              👉 Hãy tải App và nhắn trực tiếp cho <span className="underline decoration-wavy decoration-[#8B2C24]">Người hướng dẫn</span> để lấy tài khoản ngay nhé!
            </p>
          </div>
        </div>

        {/* BẢN ĐỒ SECTION */}
        <div className="bg-[#FCFBF8] border border-[#DBCDB3] shadow-sm rounded-sm">
          <button 
            onClick={() => setIsMapExpanded(!isMapExpanded)}
            className="w-full bg-[#EAE5D9] p-4 flex items-center justify-between border-b border-[#DBCDB3] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FCFBF8] border border-[#DBCDB3] flex items-center justify-center rounded-sm shrink-0">
                <Map className="w-6 h-6 text-[#8B2C24]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl md:text-2xl text-[#8B2C24] uppercase tracking-wide">DANH MỤC: BẢN ĐỒ</h3>
                <p className="font-serif italic text-[var(--color-muted-dark)] text-sm md:text-base">Giao diện đầu tiên - 5 chuyên mục lớn</p>
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#FCFBF8] border border-[#DBCDB3] rounded-sm shrink-0">
              {isMapExpanded ? <ChevronUp className="w-5 h-5 text-[#8B2C24]" /> : <ChevronDown className="w-5 h-5 text-[#8B2C24]" />}
            </div>
          </button>

          <AnimatePresence>
            {isMapExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 md:p-6 space-y-4">
                  
                  {/* Item 1 */}
                  <div className={`border ${activeItem === 'thap-anh-sang' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('thap-anh-sang')}
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'thap-anh-sang' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Layers className={`w-5 h-5 shrink-0 ${activeItem === 'thap-anh-sang' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-lg uppercase ${activeItem === 'thap-anh-sang' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>1. THÁP ÁNH SÁNG</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'thap-anh-sang' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'thap-anh-sang' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {activeItem === 'thap-anh-sang' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            
                            {/* Vùng hủy diệt */}
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <h4 className="font-bold text-[#8B2C24] uppercase mb-3">VÙNG HỦY DIỆT:</h4>
                              <ul className="space-y-1 mb-4 italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">
                                <li>1: Tà thức</li>
                                <li>2: Tưởng thức</li>
                                <li>3: Vô thức</li>
                              </ul>
                              <div className="pt-3 border-t border-[#DBCDB3]">
                                <p className="font-bold text-[#555] text-xs md:text-sm uppercase">(RANH GIỚI: CHUYỂN VÙNG SINH TỬ)</p>
                              </div>
                            </div>
                            
                            {/* Vùng mong manh */}
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <h4 className="font-bold text-[#8B2C24] uppercase mb-3">VÙNG MONG MANH:</h4>
                              <ul className="space-y-1 mb-4 italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">
                                <li>4: Nhận thức</li>
                                <li>5: Ý thức</li>
                              </ul>
                              <div className="pt-3 border-t border-[#DBCDB3]">
                                <p className="font-bold text-[#555] text-xs md:text-sm uppercase">(RANH GIỚI: CHUYỂN VÙNG TÂM THỨC)</p>
                              </div>
                            </div>

                            {/* Vùng ánh sáng */}
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <h4 className="font-bold text-[#8B2C24] uppercase mb-3">VÙNG ÁNH SÁNG:</h4>
                              <ul className="space-y-1 italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">
                                <li>6: Duy thức</li>
                                <li>7: Giao thức</li>
                                <li>8: Tâm thức</li>
                                <li>9: Giác ngộ</li>
                                <li>10: Tỉnh thức</li>
                              </ul>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 2 */}
                  <div className={`border ${activeItem === 'thap-gia-tri' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('thap-gia-tri')} 
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'thap-gia-tri' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Grid className={`w-5 h-5 shrink-0 ${activeItem === 'thap-gia-tri' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-lg uppercase ${activeItem === 'thap-gia-tri' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>2. THÁP GIÁ TRỊ SỐNG</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'thap-gia-tri' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'thap-gia-tri' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'thap-gia-tri' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Mô hình tháp đo lường và định hướng các giá trị cốt lõi trong cuộc sống, giúp định hình mục tiêu và sứ mệnh cuộc đời.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 3 */}
                  <div className={`border ${activeItem === 'canh-gioi' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('canh-gioi')} 
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'canh-gioi' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Compass className={`w-5 h-5 shrink-0 ${activeItem === 'canh-gioi' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-lg uppercase ${activeItem === 'canh-gioi' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>3. 9 CẢNH GIỚI CỦA TÂM...</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'canh-gioi' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'canh-gioi' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'canh-gioi' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Bản đồ chi tiết 9 cảnh giới của Thân - Tâm - Trí, đánh giá mức độ tiến hóa và thức tỉnh của linh hồn.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 4 */}
                  <div className={`border ${activeItem === 'vong-tron' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('vong-tron')} 
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'vong-tron' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Circle className={`w-5 h-5 shrink-0 ${activeItem === 'vong-tron' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-lg uppercase ${activeItem === 'vong-tron' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>4. VÒNG TRÒN HẠNH PHÚC</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'vong-tron' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'vong-tron' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'vong-tron' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Sự cân bằng viên mãn giữa các khía cạnh lớn trong đời: Sức khỏe, Sự nghiệp, Mối quan hệ và Tâm linh.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 5 */}
                  <div className={`border ${activeItem === 'thap-tam-thuc' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('thap-tam-thuc')} 
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'thap-tam-thuc' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Pyramid className={`w-5 h-5 shrink-0 ${activeItem === 'thap-tam-thuc' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-lg uppercase ${activeItem === 'thap-tam-thuc' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>5. THÁP TÂM THỨC</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'thap-tam-thuc' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'thap-tam-thuc' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'thap-tam-thuc' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Hệ quy chiếu 9 tầng vô thức, giúp nhận diện và chuyển hóa các điểm mù bám rễ sâu trong tâm hồn.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* NHỰA SỐNG SECTION */}
        <div className="bg-[#FCFBF8] border border-[#DBCDB3] shadow-sm rounded-sm">
          <button 
            onClick={() => setIsLifeExpanded(!isLifeExpanded)}
            className={`w-full bg-[#EAE5D9] p-4 flex items-center justify-between transition-colors ${isLifeExpanded ? 'border-b border-[#DBCDB3]' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FCFBF8] border border-[#DBCDB3] flex items-center justify-center rounded-sm shrink-0">
                <Droplet className="w-6 h-6 text-[#8B2C24]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl md:text-2xl text-[var(--color-ink-dark)] uppercase tracking-wide">DANH MỤC: NHỰA SỐNG</h3>
                <p className="font-serif italic text-[var(--color-muted-dark)] text-sm md:text-base">Thực hành nuôi dưỡng và tăng tốc năng lượng</p>
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#FCFBF8] border border-[#DBCDB3] rounded-sm shrink-0">
              {isLifeExpanded ? <ChevronUp className="w-5 h-5 text-[#8B2C24]" /> : <ChevronDown className="w-5 h-5 text-[#8B2C24]" />}
            </div>
          </button>

          <AnimatePresence>
            {isLifeExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Item 1 */}
                  <div className={`border ${activeItem === 'lien-lac' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('lien-lac')}
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'lien-lac' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Zap className={`w-5 h-5 shrink-0 ${activeItem === 'lien-lac' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-base uppercase ${activeItem === 'lien-lac' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>1. LIÊN LẠC TÂM THỨC</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'lien-lac' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'lien-lac' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'lien-lac' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Nội dung chi tiết đang được cập nhật...</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 2 */}
                  <div className={`border ${activeItem === 'cot-nang-luong' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('cot-nang-luong')}
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'cot-nang-luong' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen className={`w-5 h-5 shrink-0 ${activeItem === 'cot-nang-luong' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-base uppercase ${activeItem === 'cot-nang-luong' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>2. CỘT NĂNG LƯỢNG SỐNG</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'cot-nang-luong' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'cot-nang-luong' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'cot-nang-luong' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Nội dung chi tiết đang được cập nhật...</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 3 */}
                  <div className={`border ${activeItem === 'tu-hoc' ? 'border-[#8B2C24]' : 'border-[#DBCDB3]'} bg-[#FCFBF8] rounded-sm overflow-hidden transition-colors duration-300`}>
                    <button 
                      onClick={() => toggleItem('tu-hoc')}
                      className={`w-full flex items-center justify-between p-3 md:p-4 transition-colors ${activeItem === 'tu-hoc' ? 'bg-[#FCFBF8]' : 'bg-[#FCFBF8]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <TreePine className={`w-5 h-5 shrink-0 ${activeItem === 'tu-hoc' ? 'text-[#8B2C24]' : 'text-[#8B2C24]'}`} />
                        <span className={`font-bold text-left text-sm md:text-base uppercase ${activeItem === 'tu-hoc' ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>3. TU, HỌC, LÀM ĐÚNG</span>
                      </div>
                      <div className="shrink-0 ml-2 flex items-center">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${activeItem === 'tu-hoc' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}`}>
                          {activeItem === 'tu-hoc' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeItem === 'tu-hoc' && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-[#DBCDB3]"
                        >
                          <div className="p-4 md:p-6 space-y-4">
                            <div className="bg-[#F6F3E9] border border-[#DBCDB3] p-4 rounded-sm">
                              <p className="italic text-[var(--color-muted-dark)] font-serif text-sm md:text-base">Nội dung chi tiết đang được cập nhật...</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
