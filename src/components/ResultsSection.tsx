import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Home, Briefcase, Sun, Wind, Heart, Rocket, Sparkles, UserCheck, Users, Moon } from 'lucide-react';

const RESULTS = [
  {
    id: "result-1",
    title: "TÂM TRÍ BÌNH AN, HẾT SUY NGHĨ NHIỀU",
    description: "Chấm dứt những đêm trằn trọc mất ngủ vì lo âu hay nghĩ ngợi miên man. Không còn những lúc nổi cáu, gắt gỏng vô cớ. Bạn biết cách \"tắt\" những suy nghĩ tiêu cực ngay khi chúng vừa xuất hiện. Gặp chuyện bực mình, thay vì xù lông hay đau khổ, bạn giải quyết nó bằng một thái độ điềm tĩnh và nhẹ nhàng.",
    icon: <Wind className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  },
  {
    id: "result-2",
    title: "GIA ĐÌNH ẤM ÊM, NGƯNG CÃI VÃ",
    description: "Chấm dứt sự oán trách hay những ngày \"chiến tranh lạnh\" mệt mỏi với vợ/chồng. Bạn biết cách kiểm soát lời nói để không làm tổn thương người thân. Con cái bắt đầu chịu lắng nghe và gần gũi thay vì đóng sầm cửa lại. Ngôi nhà thực sự trở thành nơi bão dừng sau cánh cửa, đầy ắp sự thấu hiểu.",
    icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  },
  {
    id: "result-3",
    title: "ĐẦU ÓC SÁNG SUỐT, CÔNG VIỆC HANH THÔNG",
    description: "Không còn cảnh cày cuốc 14 tiếng/ngày mà đầu óc vẫn rối bời, bế tắc. Khi tâm trí được dọn dẹp gọn gàng, bạn nhìn nhận vấn đề và ra quyết định trong công việc cực kỳ sắc bén, chính xác. Làm việc ít mệt mỏi hơn, hiệu quả cao hơn, từ đó dòng tiền và may mắn cũng tự nhiên tìm đến.",
    icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  },
  {
    id: "result-4",
    title: "TÌM LẠI NIỀM VUI SỐNG ĐÍCH THỰC",
    description: "Bạn không còn phải gồng mình gánh vác hay \"diễn\" vỏ bọc hoàn hảo cho người ngoài xem nữa. Mỗi ngày thức dậy đều thấy lòng nhẹ bẫng, yêu đời và trân trọng cuộc sống. Sự vui vẻ, chân thành của bạn sẽ tự động lan tỏa, khiến những người xung quanh ai cũng muốn ở gần.",
    icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  },
  {
    id: "result-5",
    title: "TÌNH YÊU CHÂN THÀNH, KHÔNG DÍNH MẮC",
    description: "Chấm dứt thói quen kiểm soát, ghen tuông mù quáng hay bám víu khiến cả hai ngột ngạt. Bạn biết cách yêu một người mà không đánh mất chính mình. Chữa lành những vết thương từ quá khứ để dũng cảm mở lòng lần nữa. Khi bạn biết trân trọng và yêu thương bản thân, bạn sẽ tự nhiên thu hút được một người bạn đời đồng điệu, chân thành và thấu hiểu.",
    icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  },
  {
    id: "result-6",
    title: "LỌC SẠCH MỐI QUAN HỆ, HÚT QUÝ NHÂN",
    description: "Dám thẳng thắn nói \"Không\" với những mối quan hệ độc hại, lợi dụng mà không nể nang hay sợ mất lòng. Bạn chấm dứt chuỗi ngày phải \"gồng mình\" làm hài lòng tất cả mọi người. Sự đàng hoàng, ngay thẳng của bạn sẽ tự động \"lọc\" đi những kẻ tiêu cực, và hút về những người bạn chất lượng, những quý nhân sẵn sàng nâng đỡ nhau.",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  },
  {
    id: "result-7",
    title: "NGỦ SÂU GIẤC, CƠ THỂ NHẸ BẪNG",
    description: "\"Tâm bệnh sinh Thân bệnh\". Khi bạn trút bỏ được những uất ức và gánh nặng trong đầu, bạn sẽ thấy cơ thể nhẹ nhõm đến bất ngờ. Những cơn đau mỏi vai gáy vô cớ, sự nặng nề lồng ngực tự nhiên giảm hẳn. Bạn vào giấc ngủ dễ dàng, ngủ sâu hơn. Sáng thức dậy thấy người sảng khoái, tràn trề sinh lực thay vì uể oải, rệu rã lết ra khỏi giường.",
    icon: <Moon className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24]" />
  }
];

export default function ResultsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-[var(--color-border)] bg-[#EFECE1] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-md bg-white border border-[#DBCDB3] shadow-sm mb-6 relative">
             <div className="absolute inset-2 border border-dashed border-[#DBCDB3] rounded-md" />
             <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[#8B2C24] relative z-10" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink-dark)] font-bold uppercase tracking-widest leading-tight mb-4">
            KẾT QUẢ SAU 99 NGÀY:<br />
            <span className="text-[#8B2C24] text-2xl sm:text-3xl md:text-4xl mt-2 block">7 SỰ ĐỔI THAY BẠN SẼ TỰ MÌNH CẢM NHẬN ĐƯỢC</span>
          </h2>
        </motion.div>

        {/* Sliding Cards */}
        <div className="flex w-full overflow-x-auto snap-x gap-4 sm:gap-6 pb-12 pt-4 px-4 -mx-4 sm:px-0 sm:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {RESULTS.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center sm:snap-start shrink-0 w-[85vw] sm:w-[28rem] max-w-full flex"
            >
              <div className="bg-[#FCFBF8] border-2 border-[#DBCDB3] rounded-md p-6 sm:p-8 md:p-10 shadow-sm relative w-full h-full flex flex-col hover:border-[#988673] hover:shadow-md transition-all duration-700 ease-in-out group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#EFECE1]/50 rounded-bl-full -z-10 group-hover:bg-[#EFECE1] transition-colors" />
                <div className="mb-6 inline-flex p-4 rounded-md bg-white border border-[#DBCDB3] shadow-sm transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                  {result.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-ink-dark)] uppercase tracking-wide leading-tight mb-4">
                  {result.title}
                </h3>
                <p className="font-serif text-base sm:text-lg text-[var(--color-muted-dark)] leading-relaxed italic flex-grow">
                  {result.description}
                </p>
                <div className="mt-8 flex items-center justify-end">
                  <span className="font-sans font-bold text-4xl text-[#8B2C24] opacity-10 group-hover:opacity-30 transition-opacity">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
