import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Droplets, BookOpen, AlertTriangle } from 'lucide-react';

const storyData = [
  {
    id: 1,
    title: "KỊCH BẢN 1: VÙNG VÔ THỨC",
    theme: "dark",
    icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: [
      {
        subtitle: "1. Diễn biến tâm lý & Hành động:",
        text: "Anh ta giải quyết xong nhu cầu cá nhân. Bước ra bồn rửa tay, vuốt lại keo tóc, soi gương thấy mình diện một bộ vest hàng hiệu rất bảnh bao. Anh ta mở cửa bước ra ngoài, để lại bồn cầu chưa dội nước, bẩn thỉu.\n\nBên trong tâm trí (Vô Minh & Vô Tâm): Một ý nghĩ thoáng qua: \"Kệ mẹ nó, không dội thì có đồng bào dội. Ban quản lý thuê lao công để làm gì? Trả tiền dịch vụ rồi cơ mà.\" Anh ta thản nhiên rời đi, lồng ngực không gợn một chút rung động hay áy náy nào."
      },
      {
        subtitle: "2. Giải phẫu SSS:",
        text: "Anh ta đang bị con quỷ Tà Thức (Sự ích kỷ) và Vô Thức (Sự vô cảm) điều khiển. Anh ta chỉ \"sạch\" cái vỏ bọc bên ngoài (Làm Vỏ), nhưng tâm hồn thì mục ruỗng và bốc mùi hôi thối.\n\nAnh ta nghĩ mình \"khôn\" vì đỡ mất công, nhưng thực chất đang bôi bẩn chính Cột Năng Lượng Sống của mình."
      },
      {
        subtitle: "3. Tương lai dự báo:",
        text: "Kẻ nô lệ của đám đông: Anh ta chỉ làm việc tốt khi có ánh đèn sân khấu, có người tung hô. Khi không ai nhìn thấy, anh ta sẵn sàng làm bậy (tham ô, lừa gạt, ngoại tình).\n\nSự nghiệp: Có thể kiếm được tiền bằng mánh khóe, nhưng sẽ sụp đổ vì không có Trụ Ánh Sáng (Nhân cách). Các đối tác tinh hoa sẽ dần \"ngửi\" thấy mùi rỗng tuếch và giả tạo của anh ta rồi xa lánh. Cuối đời rơi vào Cảnh khổ: Sự Cô Đơn và Bị Khinh Bỉ."
      }
    ]
  },
  {
    id: 2,
    title: "KỊCH BẢN 2: VÙNG MONG MANH",
    theme: "neutral",
    icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: [
      {
        subtitle: "1. Diễn biến tâm lý & Hành động:",
        text: "Anh ta cũng bước ra ngoài, quên dội nước. Nhưng vừa bước đi được 3 bước, tại Điểm xúc chạm xảy ra. Anh ta khựng lại.\n\nBên trong tâm trí (Ý Thức Gián Đoạn): Anh ta giật mình, mặt đỏ lên vì áy náy. \"Chết, mình quên dội. Nhỡ người đi sau bước vào, họ biết mình vừa ra, họ sẽ đánh giá mình là thằng vô văn hóa mất!\".\n\nAnh ta vội vàng quay lại, lén lút dội nước rồi đi ra với cảm giác nhẹ nhõm nhưng vẫn còn chút ngượng ngùng."
      },
      {
        subtitle: "2. Giải phẫu SSS:",
        text: "Đây là Vùng Mong Manh. \"Lương tri\" của anh ta đã thức tỉnh (biết xấu hổ), nhưng động cơ để anh ta quay lại sửa sai lại xuất phát từ Tưởng Thức (Sợ bị người khác đánh giá) chứ không phải từ sự tử tế tự thân.\n\nÁnh sáng trong tâm anh ta là ánh sáng chập chờn. Anh ta là người có giáo dục, nhưng Nội Lực (Power) chưa đủ mạnh để biến sự tử tế thành phản xạ tự nhiên."
      },
      {
        subtitle: "3. Tương lai dự báo:",
        text: "Cuộc đời mệt mỏi: Anh ta sẽ sống một cuộc đời \"tầm trung\", luôn luôn để ý sắc mặt người khác. Anh ta làm người tốt nhưng rất mệt vì phải gồng mình để giữ hình ảnh.\n\nSự nghiệp: Là một nhân viên mẫn cán, một người chồng/vợ tốt, nhưng khó vươn lên tầm vóc Lãnh đạo xuất chúng vì thiếu đi sự Tự Trị tuyệt đối. Nếu không tu luyện để đẩy tâm thức lên Vùng Sáng, anh ta sẽ mãi loanh quanh trong sự dằn vặt và sợ hãi dư luận."
      }
    ]
  },
  {
    id: 3,
    title: "KỊCH BẢN 3: VÙNG TÂM THỨC",
    theme: "light",
    icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: [
      {
        subtitle: "1. Diễn biến tâm lý & Hành động:",
        text: "Anh ta giải quyết xong. Tự động xả nước. Thậm chí, anh ta dùng giấy lau sạch vài giọt nước bắn trên bệ bồn cầu, lau khô mặt bồn rửa tay trước khi rời đi.\n\nBên trong tâm trí (Tâm Thức & Giao Thức): Không có sự tính toán. Không có nỗi sợ. Chỉ có một ý niệm thuần khiết tuôn chảy: \"Mình để lại một không gian sạch sẽ, người bước vào sau sẽ cảm thấy dễ chịu và bình an.\" Anh ta mỉm cười nhẹ nhàng và rời đi, lồng ngực ấm áp."
      },
      {
        subtitle: "2. Giải phẫu SSS:",
        text: "Đây là hiện thân của Tự Do và Tự Trị. Anh ta đã thiết lập một Trụ Ánh Sáng bất diệt. Anh ta dùng Bộ Cảm để thấu cảm cho \"người đi sau\" (người mà anh ta thậm chí không biết mặt).\n\nAnh ta không cần \"Tòa án nhà nước\" (Camera) hay \"Tòa án dư luận\" (Người khác nhìn) để làm người tử tế. Anh ta chỉ đối diện với \"Tòa án lương tâm\". Hành động nhỏ bé đó chính là sự Truyền dẫn ánh sáng, gieo một Vòng Tròn Hạnh Phúc cho thế giới xung quanh."
      },
      {
        subtitle: "3. Tương lai dự báo:",
        text: "Thịnh vượng vĩnh cửu: Người này đã \"Tu cho ra Người\" một cách triệt để. Từ cái gốc vững chắc đó, họ \"Học cho ra Việc\" và \"Làm cho ra Tiền\" vô cùng dễ dàng.\n\nSự nghiệp & Di sản: Họ đi đến đâu, sinh khí và sự trật tự tỏa ra đến đó. Họ thu hút những nguồn lực tinh hoa nhất của vũ trụ. Họ không theo đuổi thành công, thành công tự theo đuổi họ. Họ để lại Di sản không chỉ là tiền bạc, mà là một Nhân Cách Lớn khiến người đời sau kính ngưỡng."
      }
    ]
  }
];

