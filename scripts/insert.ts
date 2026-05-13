import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function main() {
  try {
    await addDoc(collection(db, 'articles'), {
      title: 'Hành trình cùng sự nghiệp trồng người và những điều tốt đẹp',
      content: 'Cảm ơn hành trình đầy kỉ niệm và những trải nghiệm tuyệt vời cùng Tuệ Sáng. Việc đồng hành cùng nhau trong những dự án giáo dục, mang lại giá trị thiết thực cho cộng đồng là một vinh dự lớn.\n\n**Hành trình vẫn còn tiếp tục** với nhiều dự định mới. Chúng ta cùng nhau cố gắng nhé!\n\n![Tập thể kỷ niệm](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80)',
      imageUrls: [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
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
