import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, User, Users, Briefcase } from 'lucide-react';

const QUOTES_PART_1 = [
  "Kẻ lừa dối người khác là kẻ ác, nhưng kẻ lừa dối chính mình là kẻ đại ngu.",
  "Rác trong tâm không dọn, xịt nước hoa đắt tiền vẫn bốc mùi.",
  "Tự ái càng cao, tài năng càng thấp.",
  "Thắng vạn quân không bằng thắng chính mình.",
  "Đau khổ không phải là sự trừng phạt, đau khổ là Lò Bát Quái luyện tinh đan.",
  "Nuông chiều bản năng là tự tay ký giấy bán linh hồn cho ác quỷ.",
  "Đi tìm sự công nhận bên ngoài là đi ăn mày tình cảm.",
  "Chưa biết mình \"Ngu\" ở đâu thì vĩnh viễn không thể \"Khôn\" lên được.",
  "Không ai tắm hai lần trên một dòng sông, vạn vật đều Vô Thường.",
  "Tự do đích thực không phải là làm mọi thứ mình muốn, mà là đủ bản lĩnh để không làm những thứ mình không nên làm."
];

const QUOTES_PART_2 = [
  "Lấy vợ dại hại ba đời, lấy chồng tồi hỏng một kiếp.",
  "Thắng vợ, thắng chồng trong một cuộc tranh cãi, là thua trắng cả một mái nhà.",
  "Cha mẹ cãi nhau, con cái lãnh sẹo tâm hồn.",
  "Muốn con thành Đại Bàng, cha mẹ không thể mổ thóc như Gà Công Nghiệp.",
  "Tài sản lớn nhất để lại cho con không phải là Sổ đỏ, mà là Nếp nhà.",
  "Nước mắt chảy xuôi, nhưng Đạo hiếu phải chảy ngược.",
  "Người đàn ông bản lĩnh nhất là người biết cúi xuống để vợ con được đứng lên.",
  "Lạt mềm buộc chặt, nước chảy đá mòn.",
  "Đời người như bóng câu qua cửa sổ, cãi nhau hôm nay biết đâu ngày mai không còn cơ hội nhìn mặt.",
  "Tu đâu cho bằng tu nhà, thờ cha kính mẹ mới là chân tu."
];

const QUOTES_PART_3 = [
  "Tầm chưa tới mà Tiền tới, thì Tiền đó là Tai họa.",
  "Làm việc vì Tiền, Tiền chê; Làm việc vì Giá trị, Tiền đè.",
  "Đi đường tắt trong sự nghiệp là mua vé VIP xuống vực thẳm.",
  "Khách hàng không mua sản phẩm, họ mua Nhân cách của người bán.",
  "Tu cho ra Người, Học cho ra Việc, Làm cho ra Tiền.",
  "Sếp tồi dùng quyền lực để ép, Lãnh đạo giỏi dùng Tuệ năng để thu phục.",
  "Càng sợ thiệt thòi, càng không bao giờ có cơ hội làm việc lớn.",
  "Năng lực thật không sợ thời cuộc, chỉ kẻ \"làm vỏ\" mới sợ khủng hoảng.",
  "Đừng cố gắng trở thành một người thành công, hãy nỗ lực trở thành một người có giá trị.",
  "Trên đời này không có việc gì khó, chỉ sợ Tâm không sáng, Trí không thông."
];

const MANTRA_PARTS = [
  {
    id: "part-1",
    title: "PHẦN 1: QUẢN TRỊ CHÍNH MÌNH",
    subtitle: "(ĐẬP TAN BẢN NGÃ)",
    icon: <User className="w-5 h-5 md:w-6 md:h-6" />,
    quotes: QUOTES_PART_1
  },
  {
    id: "part-2",
    title: "PHẦN 2: QUẢN TRỊ GIA ĐÌNH",
    subtitle: "(KIẾN TẠO ĐẠO TRÀNG TỔ ẤM)",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    quotes: QUOTES_PART_2
  },
  {
    id: "part-3",
    title: "PHẦN 3: QUẢN TRỊ SỰ NGHIỆP",
    subtitle: "(TU - HỌC - LÀM)",
    icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
    quotes: QUOTES_PART_3
  }
];

