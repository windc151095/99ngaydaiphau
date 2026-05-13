import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, EyeOff } from 'lucide-react';

const data = [
  {
    id: 1,
    title: "1. Theo thói quen",
    definition: "Cỗ máy lập trình sẵn: Hành động lặp đi lặp lại không có sự hiện diện của linh hồn. Đứt gãy hoàn toàn sự \"Chủ thức\".",
    self: "Sáng mở mắt tay tự động vớ điện thoại lướt mạng vô hồn. Tắm, ăn, đi lại như một cái xác không hồn, tâm trí bay lượn ở đâu không biết.",
    family: "Vợ/chồng nói chuyện, miệng theo phản xạ đáp \"Ừ, biết rồi\" nhưng mắt vẫn dán vào màn hình, não không thu nhận một chữ nào.",
    career: "Tới công ty mở máy tính, làm việc rập khuôn như cái máy. Không bao giờ tự hỏi: \"Có cách nào làm việc này nhanh và sắc bén hơn không?\"."
  },
  {
    id: 2,
    title: "2. Thấy nó bình thường",
    definition: "Ngụy biện hợp lý hóa: Rơi vào Tưởng Thức. Dùng cái sai của số đông để biện minh cho mình. Mất đi sự \"Xấu hổ\" của Lương tri.",
    self: "Vượt đèn đỏ, trễ hẹn 15 phút, vứt rác bừa bãi và tự nhủ: \"Ôi dào, ai chẳng thế, có gì mà to tát, bình thường thôi\".",
    family: "Đi nhậu về khuya bỏ mặc con ốm, tự nhủ: \"Đàn ông xây dựng quan hệ thì phải nhậu, vợ càm ràm là do vợ không hiểu chuyện\".",
    career: "Đưa phong bì lót tay, làm ăn chộp giật, bán hàng kém chất lượng và tự bao biện: \"Thương trường là chiến trường, không làm thế cạp đất mà ăn\"."
  },
  {
    id: 3,
    title: "3. Cảm biến tê liệt, vô cảm",
    definition: "Bộ Cảm chết lâm sàng: Cột Năng Lượng Sống bị đóng băng. Mất hoàn toàn lòng trắc ẩn. Không biết đau trước nỗi đau của sinh mệnh khác.",
    self: "Nhìn cơ thể mình béo phì, bệnh tật, nhìn tương lai mình mù mịt nhưng lồng ngực không có một tia rung động nào muốn thay đổi. Cạn kiệt khát vọng.",
    family: "Nhìn vợ/chồng kiệt sức lo toan, nhìn bố mẹ già yếu, tâm không xót xa. Chỉ thấy phiền phức, lạnh lùng quay lưng bước vào phòng ngủ.",
    career: "Thấy đồng nghiệp gặp nạn, công ty đứng trước bờ vực phá sản, lòng dửng dưng lạnh lẽo: \"Việc của sếp, sập thì mình đi xin việc khác, kệ\"."
  },
  {
    id: 4,
    title: "4. Tự thấy mình to, Tôi to, cố chấp",
    definition: "Tà Thức & Tưởng Thức hợp dung: Sợ mất mặt hơn sợ sai. Bảo vệ cái \"Tôi\" rỗng tuếch bằng cách chà đạp chân lý và phản kháng mù quáng.",
    self: "Biết mình sai mười mươi nhưng gân cổ lên cãi. Thà chịu mất tiền, mất cơ hội còn hơn phải cúi đầu nhận mình dốt. Tự ái cao hơn núi.",
    family: "Tranh cãi với bạn đời, dùng lời lẽ cay độc nhất để \"chiến thắng\" cho bằng được, mặc kệ việc biến ngôi nhà thành địa ngục oán thù.",
    career: "Sếp hoặc đối tác chỉ ra lỗ hổng trong công việc, lập tức xù lông: \"Tôi có 10 năm kinh nghiệm, các người biết cái gì mà dạy đời tôi!\"."
  },
  {
    id: 5,
    title: "5. Không thích học hỏi cái gì",
    definition: "Giặc Dốt ngự trị: Đóng sầm \"Cửa Sinh\" của tri thức. Từ chối tiến hóa. Tự nhốt mình vào đáy giếng của sự ấu trĩ.",
    self: "Bỏ tiền mua đồ hiệu, đi nhậu, nhưng tiếc vài trăm ngàn mua cuốn sách. Nghe triết lý sâu sắc thì kêu \"nhức đầu\", chỉ thích xem hài nhảm.",
    family: "Từ chối học cách làm cha mẹ. Ép con cái bằng đòn roi và tư duy cũ kỹ: \"Ngày xưa tao thế vẫn lớn, cần quái gì mấy sách tâm lý vớ vẩn\".",
    career: "Khinh bỉ công nghệ mới, ghét những người có năng lực thật. Tự hào với mớ kinh nghiệm chắp vá lỗi thời, làm việc cậy sức không cậy trí."
  },
  {
    id: 6,
    title: "6. Năng lượng ù ì",
    definition: "Hố đen hút sinh khí: Cột năng lượng sống ở mức Âm. Thân rối loạn, tâm mờ mịt. Thiếu \"Nhiệt năng\" để đốt cháy sức ì.",
    self: "Dự định sáng dậy tập thể dục, nhưng cơ thể nặng như đeo đá 50kg, tặc lưỡi: \"Thôi để mai\". Cả ngày dặt dẹo, ngáp ngắn ngáp dài.",
    family: "Về đến nhà là than vãn: \"Mệt quá, để anh/em yên\". Ném bầu không khí ảm đạm, nặng nề, tụt mood lên toàn bộ các thành viên trong gia đình.",
    career: "Giao việc gì cũng ngâm, \"nước đến chân mới nhảy\". Làm đối phó cho qua chuyện. Trở thành cục nợ, kéo lùi tốc độ của toàn bộ dự án."
  },
  {
    id: 7,
    title: "7. Dạng ba phải, dạng hàng",
    definition: "Kẹt ở Vùng Mong Manh: Không có Trụ Ánh Sáng. Không có Bản Mã Nhân Cách. Sống luồn cúi, hèn nhát, sợ chịu trách nhiệm.",
    self: "Sáng nghe thầy giảng thì hừng hực quyết tâm, chiều bạn rủ đi chơi thì bỏ hết kỷ luật. Gió chiều nào che chiều nấy, sống phụ thuộc ngoại cảnh.",
    family: "Đứng giữa mâu thuẫn gia đình (VD: mẹ chồng nàng dâu), không dám thấu tình đạt lý phân xử, chỉ hùa theo kẻ mạnh để bản thân được yên ổn.",
    career: "Gặp sai trái trong công ty không dám lên tiếng. Sếp nói bậy cũng vỗ tay tung hô. Sẵn sàng bán rẻ nguyên tắc để giữ cái ghế an toàn."
  },
  {
    id: 8,
    title: "8. Nói phét, lưỡi trước não",
    definition: "Bệnh \"Làm Vỏ\" siêu hạng: Đảo lộn quy luật TU - HỌC - LÀM. Ngôn từ không có \"Khí\" và \"Thần\", chỉ là cái vỏ rỗng để lừa mình, lừa người.",
    self: "Trong túi rỗng tuếch nhưng ra đường phông bạt, khoe khoang. Lên mạng viết đạo lý tĩnh tâm, nhưng bên trong thì sân hận, lo âu cồn cào.",
    family: "Thề thốt với vợ/con: \"Từ mai anh sẽ bỏ nhậu, lo làm ăn\", nhưng 3 ngày sau đâu lại vào đấy. Lời hứa danh dự rẻ như bèo.",
    career: "Ký hợp đồng thì chém gió: \"Vài tỷ là chuyện nhỏ, em bao trọn gói\". Đến khi thực thi thì vỡ lở, năng lực bằng không, để lại đống rác cho đối tác dọn."
  },
  {
    id: 9,
    title: "9. Không cần biết ngày mai (cùn, trơ tráo)",
    definition: "Đáy Vực Của Sự Hủy Diệt: Ác quỷ nuốt chửng linh hồn. Mất sạch Lương tri. Phá sản hoàn toàn về nhân cách, khước từ quyền làm Người.",
    self: "Nợ nần, bế tắc, nghiện ngập... thay vì sửa sai thì buông xuôi: \"Đời tôi coi như vứt, kệ mẹ nó, tới đâu thì tới\". Tự sát về mặt tinh thần.",
    family: "Bạo hành, ngoại tình, tàn phá gia đình. Khi bị oán trách thì trừng mắt: \"Tôi khốn nạn thế đấy, giỏi thì ly hôn đi, tôi đách cần ai hết!\".",
    career: "Làm ăn gian lừa bị phát hiện, thay vì khắc phục thì ôm tiền bỏ trốn, hoặc tuyên bố phá sản một cách trơ trẽn, giẫm đạp lên xương máu người khác."
  }
];

