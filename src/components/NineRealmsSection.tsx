import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, CheckCircle, Download } from "lucide-react";
import { toPng } from "html-to-image";

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

const realmsData = [
  { 
    level: 9, 
    tam: { title: "Thức tỉnh", details: ["Luôn luôn \"thức\", biết rõ \"Mình là ai\" trong từng sát-na.", "Đón nhận mọi vinh nhục, sóng gió nhẹ tựa lông hồng.", "Sống trọn vẹn với sự thật tuyệt đối."] }, 
    than: { title: "Giác ngộ", details: ["Thân tướng thanh tịnh, thoát tục.", "Cúi xuống yêu thương nhân loại hết mực.", "Làm việc không biết mệt mỏi vì sứ mệnh lớn lao."] }, 
    tri: { title: "Thông linh", details: ["Kết nối với trí tuệ vũ trụ, linh cảm siêu việt.", "Lời nói tựa mây bay nhưng gỡ được những nút thắt ngàn cân.", "Ánh sáng trí tuệ lan tỏa từ từng tế bào, kiến tạo hệ tư tưởng."] }, 
    color: "border-[#B59A6D] text-[#8C5D14] bg-[#B59A6D]/10" 
  },
  { 
    level: 8, 
    tam: { title: "Thanh thuần", details: ["Tâm an lạc tuyệt đối, đẹp tựa hoa sen.", "Không còn thấy ai là kẻ thù, chỉ thấy người cần được giúp đỡ.", "Hỷ xả, vui với thành công của người khác."] }, 
    than: { title: "Tỏa hào quang", details: ["Nụ cười từ bi, ánh mắt chứa đựng sự độ lượng.", "Trở thành \"bóng cây đại thụ\" cho gia đình/tổ chức nương tựa.", "Không cần làm màu, sự hiện diện đã mang lại bình an."] }, 
    tri: { title: "Thông suốt", details: ["Tầm nhìn xuyên thời gian (nhìn xa 10, 20 năm).", "Thấu hiểu quy luật nhân quả, quy luật tự nhiên.", "Dùng trí tuệ sâu rộng để để lại di sản cho đời sau."] }, 
    color: "border-[#CC5A46] text-[#8A3A2C] bg-[#CC5A46]/10" 
  },
  { 
    level: 7, 
    tam: { title: "Thanh tịnh", details: ["Tâm hoàn toàn sạch rác. Muốn giúp đời, giúp người vô tư.", "Không màng danh lợi ảo, thích lan tỏa giá trị thật.", "Trượng nghĩa, bao dung."] }, 
    than: { title: "Xuất thần", details: ["Đi đứng khoan thai, thần thái đĩnh đạc.", "Khí chất toát ra khiến người khác tự động kính nể, tin tưởng.", "Lời nói có gang có thép, uy lực nhưng ấm áp."] }, 
    tri: { title: "Sắc nét", details: ["Lập luận kín kẽ, logic bén ngót, nhìn thấu chân giả.", "Đưa ra những chiến lược, quyết định mang tính bước ngoặt.", "Lời nói thẳng thắn, xuyên thấu để \"khai sáng\" người đối diện."] }, 
    color: "border-[#C44634] text-[#862D1F] bg-[#C44634]/10" 
  },
  { 
    level: 6, 
    tam: { title: "Thuần khiết", details: ["Tâm nhẹ nhàng, không để bụng chuyện sân si.", "Có lòng tự trọng cao, không luồn cúi.", "Dùng lý lẽ và tình cảm để hóa giải mâu thuẫn."] }, 
    than: { title: "Yêu đời", details: ["Mặt hoa da phấn, nụ cười sảng khoái thường trực.", "Ăn mặc văn minh, sạch sẽ, thơm tho.", "Vừa làm việc vừa nghêu ngao hát, truyền niềm vui cho người khác."] }, 
    tri: { title: "Sáng tỏ", details: ["Tự biết rõ điểm mạnh/yếu của mình để sửa.", "Yêu cái đẹp, thích thiên nhiên, âm nhạc, nghệ thuật.", "Có khả năng \"sao chép\" trí tuệ của người giỏi rất nhanh."] }, 
    color: "border-[#4585B6] text-[#2C597B] bg-[#4585B6]/10" 
  },
  { 
    level: 5, 
    tam: { title: "Sáng rõ", details: ["Tâm ngay thẳng, quang minh chính đại.", "Không giấu giếm, không chơi trò đâm thọc sau lưng.", "Sống minh bạch, sòng phẳng tình/tiền."] }, 
    than: { title: "Linh hoạt", details: ["Nhanh nhẹn, tháo vát, đụng việc là xử lý êm đẹp.", "Không trốn việc, dám nhận phần khó về mình.", "Mang lại sinh khí, năng lượng cho nơi làm việc/về nhà."] }, 
    tri: { title: "Thông minh", details: ["Không hốt hoảng khi có biến. Hiểu nguyên nhân -> Tìm giải pháp.", "Nói ít hiểu nhiều, nói câu nào chắc câu đó.", "Biết trên biết dưới, đối nhân xử thế khéo léo."] }, 
    color: "border-[#3A76A7] text-[#244F71] bg-[#3A76A7]/10" 
  },
  { 
    level: 4, 
    tam: { title: "Sạch dần", details: ["Biết áy náy, xấu hổ khi mình làm sai.", "Sẵn sàng nói lời \"Xin lỗi\" chân thành.", "Bắt đầu có ý thức trách nhiệm với công việc/gia đình."] }, 
    than: { title: "Khỏe mạnh", details: ["Dậy đúng giờ, dọn dẹp nhà cửa gọn gàng.", "Tác phong chăm chỉ, \"Nói đi đôi với làm\".", "Biết tập thể dục, giữ gìn sức khỏe."] }, 
    tri: { title: "Sáng dần lên", details: ["Biết dừng lại đúng lúc khi tranh cãi để không làm tổn thương nhau.", "Bắt đầu tìm đọc sách, nghe Podcast, tìm thấy học hỏi."] }, 
    color: "border-[#326798] text-[#1E4162] bg-[#326798]/10" 
  },
  { 
    level: 3, 
    tam: { title: "Mờ mịt", details: ["Cảm thấy cô đơn, tủi thân, trống rỗng.", "Thích đóng vai nạn nhân (\"Sao đời tôi khổ thế\").", "Sợ hãi, nghi ngờ mọi người xung quanh."] }, 
    than: { title: "Yếu đuối", details: ["Uể oải, hụt hơi, co rúm người lại.", "Thích bám víu, dựa dẫm, bắt người khác phải lo cho mình.", "Có lúc gồng lên khoe mẽ hão huyền để che đậy sự tự ti."] }, 
    tri: { title: "Lập lòe", details: ["Lúc hừng hực quyết tâm, vài giờ sau lại nản chí bỏ cuộc.", "Cả thèm chóng chán.", "Tư duy vụn vặt, so đo tính toán mấy đồng lẻ."] }, 
    color: "border-[#B5B5B5] text-[#5A5A5A] bg-[#B5B5B5]/10" 
  },
  { 
    level: 2, 
    tam: { title: "Rối ren", details: ["Bực dọc, cáu gắt vô cớ, đụng đâu bực đó.", "Thấy mọi thứ như mớ bòng bong không lối thoát.", "Tự ái cực cao, ai đụng vào là xù lông."] }, 
    than: { title: "Ù lì", details: ["Nằm ườn ra, trì hoãn công việc.", "Cơ thể nặng nề, mặt sưng, má xệ, nhăn nhó.", "Mặc kệ đời, lướt MXH vô thức giết thời gian."] }, 
    tri: { title: "Mập mờ", details: ["Bảo thủ, cãi cùn: \"Tôi thích thế đấy thì sao!\".", "Lấy lý do ngụy biện cho cái lười, cái dở của mình.", "Không phân biệt được đúng/sai, thấy ai cũng có lỗi trừ mình."] }, 
    color: "border-[#A5A5A5] text-[#4A4A4A] bg-[#A5A5A5]/10" 
  },
  { 
    level: 1, 
    tam: { title: "Đen tối", details: ["Ghen ăn tức ở khi thấy người khác hơn mình.", "Nuôi hận thù, muốn trả đũa, đạp đổ.", "Lòng tham nổi lên, muốn lợi dụng người khác."] }, 
    than: { title: "Rối loạn", details: ["Mất ngủ, cơ thể bồn chồn, mặt hầm hầm sát khí.", "Hành động mất kiểm soát (đập phá, quát tháo).", "Lối sống bê tha (nhậu nhẹt, nghiện ngập)."] }, 
    tri: { title: "Ngu đần", details: ["Đầu óc tăm tối, chỉ nghĩ ra mưu hèn kế bẩn.", "Nói lời đay nghiến, mạt sát, chửi bới thậm tệ.", "Hành động như ôm bom cảm tử (hại người hại mình)."] }, 
    color: "border-[#959595] text-[#333333] bg-[#959595]/10" 
  },
];

