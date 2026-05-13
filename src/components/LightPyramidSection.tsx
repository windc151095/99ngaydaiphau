import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Skull, Droplet, Sun, ChevronDown } from "lucide-react";

const RoomContent = ({ banChat, hvnT, bieuHien }: any) => (
  <div className="space-y-4">
    <div className="bg-[#EFECE1]/40 p-4 border-l-4 border-current">
      <p className="font-bold text-xs uppercase tracking-widest text-[#8B2C24] mb-1">Bản chất</p>
      <p className="text-[var(--color-ink-dark)] md:text-base text-sm">{banChat}</p>
    </div>
    <div className="bg-[#EFECE1]/40 p-4 border-l-4 border-current">
      <p className="font-bold text-xs uppercase tracking-widest text-[#8B2C24] mb-1">HVNT</p>
      <p className="text-[var(--color-ink-dark)] md:text-base text-sm font-serif italic">"{hvnT}"</p>
    </div>
    <div className="mt-6 border border-[#DBCDB3]/50 p-4 bg-white/50">
      <p className="font-bold text-xs uppercase tracking-widest text-center text-[#8F969E] mb-4 pb-2 border-b border-[#DBCDB3]/50">Biểu hiện trong thực tế</p>
      <ul className="space-y-4">
        {bieuHien.map((item: any, idx: number) => (
          <li key={idx} className="flex flex-col md:flex-row bg-[#FCFBF8] p-3 shadow-sm border border-[#DBCDB3]/30">
            <span className="font-bold text-xs uppercase text-[var(--color-ink-dark)] shrink-0 md:w-32 mb-1 md:mb-0 pt-0.5">{item.title}:</span>
            <span className="text-[var(--color-muted-dark)] text-sm">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const roomData = [
  {
    zone: "VÙNG MONG MANH",
    icon: <Droplet className="w-6 h-6 text-[#1C5C8A]" />,
    desc: "Nơi ngọn gió dễ dập tắt ánh sáng",
    color: "#EFECE1",
    textColor: "#1C5C8A",
    items: [
      {
        id: 5,
        title: "Căn Phòng Ý Thức",
        subtitle: "TẤM KÍNH CƯỜNG LỰC RẤT ĐẸP NHƯNG GIÒN",
        color: "#4B8CDE",
        content: <RoomContent 
          banChat="Mọi thứ đều hoàn hảo cho đến khi có biến cố. Rất hay nói đạo lý nhưng khi đụng chuyện thì dễ gãy."
          hvnT="Tôi biết mà, để tôi làm cho. Sao dạo này mình xui thế nhỉ?"
          bieuHien={[
            { title: "Hành động", text: "Mua khóa học, sách nhưng chỉ lúc đầu hào hứng rồi bỏ dở. Hay nói về dự án lớn nhưng ít khi thực hiện triệt để." }
          ]}
        />
      },
      {
        id: 4,
        title: "Căn Phòng Nhận Thức",
        subtitle: "ĐỘNG LỰC CHẬP CHỜN",
        color: "#1C5C8A",
        content: <RoomContent 
          banChat="Đã biết đúng/sai, có muốn thay đổi nhưng cảm xúc làm chủ, không có định lực."
          hvnT="Em biết em sai rồi, lần sau em không thế nữa / Ngày mai em sẽ làm lại từ đầu. (Nói rất chân thành nhưng không làm được)."
          bieuHien={[
            { title: "HÀNH VI", text: "Mua cả tủ sách phát triển bản thân, nhưng mỗi cuốn chỉ đọc được 10 trang rồi cất xó." },
            { title: "GIA ĐÌNH", text: "Cãi nhau với vợ, thấy khóc thì làm hòa. Nhưng 3 ngày sau đụng chuyện cũ lại gân cổ lên cãi. Vòng lặp: Gây tổn thương -> Xin lỗi." },
            { title: "CÔNG VIỆC", text: "Hứa hẹn deadline rất hùng hồn, nhưng gần đến ngày thì cuống cuồng làm đối phó." }
          ]}
        />
      }
    ]
  },
  {
    zone: "VÙNG HỦY DIỆT",
    icon: <Skull className="w-6 h-6 text-[#959595] opacity-80" />,
    desc: "Nơi giam cầm và bào mòn sinh khí",
    color: "#333333",
    items: [
      {
        id: 3,
        title: "Căn Phòng Vô Thức",
        subtitle: "CỤC THỊT BIẾT ĐI",
        color: "#6A6A6A",
        content: <RoomContent 
          banChat="U mê, trì trệ, vô cảm, sống bằng bản năng sinh tồn (ăn, ngủ, bài tiết)."
          hvnT="Ngôn từ nghèo nàn, tục tĩu. Hay nói: 'Đến đâu hay đến đó', 'Kệ xác nó', 'Không phải việc của tao'."
          bieuHien={[
            { title: "SINH HOẠT", text: "Ngày nghỉ nằm ườn bấm điện thoại 10 tiếng. Phòng ngủ rác vứt bừa bãi, cơ thể bốc mùi lười tắm." },
            { title: "GIA ĐÌNH", text: "Vợ ốm nằm đó, con khóc ngặt nghẽo, người chồng vẫn đeo tai nghe chơi game hò hét." },
            { title: "CÔNG VIỆC", text: "Thấy file dữ liệu bị sai số nghiêm trọng, biết sẽ ảnh hưởng nhưng tặc lưỡi: 'Kệ mẹ, tới giờ tan làm rồi'." }
          ]}
        />
      },
      {
        id: 2,
        title: "Căn Phòng Tưởng Thức",
        subtitle: "BỆNH NHÂN VĨ CUỒNG & NẠN NHÂN VĨ ĐẠI",
        color: "#4A4A4A",
        content: <RoomContent 
          banChat="Rời xa thực tại, sống trong kịch bản tự biên tự diễn, tự ái cao ngút ngàn nhưng năng lực bằng không."
          hvnT="Luôn bắt đầu bằng chữ 'Tôi'... Luôn có chữ 'Tại vì...' (Tại thị trường, tại nhân viên, tại vợ)."
          bieuHien={[
            { title: "THỂ HIỆN", text: "Hội chứng 'Phông bạt': Thu nhập 10 triệu nhưng check-in sang chảnh. Nói chuyện tiền tỷ nhưng ví không có 500k." },
            { title: "GIA ĐÌNH", text: "Hội chứng 'Bà mẹ đau khổ': Nấu bữa cơm nhưng vừa thái rau vừa thở dài... Nếu không khen ngon lập tức khóc lóc." },
            { title: "THẤT BẠI", text: "Đóng cửa phòng, chìm đắm rượu bia hoặc đăng status triết lý ẩn ý trên Facebook. Không bao giờ nhận mình dốt." }
          ]}
        />
      },
      {
        id: 1,
        title: "Căn Phòng Tà Thức",
        subtitle: "ÁC QUỶ ĐỘI LỐT NGƯỜI",
        color: "#111111",
        content: <RoomContent 
          banChat="Sự dối trá, thao túng, mưu mô, trục lợi trên nỗi đau người khác."
          hvnT="Rất hay dùng đạo lý, từ ngữ nhân nghĩa (Anh coi em như người nhà). Lời khen thường đi kèm mục đích mượn tiền. Khách bị chất vấn lập tức đảo ngược (Gaslighting)."
          bieuHien={[
            { title: "TRONG CÔNG VIỆC", text: "Thấy sếp thì cúi rạp, thấy nhân viên quét dọn thì quát tháo hách dịch. Chuyên gia ném đá giấu tay, xúi giục đồng nghiệp cãi nhau." },
            { title: "TRONG TÌNH CẢM", text: "Kiểm soát bạn đời bằng tài chính. Bắt quả tang ngoại tình nhưng lại ngụy biện: 'Tất cả là lỗi của cô!'." },
            { title: "TRONG KINH DOANH", text: "Bán thực phẩm bẩn, tẩm hóa chất nhưng dán nhãn 'Organic'. Lập dự án ảo lừa đảo tiền dưỡng già của người neo đơn." }
          ]}
        />
      }
    ]
  }
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ExpandableRoomCard = ({ id, expandedId, onClick, title, subtitle, color, content }: any) => {
  const isExpanded = expandedId === id;
  return (
    <div className={`w-full transition-all duration-700 ease-in-out ${isExpanded ? 'bg-[#FCFBF8] border border-[#DBCDB3] rounded-sm' : 'bg-[#EFECE1]/50 hover:bg-[#EFECE1]/80 rounded-sm border border-transparent'}`}>
      <button 
        onClick={() => onClick(id)}
        className="w-full p-4 md:p-6 text-left flex justify-between items-center group relative font-serif"
      >
        <div className="flex-1 pr-4 relative z-10">
          <h3 className="text-lg md:text-2xl font-bold font-serif text-[var(--color-ink-dark)] tracking-wide mb-2">{title}</h3>
          <p className="text-xs md:text-sm font-bold text-[var(--color-muted-dark)] uppercase tracking-widest">{subtitle}</p>
        </div>
        <div className="text-[var(--color-muted-dark)] opacity-70 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 md:px-8 md:pb-8 pt-0 font-sans">
              <div className="pt-6 border-t border-dashed border-[#DBCDB3]/50">
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ZoneBlock = ({ zoneData, expandedId, toggleExpand }: any) => (
  <div className="bg-[#FCFBF8] rounded-md p-6 md:p-8 mb-8 relative border border-[#DBCDB3]/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
    <div className="flex items-center mb-8 pb-6 border-b border-[#DBCDB3] border-dashed">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1rem] flex items-center justify-center shrink-0 mr-4 md:mr-6" style={{ backgroundColor: zoneData.color, color: zoneData.textColor || 'white' }}>
        {zoneData.icon}
      </div>
      <div>
        <h3 className="text-xl md:text-3xl font-serif font-bold text-[var(--color-ink-dark)] tracking-widest uppercase mb-1">{zoneData.zone}</h3>
        <p className="text-sm md:text-base font-medium text-[var(--color-muted-dark)]">{zoneData.desc}</p>
      </div>
    </div>
    
    <div className="space-y-4">
      {zoneData.items.map((item: any) => (
        <ExpandableRoomCard 
          key={item.id}
          id={item.id}
          expandedId={expandedId}
          onClick={toggleExpand}
          title={item.title}
          subtitle={item.subtitle}
          color={item.color}
          content={item.content}
        />
      ))}
    </div>
  </div>
);

const LightPyramidVisual = () => (
  <div className="w-full max-w-4xl mx-auto mb-16 flex flex-col items-center">
    <div className="relative w-full">
      <svg className="w-full h-auto" viewBox="0 0 800 850" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .svg-text { font-family: 'Inter', sans-serif; }
            .zone-text { font-family: 'Inter', sans-serif; letter-spacing: 0.1em; opacity: 0.6; }
          `}
        </style>

        {/* TOP PYRAMID */}
        <polygon points="250,80 550,80 520,140 280,140" fill="#F3C332" />
        <polygon points="280,140 520,140 490,200 310,200" fill="#F29E30" />
        <polygon points="310,200 490,200 460,260 340,260" fill="#E77222" />
        <polygon points="340,260 460,260 430,320 370,320" fill="#DB4D32" />
        <polygon points="370,320 430,320 400,380" fill="#8B2C24" />

        {/* Top Numbers */}
        <text x="400" y="116" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" className="svg-text">10</text>
        <text x="400" y="176" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" className="svg-text">9</text>
        <text x="400" y="236" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" className="svg-text">8</text>
        <text x="400" y="296" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" className="svg-text">7</text>
        <text x="400" y="356" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" className="svg-text">6</text>

        {/* Top Left Labels */}
        <text x="140" y="110" textAnchor="end" alignmentBaseline="middle" fill="#B59A6D" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">TỈNH THỨC</text>
        <line x1="155" y1="110" x2="205" y2="110" stroke="#B59A6D" strokeWidth="2" />
        
        <text x="140" y="170" textAnchor="end" alignmentBaseline="middle" fill="#D87815" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">GIÁC NGỘ</text>
        <line x1="155" y1="170" x2="205" y2="170" stroke="#D87815" strokeWidth="2" />
        
        <text x="140" y="230" textAnchor="end" alignmentBaseline="middle" fill="#C95111" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">TÂM THỨC</text>
        <line x1="155" y1="230" x2="205" y2="230" stroke="#C95111" strokeWidth="2" />
        
        <text x="140" y="290" textAnchor="end" alignmentBaseline="middle" fill="#B13626" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">GIAO THỨC</text>
        <line x1="155" y1="290" x2="205" y2="290" stroke="#B13626" strokeWidth="2" />
        
        <text x="140" y="350" textAnchor="end" alignmentBaseline="middle" fill="#A01B1C" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">DUY THỨC</text>
        <line x1="155" y1="350" x2="205" y2="350" stroke="#A01B1C" strokeWidth="2" />

        {/* Right Label - Vùng Ánh Sáng */}
        <g transform="translate(510, 240) rotate(-63.4)">
          <text x="0" y="0" textAnchor="middle" fill="#C29F76" fontSize="26" fontWeight="bold" className="zone-text">VÙNG ÁNH SÁNG</text>
        </g>

        {/* TRANSITION 1 */}
        <circle cx="260" cy="410" r="5" fill="#0A82C5" />
        <circle cx="275" cy="410" r="5" fill="#0A82C5" />
        <circle cx="290" cy="410" r="5" fill="#0A82C5" />
        <circle cx="305" cy="410" r="5" fill="#0A82C5" />
        <circle cx="320" cy="410" r="6" fill="#8B2C24" />
        <text x="335" y="415" fill="#8B2C24" fontSize="13" fontWeight="bold" letterSpacing="1" className="svg-text">CHUYỂN VÙNG TÂM THỨC</text>

        {/* MIDDLE DIAMOND */}
        <polygon points="400,440 470,500 330,500" fill="#0A82C5" />
        <polygon points="330,500 470,500 400,560" fill="#08556C" />

        {/* Middle Numbers */}
        <text x="400" y="482" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" className="svg-text">5</text>
        <text x="400" y="532" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" className="svg-text">4</text>

        {/* Middle Left Labels */}
        <text x="140" y="475" textAnchor="end" alignmentBaseline="middle" fill="#0A82C5" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">Ý THỨC</text>
        <line x1="155" y1="475" x2="205" y2="475" stroke="#0A82C5" strokeWidth="2" />
        
        <text x="140" y="525" textAnchor="end" alignmentBaseline="middle" fill="#08556C" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">NHẬN THỨC</text>
        <line x1="155" y1="525" x2="205" y2="525" stroke="#08556C" strokeWidth="2" />

        {/* Right Label - Vùng Mong Manh */}
        <text x="540" y="505" textAnchor="start" alignmentBaseline="middle" fill="#08556C" fontSize="22" fontWeight="bold" className="zone-text" style={{opacity: 0.8}}>VÙNG MONG MANH</text>

        {/* TRANSITION 2 */}
        <circle cx="270" cy="590" r="5" fill="#C4C6C8" />
        <circle cx="285" cy="590" r="5" fill="#C4C6C8" />
        <circle cx="300" cy="590" r="5" fill="#C4C6C8" />
        <circle cx="315" cy="590" r="5" fill="#C4C6C8" />
        <circle cx="330" cy="590" r="6" fill="#08556C" />
        <text x="345" y="595" fill="#08556C" fontSize="13" fontWeight="bold" letterSpacing="1" className="svg-text">CHUYỂN VÙNG SINH TỬ</text>

        {/* BOTTOM PYRAMID */}
        <polygon points="400,620 450,680 350,680" fill="#C4C6C8" />
        <polygon points="350,680 450,680 500,740 300,740" fill="#80868A" />
        <polygon points="300,740 500,740 550,800 250,800" fill="#2B3847" />

        {/* Bottom Numbers */}
        <text x="400" y="662" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" className="svg-text">3</text>
        <text x="400" y="722" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" className="svg-text">2</text>
        <text x="400" y="782" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" className="svg-text">1</text>

        {/* Bottom Left Labels */}
        <text x="140" y="655" textAnchor="end" alignmentBaseline="middle" fill="#9EA0A2" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">VÔ THỨC</text>
        <line x1="155" y1="655" x2="205" y2="655" stroke="#9EA0A2" strokeWidth="2" />
        
        <text x="140" y="715" textAnchor="end" alignmentBaseline="middle" fill="#6A6E71" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">TƯỞNG THỨC</text>
        <line x1="155" y1="715" x2="205" y2="715" stroke="#6A6E71" strokeWidth="2" />
        
        <text x="140" y="775" textAnchor="end" alignmentBaseline="middle" fill="#1B242E" fontSize="14" fontWeight="bold" letterSpacing="1" className="svg-text">TÀ THỨC</text>
        <line x1="155" y1="775" x2="205" y2="775" stroke="#1B242E" strokeWidth="2" />

        {/* Right Label - Vùng Hủy Diệt */}
        <g transform="translate(510, 680) rotate(50.2)">
          <text x="0" y="0" textAnchor="middle" fill="#9EA0A2" fontSize="26" fontWeight="bold" className="zone-text" style={{opacity: 0.8}}>VÙNG HỦY DIỆT</text>
        </g>
      </svg>
    </div>
  </div>
);

const CoreValuesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const values = [
    "Hiểu rõ tâm thức trong lúc ứng biến cảnh, đang đi vào căn phòng nào.",
    "Biết rõ phần lớn cuộc đời hiện tại, tâm bạn đang ở đâu.",
    "Lái và điều chỉnh hành vi, nhân cách sống kịp thời khi ứng dụng Tháp Ánh Sáng liên tục.",
    "Nắm chặt tay với sống sáng suốt để dịch chuyển tâm thức đi thẳng về Vùng Ánh Sáng.",
    "Cảm nhận rõ 10 căn phòng tâm thức bằng những tập tính cách, thói thường hiện tại.",
    "Là thước đo giá trị nhân cách, trí tuệ và đạo đức hiện tại của bản thân bạn.",
    "Xúc chạm, cầm nắm rõ được cuộc đời của chính bạn.",
    "Vùng Ánh Sáng sẽ dẫn đường để Tâm - Thân - Trí bền vững ở bên bạn.",
    "Nhìn thấy được \"Vùng Mong Manh\" sẽ đưa cuộc đời bạn vào sự không rõ ràng, mông lung.",
    "Kinh hãi \"Vùng Hủy Diệt\", nơi trí tuệ và đạo đức bị tách rời khỏi bạn."
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 bg-white border border-[#DBCDB3] shadow-sm rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 bg-[#FCFBF8] hover:bg-[#F6F3E9] transition-colors"
      >
        <h3 className="font-serif text-base md:text-xl font-bold text-[#8B2C24] uppercase tracking-widest text-left">
          10 GIÁ TRỊ CỐT LÕI CỦA THÁP ÁNH SÁNG
        </h3>
        <ChevronDown className={`w-6 h-6 text-[var(--color-ink-dark)] shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-8 pt-0 md:pt-0">
              <div className="border-t border-[#DBCDB3]/50 mb-6"></div>
              <ul className="space-y-4 font-sans text-sm md:text-base text-[#4A4A4A] list-decimal pl-5 marker:text-[#8B2C24] marker:font-bold">
                {values.map((val, idx) => (
                  <li key={idx} className="pl-2 leading-relaxed">
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LightPyramidContent() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full relative px-4 md:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <CoreValuesAccordion />
        <LightPyramidVisual />
        <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto">
          <div className="relative pb-12 px-2">
            {roomData.map((zoneData, zIndex) => (
              <ZoneBlock 
                key={zIndex}
                zoneData={zoneData}
                expandedId={expandedId}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