const getThemeStyles = (theme: string, isExpanded: boolean) => {
  switch (theme) {
    case 'dark':
      return {
        wrapper: `border-[#8B2C24]/30 ${isExpanded ? 'bg-[#FCF5F5]' : 'bg-white'}`,
        header: `hover:bg-[#FCF5F5] text-[#333]`,
        title: `text-[#8B2C24]`,
        icon: `text-[#8B2C24]`,
        content: `bg-[#FCF5F5] text-[#444] border-t border-[#8B2C24]/20`,
        subtitle: `text-[#8B2C24]`,
      };
    case 'neutral':
      return {
        wrapper: `border-[#DBCDB3] ${isExpanded ? 'bg-[#F0EDD8]' : 'bg-white'}`,
        header: `hover:bg-[#F5F2E9] text-[#333]`,
        title: `text-[#333]`,
        icon: `text-[#988673]`,
        content: `bg-[#F6F3E9] text-[#444] border-t border-[#DBCDB3]`,
        subtitle: `text-[#8B2C24]`,
      };
    case 'light':
      return {
        wrapper: `border-[#C2A36B] ${isExpanded ? 'bg-[#FFFAF0]' : 'bg-white'}`,
        header: `hover:bg-[#FCFBF8] text-[#333] ${isExpanded ? 'shadow-inner' : ''}`,
        title: `text-[#8F6A33]`,
        icon: `text-[#B59A6D]`,
        content: `bg-[#FCFBF8] text-[#333] border-t border-[#E8DAB7]`,
        subtitle: `text-[#D87815]`,
      };
    default:
      return {};
  }
};

