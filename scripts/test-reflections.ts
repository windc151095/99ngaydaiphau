// test-reflections.ts
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function test() {
  try {
    const q1 = query(collection(db, 'articles'));
    const snapshot1 = await getDocs(q1);
    console.log(`Success, fetched ${snapshot1.docs.length} articles.`);
  } catch (error) {
    if (error instanceof Error) {
        console.error('Error fetching articles:', error.message);
    } else {
        console.error('Error fetching articles:', error);
    }
  }

  try {
    const q = query(collection(db, 'reflections'));
    const snapshot = await getDocs(q);
    console.log(`Success, fetched ${snapshot.docs.length} documents.`);
  } catch (error) {
    if (error instanceof Error) {
        console.error('Error fetching reflections:', error.message);
    } else {
        console.error('Error fetching reflections:', error);
    }
  }
}

test();




