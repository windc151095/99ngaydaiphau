import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, AlertTriangle, Droplet, BookOpen } from 'lucide-react';

type TabId = 'vothuc' | 'mongmanh' | 'tamthuc';

const SCENARIOS = {
  vothuc: {
    title: 'KỊCH BẢN 1: VÙNG VÔ THỨC',
    icon: AlertTriangle,
    color: 'text-[#8B2C24]',
    bg: 'bg-[#8B2C24]/5',
    border: 'border-[#8B2C24]/20',
    activeBorder: 'border-[#8B2C24]',
    dienbien: 'Anh ta giải quyết xong nhu cầu cá nhân. Bước ra bồn rửa tay, vuốt lại keo tóc, soi gương thấy mình diện một bộ vest hàng hiệu rất bảnh bao. Anh ta mở cửa bước ra ngoài, để lại bồn cầu chưa dội nước, bẩn thỉu.\n\nBên trong tâm trí (Vô Minh & Vô Tâm): Một ý nghĩ thoáng qua: "Kệ mẹ nó, không dội thì có đồng bào dội. Ban quản lý thuê lao công để làm gì? Trả tiền dịch vụ rồi cơ mà." Anh ta thản nhiên rời đi, lồng ngực không gợn một chút rung động hay áy náy nào.',
    giaiphau: 'Anh ta đang bị con quỷ Tà Thức (Sự ích kỷ) và Vô Thức (Sự vô cảm) điều khiển. Anh ta chỉ "sạch" cái vỏ bọc bên ngoài (Làm Vỏ), nhưng tâm hồn thì mục ruỗng và bốc mùi hôi thối.\n\nAnh ta nghĩ mình "khôn" vì đỡ mất công, nhưng thực chất đang bôi bẩn chính Cột Năng Lượng Sống của mình.',
    tuonglai: 'Kẻ nô lệ của đám đông: Anh ta chỉ làm việc tốt khi có ánh đèn sân khấu, có người tung hô. Khi không ai nhìn thấy, anh ta sẵn sàng làm bậy (tham ô, lừa gạt, ngoại tình).\n\nSự nghiệp: Có thể kiếm được tiền bằng mánh khóe, nhưng sẽ sụp đổ vì không có Trụ Ánh Sáng (Nhân cách). Các đối tác tinh hoa sẽ dần "ngửi" thấy mùi rỗng tuếch và giả tạo của anh ta rồi xa lánh. Cuối đời rơi vào Cảnh khổ: Sự Cô Đơn và Bị Khinh Bỉ.'
  },
  mongmanh: {
    title: 'KỊCH BẢN 2: VÙNG MONG MANH',
    icon: Droplet,
    color: 'text-amber-600',
    bg: 'bg-amber-600/5',
    border: 'border-amber-600/20',
    activeBorder: 'border-amber-600',
    dienbien: 'Anh ta cũng bước ra ngoài, quên dội nước. Nhưng vừa bước đi được 3 bước, tại Điểm xúc chạm xảy ra. Anh ta khựng lại.\n\nBên trong tâm trí (Ý Thức Gián Đoạn): Anh ta giật mình, mặt đỏ lên vì áy náy. "Chết, mình quên dội. Nhỡ người đi sau bước vào, họ biết mình vừa ra, họ sẽ đánh giá mình là thằng vô văn hóa mất!".\n\nAnh ta vội vàng quay lại, lén lút dội nước rồi đi ra với cảm giác nhẹ nhõm nhưng vẫn còn chút ngượng ngùng.',
    giaiphau: 'Đây là Vùng Mong Manh. "Lương tri" của anh ta đã thức tỉnh (biết xấu hổ), nhưng động cơ để anh ta quay lại sửa sai lại xuất phát từ Tưởng Thức (Sợ bị người khác đánh giá) chứ không phải từ sự tử tế tự thân.\n\nÁnh sáng trong tâm anh ta là ánh sáng chập chờn. Anh ta là người có giáo dục, nhưng Nội Lực (Power) chưa đủ mạnh để biến sự tử tế thành phản xạ tự nhiên.',
    tuonglai: 'Cuộc đời mệt mỏi: Anh ta sẽ sống một cuộc đời "tầm trung", luôn luôn để ý sắc mặt người khác. Anh ta làm người tốt nhưng rất mệt vì phải gồng mình để giữ hình ảnh.\n\nSự nghiệp: Là một nhân viên mẫn cán, một người chồng/vợ tốt, nhưng khó vươn lên tầm vóc Lãnh đạo xuất chúng vì thiếu đi sự Tự Trị tuyệt đối. Nếu không tu luyện để đẩy tâm thức lên Vùng Sáng, anh ta sẽ mãi loanh quanh trong sự dằn vặt và sợ hãi dư luận.'
  },
  tamthuc: {
    title: 'KỊCH BẢN 3: VÙNG TÂM THỨC',
    icon: BookOpen,
    color: 'text-emerald-700',
    bg: 'bg-emerald-700/5',
    border: 'border-emerald-700/20',
    activeBorder: 'border-emerald-700',
    dienbien: 'Anh ta giải quyết xong. Tự động xả nước. Thậm chí, anh ta dùng giấy lau sạch vài giọt nước bắn trên bệ bồn cầu, lau khô mặt bồn rửa tay trước khi rời đi.\n\nBên trong tâm trí (Tâm Thức & Giao Thức): Không có sự tính toán. Không có nỗi sợ. Chỉ có một ý niệm thuần khiết tuôn chảy: "Mình để lại một không gian sạch sẽ, người bước vào sau sẽ cảm thấy dễ chịu và bình an." Anh ta mỉm cười nhẹ nhàng và rời đi, lồng ngực ấm áp.',
    giaiphau: 'Đây là hiện thân của Tự Do và Tự Trị. Anh ta đã thiết lập một Trụ Ánh Sáng bất diệt. Anh ta dùng Bộ Cảm để thấu cảm cho "người đi sau" (người mà anh ta thậm chí không biết mặt).\n\nAnh ta không cần "Tòa án nhà nước" (Camera) hay "Tòa án dư luận" (Người khác nhìn) để làm người tử tế. Anh ta chỉ đối diện với "Tòa án lương tâm". Hành động nhỏ bé đó chính là sự Truyền dẫn ánh sáng, gieo một Vòng Tròn Hạnh Phúc cho thế giới xung quanh.',
    tuonglai: 'Thịnh vượng vĩnh cửu: Người này đã "Tu cho ra Người" một cách triệt để. Từ cái gốc vững chắc đó, họ "Học cho ra Việc" và "Làm cho ra Tiền" vô cùng dễ dàng.\n\nSự nghiệp & Di sản: Họ đi đến đâu, sinh khí và sự trật tự tỏa ra đến đó. Họ thu hút những nguồn lực tinh hoa nhất của vũ trụ. Họ không theo đuổi thành công, thành công tự theo đuổi họ. Họ để lại Di sản không chỉ là tiền bạc, mà là một Nhân Cách Lớn khiến người đời sau kính ngưỡng.'
  }
};