const formatText = (text: string) => {
  return text.split('\n\n').map((paragraph, idx) => {
    // Bold highlights parsing (basic regex)
    const boldedParagraph = paragraph.split(/\*\*(.*?)\*\*/g).map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
    );

    // Quote highlights
    const quotedParagraph = boldedParagraph.map((part, i) => {
      if (typeof part === 'string') {
         return part.split(/"(.*?)"/g).map((subPart, j) => 
            j % 2 === 1 ? <span key={j} className="text-[#8B2C24] italic">"{subPart}"</span> : subPart
         );
      }
      return part;
    });

    return (
      <p key={idx} className="mb-4 leading-relaxed last:mb-0 font-serif">
        {quotedParagraph}
      </p>
    );
  });
};

const InnerSection = ({ section, themeStyle }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-black/10 rounded-sm overflow-hidden bg-white/50 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-black/5 transition-colors focus:outline-none"
      >
        <h4 className={`font-bold text-sm sm:text-base uppercase tracking-widest ${themeStyle.subtitle}`}>
          {section.subtitle}
        </h4>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-700 ease-in-out ${isOpen ? 'rotate-180' : ''} ${themeStyle.subtitle}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="overflow-hidden"
           >
             <div className="p-4 pt-0 text-sm sm:text-base border-t border-black/5 mx-3 sm:mx-4">
                <div className="pt-3">{formatText(section.text)}</div>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WaterFlushStorySection() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [lessonExpanded, setLessonExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-[var(--color-border)] bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] bg-[#F6F3E9]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-md bg-[#EFECE1] border border-[#DBCDB3] mb-6 shadow-inner">
             <Droplets className="w-8 h-8 sm:w-10 sm:h-10 text-[#8B2C24]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink-dark)] mb-4 font-bold uppercase tracking-wide">
            Câu chuyện: Dội Nước
          </h2>
          <div className="max-w-2xl mx-auto bg-white/60 p-6 sm:p-8 rounded-md border border-[var(--color-border)] shadow-sm backdrop-blur-sm">
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-muted-dark)] font-serif italic mb-4">
              <span className="font-bold text-[var(--color-ink-dark)] not-italic block mb-2 uppercase text-sm tracking-widest text-[#8B2C24]">Bối cảnh câu chuyện</span>
              Khi đi nhà vệ sinh công cộng, nơi không ai giám sát, hành động dội nước hay không dội nước phản ánh chân thực nhất bản chất của một cá nhân.
            </p>
            <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#4A4A4A]">Cùng một cảnh 3 cách hành xử và 3 cuộc đời hoàn toàn khác nhau.</p>
          </div>
        </motion.div>

        {/* Tabs Header */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 w-full max-w-3xl mx-auto">
          {storyData.map((story) => {
            const isActive = activeTab === story.id;
            const themeStyle: any = getThemeStyles(story.theme, isActive);
            
            return (
              <button
                key={story.id}
                onClick={() => setActiveTab(story.id)}
                className={`flex flex-col items-center justify-center p-2 sm:p-6 rounded-md border-2 transition-all duration-700 ease-in-out focus:outline-none ${isActive ? `${themeStyle.wrapper} scale-105 shadow-md z-10` : 'bg-white/60 border-transparent hover:bg-white saturate-50 hover:saturate-100 opacity-70 hover:opacity-100'}`}
              >
                <div className={`mb-2 sm:mb-3 transition-colors duration-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${isActive ? `${themeStyle.icon} bg-white shadow-sm` : 'text-gray-400 bg-gray-100'}`}>
                  {React.cloneElement(story.icon as React.ReactElement<any>, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
                </div>
                <h3 className={`font-serif text-[10px] sm:text-base font-bold text-center tracking-widest uppercase transition-colors duration-500 ${isActive ? themeStyle.title : 'text-gray-500'}`}>
                  {story.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {storyData.map((story) => {
              if (story.id !== activeTab) return null;
              const themeStyle: any = getThemeStyles(story.theme, true);
              
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className={`border-2 rounded-md overflow-hidden shadow-sm ${themeStyle.wrapper}`}
                >
                  <div className={`p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 ${themeStyle.content}`}>
                    {story.content.map((section, idx) => (
                       <InnerSection key={idx} section={section} themeStyle={themeStyle} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* BÀI HỌC CUỐI CÙNG */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="mt-12 sm:mt-16 bg-[#F9F4E7] border-2 border-[#DBCDB3] rounded-md shadow-lg relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#B59A6D]/20 rounded-md blur-3xl" />
           <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8B2C24]/10 rounded-md blur-3xl" />
           
           <div className="relative z-10">
             <button 
               onClick={() => setLessonExpanded(!lessonExpanded)}
               className="w-full text-center p-6 sm:p-8 flex items-center justify-center gap-3 hover:bg-black/5 transition-colors focus:outline-none"
             >
               <h3 className="font-serif text-2xl sm:text-3xl text-[#8B2C24] font-bold uppercase tracking-widest inline-block border-b-2 border-[#DBCDB3] pb-1">
                 Bài Học "Gọt Giũa" Mình
               </h3>
               <ChevronDown className={`w-6 h-6 text-[#8B2C24] transition-transform duration-700 ease-in-out mt-2 ${lessonExpanded ? 'rotate-180' : ''}`} />
             </button>
             
             <AnimatePresence>
               {lessonExpanded && (
                 <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                 >
                   <div className="px-6 sm:px-8 md:px-12 pb-8 md:pb-12 space-y-6 font-serif text-[#444] text-base sm:text-lg leading-relaxed">
                      <p>
                        Đừng tìm kiếm sự vĩ đại ở những bục diễn giả hay những bản hợp đồng triệu đô. Sự vĩ đại của một con người được quyết định ở những nơi <strong className="text-[#333]">không ai nhìn thấy</strong>.
                      </p>
                      <div className="bg-white/60 p-4 sm:p-6 rounded-sm border border-white text-center shadow-inner">
                        <p className="italic font-bold text-[#8B2C24] text-lg">
                          Bóng tối của phòng vệ sinh chính là bài kiểm tra sắc bén nhất cho câu hỏi: BẠN LÀ AI?
                        </p>
                      </div>
                      <ul className="space-y-4 pl-0 list-none mt-4">
                        <li className="flex items-start gap-3">
                          <span className="text-[#8B2C24] mt-1 shrink-0">❖</span>
                          <span>Nếu bạn chỉ làm điều tốt khi có người tung hô, bạn là <strong>Nô lệ của danh vọng</strong>.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#8B2C24] mt-1 shrink-0">❖</span>
                          <span>Nếu bạn làm điều tốt vì sợ bị chửi, bạn là <strong>Nô lệ của nỗi sợ</strong>.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#2B6A31] mt-1 shrink-0">❖</span>
                          <span>Chỉ khi bạn làm điều tốt trong bóng tối tĩnh lặng, vì nó thuận theo Đạo lý làm người và tình yêu thương đồng loại, bạn mới thực sự là <strong className="text-[#2B6A31]">Một Con Người Tự Do</strong>.</span>
                        </li>
                      </ul>
                      <div className="mt-8 pt-6 border-t border-dashed border-[#DBCDB3] text-center">
                        <p className="font-bold text-[#333] uppercase tracking-wide">
                          Ngày hôm nay, hãy tự soi mình vào "chiếc bồn cầu" của tâm thức. Hãy dọn sạch những toan tính, những vô tâm, những sĩ diện hão huyền. Hãy tự dội đi những cặn bã của Bản ngã, để linh hồn bạn trở nên trong vắt, sẵn sàng kiến tạo một cuộc đời đáng sống!
                        </p>
                      </div>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
