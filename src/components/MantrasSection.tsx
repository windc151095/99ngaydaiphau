import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Users, Briefcase, Quote } from "lucide-react";

const parts = [
  {
    id: "part1",
    title: "PHẦN 1",
    subtitle: "QUẢN TRỊ CHÍNH MÌNH",
    subheading: "(ĐẬP TAN BẢN NGÃ)",
    icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
    items: [
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
    ]
  },
  {
    id: "part2",
    title: "PHẦN 2",
    subtitle: "QUẢN TRỊ GIA ĐÌNH",
    subheading: "(KIẾN TẠO ĐẠO TRÀNG TỔ ẤM)",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    items: [
      "Lấy vợ đại hại ba đời, lấy chồng tồi hỏng một kiếp.",
      "Thắng vợ, thắng chồng trong một cuộc tranh cãi, là thua trắng cả một mái nhà.",
      "Cha mẹ cãi nhau, con cái lãnh sẹo tâm hồn.",
      "Muốn con thành Đại Bàng, cha mẹ không thể mổ thóc như Gà Công Nghiệp.",
      "Tài sản lớn nhất để lại cho con không phải là Sổ đỏ, mà là Nếp nhà.",
      "Nước mắt chảy xuôi, nhưng Đạo hiếu phải chảy ngược.",
      "Người đàn ông bản lĩnh nhất là người biết cúi xuống để vợ con được đứng lên.",
      "Lạt mềm buộc chặt, nước chảy đá mòn.",
      "Đời người như bóng câu qua cửa sổ, cãi nhau hôm nay biết đâu ngày mai không còn cơ hội nhìn mặt.",
      "Tu đâu cho bằng tu nhà, thờ cha kính mẹ mới là chân tu."
    ]
  },
  {
    id: "part3",
    title: "PHẦN 3",
    subtitle: "QUẢN TRỊ SỰ NGHIỆP",
    subheading: "(TU - HỌC - LÀM)",
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
    items: [
      "Tâm chưa tới mà Tiến tới, thì Tiến đó là Tai họa.",
      "Làm việc vì Tiền, Tiền chê; Làm việc vì Giá trị, Tiền đè.",
      "Đi đường tắt trong sự nghiệp là mua vé VIP xuống vực thẳm.",
      "Khách hàng không mua sản phẩm, họ mua Nhân cách của người bán.",
      "Tu cho ra Người, Học cho ra Việc, Làm cho ra Tiền.",
      "Sếp tồi dùng quyền lực để ép, Lãnh đạo giỏi dùng Tuệ năng để thu phục.",
      "Càng sợ thiệt thòi, càng không bao giờ có cơ hội làm việc lớn.",
      "Năng lực thật không sợ thời cuộc, chỉ kẻ \"làm vờ\" mới sợ khủng hoảng.",
      "Đừng cố gắng trở thành một người thành công, hãy nỗ lực trở thành một người có giá trị.",
      "Trên đời này không có việc gì khó, chỉ sợ Tâm không sáng, Trí không thông."
    ]
  }
];

export default function MantrasSection() {
  const [activeTab, setActiveTab] = useState("part2");

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FCFBF8] font-serif border-t border-[#DBCDB3]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-md bg-white border border-[#DBCDB3] shadow-sm mb-6">
            <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#8B2C24]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-[#8B2C24] leading-tight mt-2 mb-4">
            30 CÂU LINH ỨNG "NÉT CĂNG"<br className="hidden md:block"/> GHIM THẲNG VÀO TÂM THỨC
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted-dark)] italic max-w-xl mx-auto">
            Đọc, ngẫm và để những lời này thẩm thấu vào từng tế bào thay đổi cuộc đời bạn.
          </p>
        </div>

        {/* Tabs Desktop & Mobile grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {parts.map((part) => {
            const isActive = activeTab === part.id;
            return (
              <button
                key={part.id}
                onClick={() => setActiveTab(part.id)}
                className={`flex flex-col items-center justify-center p-6 border-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#FCFBF8] border-[#8B2C24] shadow-md scale-105 z-10"
                    : "bg-[#F6F3E9] border-transparent hover:bg-white"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                    isActive ? "bg-[#8B2C24] text-white" : "bg-[#EAE5D9] text-[#555]"
                  }`}
                >
                  {part.icon}
                </div>
                <div className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                  isActive ? "text-[#8B2C24]" : "text-[#555]"
                }`}>
                  {part.title}
                </div>
                <div className={`text-base font-bold uppercase tracking-wide text-center ${
                  isActive ? "text-[#8B2C24]" : "text-[#333]"
                }`}>
                  {part.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-[#FCFBF8] border-2 border-[#DBCDB3] p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#8B2C24]/10"></div>
          
          <AnimatePresence mode="wait">
            {parts.map((part, partIndex) => {
              if (part.id !== activeTab) return null;
              
              return (
                <motion.div
                  key={part.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center"
                >
                  <div className="max-w-3xl w-full">
                    <div className="text-center mb-8 border-b-2 border-dashed border-[#DBCDB3] pb-8">
                       <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#8B2C24] mb-2">
                         {part.title}: {part.subtitle}
                       </h3>
                       <p className="text-[#988673] tracking-widest text-sm md:text-base font-bold uppercase">
                         {part.subheading}
                       </p>
                    </div>

                    <ul className="space-y-6">
                      {part.items.map((item, i) => (
                        <li key={i} className="flex items-start text-base md:text-lg text-[var(--color-ink-dark)] leading-relaxed">
                          <span className="font-bold text-[#8B2C24] w-8 shrink-0 select-none">
                            {partIndex * 10 + i + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
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