const AccordionItem = ({ title, content, defaultOpen = false }: { title: string, content: string, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-[#DBCDB3]/60 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-6 text-left group"
      >
        <h4 className="font-serif text-lg md:text-xl font-bold text-[#8B2C24] uppercase tracking-wider group-hover:opacity-80 transition-opacity">
          {title}
        </h4>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#8B2C24]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#8B2C24]" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 pt-2 text-[#4A4A4A] font-serif text-base md:text-lg leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WaterFlushStorySection() {
  const [activeTab, setActiveTab] = useState<TabId>('vothuc');
  const [isLessonExpanded, setIsLessonExpanded] = useState(false);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 relative bg-[#FDFBF7] text-[#1A1A1A] border-t border-[#DBCDB3] overflow-hidden">
      {/* Decorative natural texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title & Context */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest leading-tight text-[#1A1A1A] mb-8">
            CÂU CHUYỆN: <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2C24] to-[#B04B43]">DỘI NƯỚC</span>
          </h2>
          
          <div className="bg-white p-8 md:p-12 border border-[#DBCDB3] rounded-sm shadow-sm relative overflow-hidden">
             {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#8B2C24]/20"></div>
            
            <p className="text-sm font-bold text-[#8B2C24] uppercase tracking-[0.2em] mb-4">BỐI CẢNH CÂU CHUYỆN</p>
            <p className="text-lg md:text-xl text-[#666] font-serif italic max-w-2xl mx-auto leading-relaxed mb-6">
              "Khi đi nhà vệ sinh công cộng, nơi không ai giám sát, hành động dội nước hay không dội nước phản ánh chân thực nhất bản chất của một cá nhân."
            </p>
            <p className="text-base md:text-lg font-bold text-[#1A1A1A] uppercase tracking-wider underline underline-offset-8 decoration-[#8B2C24]/30">
              CÙNG MỘT CẢNH 3 CÁCH HÀNH XỬ VÀ 3 CUỘC ĐỜI HOÀN TOÀN KHÁC NHAU.
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {(Object.keys(SCENARIOS) as TabId[]).map((key) => {
            const scenario = SCENARIOS[key];
            const isActive = activeTab === key;
            const Icon = scenario.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex flex-col items-center justify-center p-6 text-center rounded-t-lg sm:rounded-sm border-2 transition-all duration-300 ${isActive ? `bg-white ${scenario.activeBorder} shadow-md sm:translate-y-2 !border-b-white z-10 relative` : `bg-white/50 border-[#DBCDB3] hover:border-[#8B2C24]/50 hover:bg-white`}`}
              >
                <div className={`p-4 rounded-full mb-3 ${isActive ? scenario.bg : 'bg-[#e5e5e5]'}`}>
                  <Icon className={`w-6 h-6 ${isActive ? scenario.color : 'text-[#888]'}`} />
                </div>
                <span className={`font-bold font-sans text-sm uppercase tracking-wider ${isActive ? scenario.color : 'text-[#666]'}`}>
                  {scenario.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content (Accordion wrapper) */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-white border text-left border-t-2 sm:border-t-0 sm:border-x-2 sm:border-b-2 sm:-mt-2 ${SCENARIOS[activeTab].activeBorder} rounded-b-lg sm:rounded-b-sm shadow-lg mb-24 overflow-hidden relative z-0`}
        >
          <div className="flex flex-col p-2 sm:p-4">
            <AccordionItem 
              title="1. DIỄN BIẾN TÂM LÝ & HÀNH ĐỘNG:" 
              content={SCENARIOS[activeTab].dienbien} 
              defaultOpen={true}
            />
            <AccordionItem 
              title="2. GIẢI PHẪU SSS:" 
              content={SCENARIOS[activeTab].giaiphau} 
            />
            <AccordionItem 
              title="3. TƯƠNG LAI DỰ BÁO:" 
              content={SCENARIOS[activeTab].tuonglai} 
            />
          </div>
        </motion.div>

        {/* Lesson Collapse */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#F4EFE6] border border-[#DBCDB3] rounded-sm relative overflow-hidden"
        >
          {/* Subtle noise over lesson */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none" />

          <button 
            onClick={() => setIsLessonExpanded(!isLessonExpanded)}
            className="w-full flex items-center justify-center gap-4 py-8 px-4 group relative z-10"
          >
            <h3 className="font-serif text-2xl md:text-4xl text-[#8B2C24] uppercase tracking-widest font-black flex items-center gap-3">
              BÀI HỌC "GỌT GIŨA" MÌNH
              {isLessonExpanded ? <ChevronUp className="w-6 h-6 transform transition-transform" /> : <ChevronDown className="w-6 h-6 transform transition-transform group-hover:translate-y-1" />}
            </h3>
          </button>
          
          <AnimatePresence>
            {isLessonExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden relative z-10"
              >
                <div className="px-6 md:px-12 pb-12 pt-4">
                  <p className="text-lg md:text-xl font-serif text-[#4A4A4A] leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    Đừng tìm kiếm sự vĩ đại ở những bục diễn giả hay những bản hợp đồng triệu đô. Sự vĩ đại của một con người được quyết định ở những nơi <strong>không ai nhìn thấy</strong>.
                  </p>

                  <div className="bg-[#FDFBF7] border border-[#DBCDB3] p-6 lg:p-8 text-center rounded-sm shadow-sm mb-10">
                    <p className="text-xl md:text-2xl text-[#8B2C24] font-serif italic mb-0">
                      Bóng tối của phòng vệ sinh chính là bài kiểm tra sắc bén nhất cho câu hỏi: BẠN LÀ AI?
                    </p>
                  </div>

                  <ul className="space-y-6 text-[#4A4A4A] font-serif text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                    <li className="flex items-start gap-4">
                      <span className="text-[#8B2C24] mt-1 shrink-0 text-2xl">❖</span>
                      <p>Nếu bạn chỉ làm điều tốt khi có người tung hô, bạn là <strong>Nô lệ của danh vọng</strong>.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#8B2C24] mt-1 shrink-0 text-2xl">❖</span>
                      <p>Nếu bạn làm điều tốt vì sợ bị chửi, bạn là <strong>Nô lệ của nỗi sợ</strong>.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-emerald-700 mt-1 shrink-0 text-2xl">❖</span>
                      <p>Chỉ khi bạn làm điều tốt trong bóng tối tĩnh lặng, vì nó thuận theo Đạo lý làm người và tình yêu thương đồng loại, bạn mới thực sự là <strong>Một Con Người Tự Do</strong>.</p>
                    </li>
                  </ul>

                  <div className="text-center pt-10 border-t border-dashed border-[#DBCDB3] max-w-4xl mx-auto">
                    <p className="text-base md:text-lg font-serif text-[#1A1A1A] uppercase leading-relaxed tracking-wider">
                      NGÀY HÔM NAY, HÃY TỰ SOI MÌNH VÀO "CHIẾC BỒN CẦU" CỦA TÂM THỨC. HÃY DỌN SẠCH NHỮNG TOAN TÍNH, NHỮNG VÔ TÂM, NHỮNG SĨ DIỆN HẢO HUYỀN. HÃY TỰ DỘI ĐI NHỮNG CẶN BÃ CỦA BẢN NGÃ, ĐỂ LINH HỒN BẠN TRỞ NÊN TRONG VẮT, SẴN SÀNG KIẾN TẠO MỘT CUỘC ĐỜI ĐÁNG SỐNG!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