export default function UnconsciousLevelsSection() {
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 font-serif px-4">
      <button 
        onClick={() => setIsMainExpanded(!isMainExpanded)}
        className="w-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 bg-white/80 backdrop-blur border-2 border-[#DBCDB3] shadow-sm rounded-md md:rounded-md hover:bg-white transition-all focus:outline-none group gap-4"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#FCFBF8] border border-[#DBCDB3] rounded-md shadow-inner">
            <EyeOff className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-ink-dark)]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-[var(--color-ink-dark)] m-0 leading-tight mt-2 md:mt-2.5">
            9 TẦNG VÔ THỨC
          </h2>
        </div>
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-md bg-[#F6F3E9] border border-[#DBCDB3] flex items-center justify-center shrink-0 transition-transform duration-700 ease-in-out group-hover:shadow-sm mt-2 md:mt-0 ${isMainExpanded ? 'rotate-180 bg-[#FCFBF8]' : ''}`}>
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-ink-dark)]" />
        </div>
      </button>

      <AnimatePresence>
        {isMainExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-6 pt-2">
              {data.map((item, index) => {
                const isExpanded = expandedId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`border transition-all duration-700 ease-in-out rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md ${
                      isExpanded ? 'border-[#988673] bg-[#FFFdf8]' : 'border-[#DBCDB3] bg-[#F6F3E9]'
                    }`}
                  >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left p-4 md:p-6 flex justify-between items-start md:items-center gap-4 focus:outline-none"
              >
                <div className="flex-1">
                  <h3 className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-700 ease-in-out ${
                    isExpanded ? 'text-[#5C4533]' : 'text-[#333]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed italic line-clamp-2 md:line-clamp-none">
                    {item.definition}
                  </p>
                </div>
                <div className={`shrink-0 transition-transform duration-700 ease-in-out mt-2 md:mt-0 ${
                  isExpanded ? 'rotate-180 text-[#8B2C24]' : 'text-[#888]'
                }`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 border-t border-dashed border-[#DBCDB3] grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-0">
                      
                      {/* Self */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#988673] flex items-center gap-2">
                          <span className="w-6 h-[1px] bg-[#988673] inline-block"></span>
                          Bản thân
                        </h4>
                        <p className="text-[13px] xl:text-[14px] bg-white/60 p-4 border border-[#EFECE1] text-[#444] rounded-sm leading-relaxed h-full">
                          {item.self}
                        </p>
                      </div>

                      {/* Family */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#988673] flex items-center gap-2">
                          <span className="w-6 h-[1px] bg-[#988673] inline-block"></span>
                          Gia đình
                        </h4>
                        <p className="text-[13px] xl:text-[14px] bg-white/60 p-4 border border-[#EFECE1] text-[#444] rounded-sm leading-relaxed h-full">
                          {item.family}
                        </p>
                      </div>

                      {/* Career */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#988673] flex items-center gap-2">
                          <span className="w-6 h-[1px] bg-[#988673] inline-block"></span>
                          Sự nghiệp
                        </h4>
                        <p className="text-[13px] xl:text-[14px] bg-white/60 p-4 border border-[#EFECE1] text-[#444] rounded-sm leading-relaxed h-full">
                          {item.career}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