export default function MantrasSection() {
  const [activeTab, setActiveTab] = useState<string>("part-1");

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-[var(--color-border)] bg-[#F6F3E9]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-30 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-md bg-white border border-[#DBCDB3] shadow-sm mb-6">
            <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#8B2C24] fill-[#8B2C24]/10" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink-dark)] font-bold uppercase tracking-widest leading-tight mb-4">
            30 CÂU LINH ỨNG "NÉT CĂNG"<br />
            <span className="text-[#8B2C24]">GHIM THẲNG VÀO TÂM THỨC</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-muted-dark)] italic font-serif">
            Đọc, ngẫm và để những lời này thẩm thấu vào từng tế bào thay đổi cuộc đời bạn.
          </p>
        </motion.div>

        {/* Tabs Header */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-10 w-full max-w-4xl mx-auto">
          {MANTRA_PARTS.map((part) => {
            const isActive = activeTab === part.id;
            return (
              <button
                key={part.id}
                onClick={() => setActiveTab(part.id)}
                className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-md border-2 transition-all duration-500 ease-in-out focus:outline-none ${isActive ? 'bg-[#FCFBF8] border-[#8B2C24] scale-105 shadow-md z-10 relative' : 'bg-white/60 border-transparent hover:bg-white saturate-50 hover:saturate-100 opacity-70 hover:opacity-100 border-[#DBCDB3]/30'}`}
              >
                <div className={`mb-2 sm:mb-3 transition-colors duration-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-[#8B2C24] text-white shadow-sm' : 'text-gray-400 bg-gray-100'}`}>
                  {React.cloneElement(part.icon as React.ReactElement<any>, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
                </div>
                <h3 className={`font-serif text-[11px] sm:text-sm font-bold text-center tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-[#8B2C24]' : 'text-[var(--color-ink-dark)]'}`}>
                  {part.title.split(': ')[0]}
                  <br className="hidden sm:block" />
                  <span className="sm:hidden">: </span>
                  {part.title.split(': ')[1]}
                </h3>
              </button>
            )
          })}
        </div>

        {/* Tab Content Area */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {MANTRA_PARTS.map((part, partIndex) => {
              if (part.id !== activeTab) return null;
              
              return (
                <motion.div
                  key={part.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col border-2 border-[#DBCDB3] bg-[#FFFdf8] rounded-md overflow-hidden transition-all duration-700 ease-in-out shadow-sm"
                >
                  <div className="w-full flex flex-col items-center justify-center p-6 sm:p-8 text-center border-b border-dashed border-[#DBCDB3] bg-[#FCFBF8]">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight text-[#8B2C24]">
                      {part.title}
                    </h3>
                    <p className="text-sm border-t border-[var(--color-gold)]/30 pt-2 mt-2 font-serif font-bold text-[var(--color-gold)] uppercase tracking-widest">
                      {part.subtitle}
                    </p>
                  </div>

                  <div className="px-6 py-6 sm:px-10 sm:py-8 flex-grow">
                    <ul className="space-y-5">
                      {part.quotes.map((quote, idx) => {
                        const index = partIndex * 10 + idx + 1;
                        return (
                          <li key={idx} className="flex gap-4 group">
                            <span className="font-serif font-bold text-[#8B2C24] opacity-60 text-xl leading-none pt-1 min-w-[28px] text-right group-hover:opacity-100 transition-opacity flex-shrink-0">{index}.</span>
                            <p className="font-serif text-base sm:text-lg text-[var(--color-ink-dark)] leading-relaxed group-hover:text-black transition-colors">{quote}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