const RealmCell = ({ level, data, color, roundedClass, type, selectedLevel, onSelect, disabled }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isSelected = selectedLevel === level;

  return (
    <div 
      className={`${color} border ${roundedClass} p-3 md:p-4 flex flex-col shadow-sm transition-all group font-serif ${isSelected ? 'ring-2 ring-offset-2 ring-[#8B2C24] bg-white scale-[1.02] z-10 relative' : 'cursor-pointer hover:bg-white'} ${disabled && !isSelected ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <div 
        className={`flex items-center justify-between ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
        onClick={() => !disabled && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className={`w-5 h-5 md:w-6 md:h-6 rounded border flex items-center justify-center text-xs font-bold mr-2 shrink-0 ${isSelected ? 'bg-[#8B2C24] text-white border-[#8B2C24]' : 'border-current opacity-70'}`}>
            {level}
          </div>
          <span className={`font-bold text-sm md:text-lg tracking-wide ${isSelected ? 'text-[#8B2C24]' : ''}`}>{data.title}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {isSelected && <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#8B2C24]" />}
          {!disabled && (
            <div className="opacity-40 group-hover:opacity-100 transition-opacity ml-1">
              {isExpanded ? (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" /></svg>
              ) : (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7 7" /></svg>
              )}
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {(isExpanded || (disabled && isSelected)) && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden relative"
          >
            <div className="w-full h-px bg-current opacity-20 mb-3 block"></div>
            <ul className="text-xs md:text-sm space-y-2 list-none opacity-90 leading-relaxed md:leading-relaxed font-sans mb-4">
              {data.details.map((detail: string, i: number) => (
                <li key={i} className="flex"><span className="mr-2 opacity-50">-</span><span>{detail}</span></li>
              ))}
            </ul>
            {!disabled && (
              <button 
                onClick={(e) => { e.stopPropagation(); onSelect(type, level); setIsExpanded(false); }}
                className={`w-full py-2 px-3 rounded text-sm font-bold transition-colors ${isSelected ? 'bg-[#8B2C24] text-white' : 'bg-[#DBCDB3]/30 text-[var(--color-ink-dark)] hover:bg-[#DBCDB3]/50'}`}
              >
                {isSelected ? 'ĐÃ CHỌN' : 'CHỌN CẢNH GIỚI NÀY'}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileRealmCard = ({ data, expandedId, onToggle, selectedLevels, onSelect, disabled }: any) => {
  const isExpanded = expandedId === data.level;
  
  // Extract classes from data.color string
  const borderClass = data.color.split(' ')[0];
  const textClass = data.color.split(' ')[1];
  const bgClass = data.color.split(' ')[2];

  const renderSelectionButton = (type: string, currentLevel: number) => {
    if (disabled) return null;
    const isSelected = selectedLevels[type] === currentLevel;
    return (
      <button 
        onClick={(e) => { e.stopPropagation(); onSelect(type, currentLevel); }}
        className={`mt-2 w-full py-1.5 px-3 rounded text-xs font-bold transition-colors ${isSelected ? 'bg-[#8B2C24] text-white' : 'bg-[#DBCDB3]/30 text-[var(--color-ink-dark)] hover:bg-[#DBCDB3]/50'}`}
      >
        {isSelected ? 'ĐÃ CHỌN' : 'CHỌN CẢNH GIỚI NÀY'}
      </button>
    );
  };

  const isLevelSelected = selectedLevels.tam === data.level || selectedLevels.than === data.level || selectedLevels.tri === data.level;

  return (
    <div className={`border-2 rounded-sm overflow-hidden shadow-sm bg-white ${borderClass} transition-all duration-700 ease-in-out ${disabled && !isLevelSelected ? 'opacity-50 pointer-events-none' : ''}`}>
      <button 
        onClick={() => !disabled && onToggle(data.level)}
        className={`w-full flex items-center justify-between p-4 ${bgClass} ${disabled ? 'cursor-default' : 'hover:opacity-80'} transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-lg border-2 bg-white ${borderClass} ${textClass}`}>
            {data.level}
          </div>
          <div className={`font-serif font-bold text-lg uppercase tracking-wide ${textClass}`}>
            CẢNH GIỚI {data.level}
          </div>
        </div>
        {!disabled && (
          <div className={`${textClass} transition-transform duration-700 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 space-y-5 font-sans">
              {/* Tâm */}
              {(!disabled || selectedLevels.tam === data.level) && (
                <div className="space-y-2 mb-6">
                  <h4 className={`font-bold uppercase text-xs ${textClass} mb-1 flex items-center gap-2 border-b ${borderClass} pb-1`}>
                    TÂM <span className="font-normal italic lowercase">(cảm xúc & thái độ)</span>
                  </h4>
                  <div className={`font-bold text-base ${textClass}`}>{data.tam.title}</div>
                  <ul className="space-y-1.5 text-sm text-[#4A4A4A] leading-relaxed mb-2">
                    {data.tam.details.map((d: string, i: number) => <li key={i} className="flex items-start"><span className={`mr-2 ${textClass}`}>•</span><span>{d}</span></li>)}
                  </ul>
                  {renderSelectionButton('tam', data.level)}
                </div>
              )}
              
              {/* Thân */}
              {(!disabled || selectedLevels.than === data.level) && (
                <div className="space-y-2 mb-6">
                  <h4 className={`font-bold uppercase text-xs ${textClass} mb-1 flex items-center gap-2 border-b ${borderClass} pb-1`}>
                    THÂN <span className="font-normal italic lowercase">(hành động)</span>
                  </h4>
                  <div className={`font-bold text-base ${textClass}`}>{data.than.title}</div>
                  <ul className="space-y-1.5 text-sm text-[#4A4A4A] leading-relaxed mb-2">
                    {data.than.details.map((d: string, i: number) => <li key={i} className="flex items-start"><span className={`mr-2 ${textClass}`}>•</span><span>{d}</span></li>)}
                  </ul>
                  {renderSelectionButton('than', data.level)}
                </div>
              )}
              
              {/* Trí */}
              {(!disabled || selectedLevels.tri === data.level) && (
                <div className="space-y-2">
                  <h4 className={`font-bold uppercase text-xs ${textClass} mb-1 flex items-center gap-2 border-b ${borderClass} pb-1`}>
                    TRÍ <span className="font-normal italic lowercase">(suy nghĩ & lời nói)</span>
                  </h4>
                  <div className={`font-bold text-base ${textClass}`}>{data.tri.title}</div>
                  <ul className="space-y-1.5 text-sm text-[#4A4A4A] leading-relaxed mb-2">
                    {data.tri.details.map((d: string, i: number) => <li key={i} className="flex items-start"><span className={`mr-2 ${textClass}`}>•</span><span>{d}</span></li>)}
                  </ul>
                  {renderSelectionButton('tri', data.level)}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function NineRealmsContent() {
  const [expandedMobileId, setExpandedMobileId] = useState<number | null>(null);
  
  const [name, setName] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
  });
  const [situation, setSituation] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<{tam: number | null, than: number | null, tri: number | null}>({ tam: null, than: null, tri: null });
  const captureRef = useRef<HTMLDivElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleMobileExpand = (id: number) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  const handleSelect = (type: 'tam' | 'than' | 'tri', level: number) => {
    if (!isSaved) {
      setSelectedLevels(prev => ({ ...prev, [type]: level }));
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert("Vui lòng điền Họ và tên trước khi lưu.");
      return;
    }
    if (!date.trim()) {
      alert("Vui lòng điền Ngày trước khi lưu.");
      return;
    }
    if (!situation.trim()) {
      alert("Vui lòng điền 'Cảnh hôm nay' trước khi lưu.");
      return;
    }
    if (!selectedLevels.tam || !selectedLevels.than || !selectedLevels.tri) {
      alert("Vui lòng chọn đầy đủ cả 3 cảnh giới (Tâm, Thân, Trí).");
      return;
    }
    setIsSaved(true);
  };

  const handleEdit = () => {
    setIsSaved(false);
  };

  const handleScreenshot = async () => {
    if (!captureRef.current) return;
    setIsCapturing(true);
    try {
      const dataUrl = await toPng(captureRef.current, {
        backgroundColor: '#FCFBF8',
        pixelRatio: 2,
        filter: (node) => {
          if (node.tagName) {
            const htmlNode = node as HTMLElement;
            return htmlNode.dataset?.html2canvasIgnore !== 'true';
          }
          return true;
        }
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `CWM-Soi-Tam-${name || 'Ket-qua'}.png`;
      link.click();
    } catch (error) {
      console.error("Screenshot failed:", error);
      alert("Có lỗi xảy ra khi chụp ảnh. Vui lòng thử lại.");
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="relative w-full pt-6 md:pt-10">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <FadeIn>
          {/* Introductory Video */}
          <div className="mb-12 w-full max-w-4xl mx-auto bg-white p-2 md:p-4 rounded-xl border border-[#DBCDB3] shadow-sm">
            <h3 className="font-serif text-lg md:text-xl font-bold text-center text-[#8B2C24] mb-3 md:mb-4 uppercase tracking-wider">
              Video: 9 Cảnh Giới Của Tâm Thân Trí
            </h3>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7is3Vb7ldsU?si=tXf8BqD-h_n3s9Uv" 
                title="9 Cảnh Giới Tâm Thân Trí" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div ref={captureRef} className="bg-[#FCFBF8] p-4 md:p-8 rounded-2xl">
            <div className="mb-10 p-6 md:p-8 bg-white border-2 border-[#DBCDB3] rounded-md shadow-sm max-w-3xl mx-auto" data-html2canvas-ignore="false">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B2C24] mb-6 text-center uppercase tracking-widest">
                Ghi chép soi tâm
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-ink-dark)] font-serif uppercase tracking-wider mb-2">
                      Họ và tên
                    </label>
                    {isSaved ? (
                      <div className="w-full p-3 border-b-2 border-[#DBCDB3] font-bold text-lg text-[#8B2C24] font-serif bg-transparent">
                        {name}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập họ và tên của bạn..."
                        className="w-full p-3 border border-[#DBCDB3] rounded-md focus:border-[#8B2C24] focus:ring-1 focus:ring-[#8B2C24] outline-none transition-colors font-sans bg-transparent"
                      />
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-ink-dark)] font-serif uppercase tracking-wider mb-2">
                      Ngày
                    </label>
                    {isSaved ? (
                      <div className="w-full p-3 border-b-2 border-[#DBCDB3] font-bold text-lg text-[var(--color-ink-dark)] font-sans bg-transparent">
                        {date}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="DD/MM/YYYY"
                        className="w-full p-3 border border-[#DBCDB3] rounded-md focus:border-[#8B2C24] focus:ring-1 focus:ring-[#8B2C24] outline-none transition-colors font-sans bg-transparent"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-ink-dark)] font-serif uppercase tracking-wider mb-2">
                    Cảnh hôm nay mình muốn soi tâm là
                  </label>
                  {isSaved ? (
                    <div className="w-full p-3 rounded-md bg-[#F6F3E9] border border-[#DBCDB3] font-sans text-[var(--color-ink-dark)] mt-2 italic shadow-inner">
                      "{situation}"
                    </div>
                  ) : (
                    <textarea
                      value={situation}
                      onChange={(e) => setSituation(e.target.value)}
                      placeholder="Mô tả ngắn gọn sự kiện, tình huống hôm nay..."
                      rows={2}
                      className="w-full p-3 border border-[#DBCDB3] rounded-md focus:border-[#8B2C24] focus:ring-1 focus:ring-[#8B2C24] outline-none transition-colors font-sans resize-none bg-transparent"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="bg-[#FCFBF8] rounded-md md:rounded-md p-4 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden border border-[#DBCDB3]/50">
              {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-serif text-[var(--color-ink-dark)] tracking-widest mb-2 border-b-2 border-[#DBCDB3] pb-4 inline-block">
                9 CẢNH GIỚI CỦA <span className="font-bold text-[#8B2C24]">TÂM THÂN TRÍ</span>
              </h2>
              <div className="mt-6 md:mt-8 text-center italic font-serif text-[var(--color-muted-dark)] max-w-xl mx-auto">
                <p className="text-base md:text-lg mb-2">Câu hỏi tự soi mình: Hiện tại tâm thân trí bạn đang ở cảnh giới nào?</p>
                {!isSaved && (
                  <>
                    <p className="text-xs md:text-sm hidden md:block">(Bấm vào từng ô để chọn cảnh giới)</p>
                    <p className="text-xs md:text-sm md:hidden">(Bấm vào từng cảnh giới để xem và chọn)</p>
                  </>
                )}
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-3 gap-2 md:gap-4 relative items-start">
              {/* Columns Header */}
              <div className="flex flex-col items-center w-full">
                <div className="w-full h-full bg-[#FCFBF8] border-2 border-[#DBCDB3] border-b-0 rounded-t-sm pb-4 pt-6 px-2 text-center relative border-dashed">
                  <div className="text-[var(--color-ink-dark)] font-serif font-bold text-xl md:text-2xl uppercase tracking-widest">Tâm</div>
                  <div className="text-[var(--color-muted-dark)] font-medium text-xs md:text-sm mt-1 italic font-serif">(Cảm xúc & Thái độ)</div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="w-full h-full bg-[#FCFBF8] border-2 border-[#DBCDB3] border-b-0 rounded-t-sm pb-4 pt-6 px-2 text-center relative border-dashed">
                  <div className="text-[var(--color-ink-dark)] font-serif font-bold text-xl md:text-2xl uppercase tracking-widest">Thân</div>
                  <div className="text-[var(--color-muted-dark)] font-medium text-xs md:text-sm mt-1 italic font-serif">(Hành động)</div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="w-full h-full bg-[#FCFBF8] border-2 border-[#DBCDB3] border-b-0 rounded-t-sm pb-4 pt-6 px-2 text-center relative border-dashed">
                  <div className="text-[var(--color-ink-dark)] font-serif font-bold text-xl md:text-2xl uppercase tracking-widest">Trí</div>
                  <div className="text-[var(--color-muted-dark)] font-medium text-xs md:text-sm mt-1 italic font-serif">(Suy nghĩ & Lời nói)</div>
                </div>
              </div>

              {/* Rows */}
              {realmsData.map((row) => {
                const disableOthers = isSaved;
                const showTam = !disableOthers || selectedLevels.tam === row.level;
                const showThan = !disableOthers || selectedLevels.than === row.level;
                const showTri = !disableOthers || selectedLevels.tri === row.level;
                
                return (
                  <React.Fragment key={row.level}>
                    <div className={`h-full ${!showTam ? 'opacity-30 pointer-events-none' : ''}`}>
                      <RealmCell type="tam" level={row.level} data={row.tam} color={row.color} roundedClass="" selectedLevel={selectedLevels.tam} onSelect={handleSelect} disabled={isSaved} />
                    </div>
                    <div className={`h-full ${!showThan ? 'opacity-30 pointer-events-none' : ''}`}>
                      <RealmCell type="than" level={row.level} data={row.than} color={row.color} roundedClass="" selectedLevel={selectedLevels.than} onSelect={handleSelect} disabled={isSaved} />
                    </div>
                    <div className={`h-full ${!showTri ? 'opacity-30 pointer-events-none' : ''}`}>
                      <RealmCell type="tri" level={row.level} data={row.tri} color={row.color} roundedClass="" selectedLevel={selectedLevels.tri} onSelect={handleSelect} disabled={isSaved} />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile Accordion Layout */}
            <div className="md:hidden flex flex-col gap-3">
              {realmsData.map((row) => {
                const isAnySelectedInRow = selectedLevels.tam === row.level || selectedLevels.than === row.level || selectedLevels.tri === row.level;
                const hideRow = isSaved && !isAnySelectedInRow;
                
                if (hideRow) return null;
                
                return (
                  <MobileRealmCard 
                    key={row.level} 
                    data={row} 
                    expandedId={isSaved ? row.level : expandedMobileId} 
                    onToggle={toggleMobileExpand} 
                    selectedLevels={selectedLevels}
                    onSelect={handleSelect}
                    disabled={isSaved}
                  />
                );
              })}
            </div>

            {/* Action Buttons */}
            <div data-html2canvas-ignore="true" className="mt-8 flex justify-center">
              {!isSaved ? (
                <button
                  onClick={handleSave}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-10 bg-[var(--color-ink-dark)] text-white font-bold rounded-md hover:bg-black transition-colors shadow-sm"
                >
                  <CheckCircle className="w-5 h-5" />
                  LƯU LẠI KẾT QUẢ
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button
                    onClick={handleEdit}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 bg-white border border-[#DBCDB3] text-[var(--color-ink-dark)] font-bold rounded-md hover:bg-[#F6F3E9] transition-colors shadow-sm"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    onClick={handleScreenshot}
                    disabled={isCapturing}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-8 bg-[#8B2C24] text-white font-bold rounded-md hover:bg-[#6E2D2A] transition-colors disabled:opacity-50 shadow-sm"
                  >
                    <Download className="w-5 h-5" />
                    {isCapturing ? 'Đang xử lý...' : 'CHỤP LẠI KẾT QUẢ'}
                  </button>
                </div>
              )}
            </div>
          </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-border)] max-w-4xl mx-auto text-left shadow-lg">
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-ink-dark)] mb-6 text-center font-bold">
              Ý NGHĨA CỦA BẢNG 9 CẢNH GIỚI
            </h3>
            <p className="text-lg md:text-xl text-[var(--color-ink-dark)] mb-4 font-medium text-center">
              Đây là bản đồ để bạn:
            </p>
            <ul className="space-y-4 text-[var(--color-muted-dark)] text-base md:text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#8B2C24] mr-3 font-bold text-xl">•</span>
                <span><strong>Đo lường:</strong> Nhìn vào bảng này, bạn biết ngay Tâm - Thân - Trí của mình đang ở đâu (Ví dụ: Trí đang ở Tầng 2 - Rối ren, nhưng Thân lại ở Tầng 4 - Khỏe mạnh).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B2C24] mr-3 font-bold text-xl">•</span>
                <span><strong>Định hướng:</strong> Biết mình cần phải "nhấc" mình lên tầng nào tiếp theo. Mục tiêu tối thiểu của một kiếp người đáng sống là phải đạt đến Vùng Sống (Tầng 4, 5, 6) và hướng tới Vùng Sáng.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B2C24] mr-3 font-bold text-xl">•</span>
                <span><strong>Soi chiếu:</strong> Khi gặp vấn đề (cãi nhau, mất tiền, thất bại), hãy soi xem mình đang ứng xử bằng cái Tâm/Trí của tầng nào để điều chỉnh ngay lập tức.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
