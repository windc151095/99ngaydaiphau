import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function main() {
  try {
    await addDoc(collection(db, 'articles'), {
      title: 'Thực hành tâm thức: Vượt qua ám ảnh sai lầm trong quá khứ',
      content: `**THỰC HÀNH TÂM THỨC CƠ BẢN - CHỦ ĐỀ: ÁM ẢNH CHO VAY TIỀN**
*(Bóc cảnh bài 8 - Tuệ Sáng)*

---

### MÔ TẢ TÌNH HUỐNG: DIỄN BIẾN CẢM XÚC MẤT KIỂM SOÁT

**Sự việc:** Nhớ lại sai lầm trong quá khứ: Đã đặt niềm tin sai chỗ. Đi vay nặng lãi một số tiền lớn để cho A vay mượn xử lý việc, và chờ đợi lại... phải một mình gánh chịu hậu quả và nợ hệ lụy.

**Cảm xúc:** Cứ nghĩ đến là thấy dằn vặt, hối hận, tức giận (cả A và bản thân mình), cảm thấy mình thật ngu ngốc, bất lực và tuyệt vọng!

### VÔ THỨC HÀNH ĐỘNG: TẢ LẠI DIỄN BIẾN TÂM LÝ TỰ PHÁT

**Suy nghĩ:** (Kẹt cứng ở Hương Thức và Vô Thức) - tâm thức liên tục cứ chạy thước phim sai lầm! Tự đay nghiến: *"Tại sao mình ngu đến vậy..."*, *"Họ lừa dối mình"*. Oán trách: *"Tất cả là tại nó! Nó lừa mình"*, niềm tin về nó vỡ vụn.

**Hành động:** Đay nghiến và sống trong quá khứ, không thể tập trung cho hiện tại!
- Mất ăn, mất ngủ... sức khỏe đi xuống, cáu gắt với người xung quanh.
- Mất niềm tin vào con người, trở nên đa nghi, sợ hãi... thu mình chặt, khó đưa ra quyết định mới!

### KẾT QUẢ: TẢ ĐÚNG DIỄN BIẾN HẬU QUẢ

**Thực tế:** Không chỉ mất tiền mà còn đang mất đi nhiều thứ quý giá hơn: thời gian, sức khoẻ, bình an và cơ hội làm lại...

**Nội tâm:** Năng lượng sống bị hao cạn vì sự dằn vặt! Tâm hồn đóng băng, đau đớn, không thể chữa lành và bước tiếp! Mình gia tăng (Nghiệp) -> tạo ra nghiệp khổ đau mỗi ngày.

---

### DÙNG TÂM THỨC: XÁC LẬP LẠI VỊ TRÍ SỰ THẬT

**Gốc:** Quá khứ không thể thay đổi! Không thể viết lại! Sai lầm... đang làm mình (mắc kẹt). Nó là (Bài Học Đắt Giá)!

**Sự thật:** (Nghiệp) phải trả giá. Nó là (Kết quả) của (Nhân) đã gieo! Gieo (Nhân) cả tin, thiếu hiểu biết... gặt (Quả) mất mát! Đó là quy luật.

**Mục đích:** (Buông xả)... Hãy chuyển hoá bài học đó! Biến cục nợ vật chất thành tài sản trí tuệ! Không (phủ nhận) lỗi lầm... tập tha thứ... cho mình... (Chấp nhận)... câu chuyện hoàn toàn để bước tiếp.

### DỰ KIẾN CÁCH HÀNH XỬ: THẲNG THẮN - CHÂN THẬT

**Bước 1: Bỏ tan -> Chấp nhận sự thật**
Dừng việc chống cự lại nỗi đau! Cảm nhận sâu sự mất mát, dằn vặt. (Hối hận tận cùng)... Khóc nếu cần -> xả hết ra! Nói hết ra, viết hết ra!

**Bước 2: Chuyển động trí tuệ -> Kết tinh (Bài học)**
Thực tế lại... viết ra giải pháp... bài học từ sai lầm này...! Đóng gói thành năng lượng cốt lõi của mình!

**Bước 3: Lập vòng tròn tha thứ cho bản thân mình!**
Bắt đầu... tha thứ! Lúc đó đã làm hết sức và đủ trí tuệ của mình! (Học cách tha thứ)... tha thứ cho chính sự ngu ngốc ấy!... Giải thoát cho mình.
-> Kết thúc chuỗi bài học vô giá đó! Cửa trí tuệ sẽ mở.

### PHÁN ĐOÁN KẾT QUẢ: DIỄN BIẾN CẢM XÚC TÍCH CỰC

- Cảm giác dằn vặt, nặng nề tan biến, thay cho sự nhẹ nhàng, bình an.
- Nhìn quá khứ với một tâm thế khác, thay vì sự nuối tiếc, oán hận.
- Lấy lại năng lượng sống và sức sáng tạo tập trung!
- Trở nên khôn ngoan, mạnh mẽ và điềm tĩnh sâu sắc hơn.

### KẾT LUẬN: SỰ SỐNG - ĐỘ NGỌT

**Bài học:** Tha thứ cho mình không phải yếu đuối -> Đó mới là đỉnh cao của trí tuệ.
**Giá trị:** Quá trình (Tái Sinh) mạnh mẽ... tháo bỏ gánh nặng quá khứ, tự do đi trên con đường phía trước với trái tim độ lượng và bình an.`,
      imageUrls: [],
      createdAt: serverTimestamp(),
      authorId: 'admin_tuesang',
      adminToken: '12345',
      isDeleted: false
    });
    console.log('Đăng bài thành công!');
  } catch (error) {
    console.error('Lỗi:', error);
  }
  process.exit(0);
}
main();
