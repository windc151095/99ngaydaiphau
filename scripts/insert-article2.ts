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
      content: '**Thực hành tâm thức cơ bản - Chủ đề: Ám ảnh cho vay tiền**\n\nSai lầm trong quá khứ khi tin tưởng sai người, vay mượn số tiền lớn rồi phải một mình gánh chịu hệ lụy đã từng khiến bản thân rơi vào trạng thái dằn vặt, hối hận và đau đớn tột độ. Vô thức cứ lặp lại chuỗi suy nghĩ oán trách: *"Tại sao mình lại cả tin như vậy?"*. Hậu quả là chúng ta không chỉ mất tiền mà còn đánh mất đi sức khoẻ, thời gian, sự bình an trong tâm hồn và mất niềm tin vào những người xung quanh.\n\nNhưng bằng cách thực hành tâm thức, chúng ta học được cách đối diện và chuyển hóa sự thật đó:\n\n1. **Chấp nhận sự thật:** Dừng việc chống cự lại nỗi đau. Cho phép bản thân được hối hận tận cùng, khóc nếu cần để xả nỗi đau ra, đối diện thật thà với chính mình.\n2. **Chuyển hóa bằng trí tuệ:** Nhìn nhận lại bài học từ sự vấp ngã. Phải hiểu được luật nhân quả (do mình cả tin, gieo nhân thiếu hiểu biết nên gặt quả mất mát), từ đó chịu trách nhiệm và rút ra bài học đắt giá.\n3. **Tha thứ và giải thoát:** Lập vòng tròn tha thứ cho bản thân. Tha thứ cho sự ngu dại ấy để tự giải thoát cho chính mình.\n\n**Bài học & Giá trị:** Tha thứ cho chính mình không phải là yếu đuối, mà là đỉnh cao của trí tuệ. Quá trình này mang lại sự tái sinh mạnh mẽ, giúp ta tháo bỏ gánh nặng quá khứ, tự do bước tiếp trên con đường phía trước với một trái tim đã được tôi luyện và chữa lành. \n\nDưới đây là bài thực hành bóc cảnh chi tiết (Bóc cảnh bài 8) của Tuệ Sáng. Mời mọi người cùng tham khảo! 🌱',
      imageUrls: [
        'https://storage.googleapis.com/mpx-node-content/1cc2b20fb5b66d7ad5f50ef7a8eb8d4e13ec9bcdaaad2c88d8b948df92ee4312.jpeg',
        'https://storage.googleapis.com/mpx-node-content/9e2f49d9c8af3c359ae9dbd4889c339d67566bf6394ab1d2cb378e99815bdcda.jpeg'
      ],
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
