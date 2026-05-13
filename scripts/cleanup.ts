import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function main() {
  try {
    const snaps = await getDocs(collection(db, 'articles'));
    for (const docSnap of snaps.docs) {
      const data = docSnap.data();
      if (data.imageUrls && data.imageUrls.length > 0) {
        if (data.imageUrls[0].includes('storage.googleapis.com')) {
          console.log('Soft-deleting broken article:', docSnap.id);
          await updateDoc(doc(db, 'articles', docSnap.id), {
            isDeleted: true
          });
        }
      }
    }
    console.log('Done cleaning up');
  } catch (error) {
    console.error('Error:', error);
  }
  process.exit(0);
}
main();
