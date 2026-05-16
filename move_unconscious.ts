import fs from 'fs';

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf-8');

const tag = '          <UnconsciousLevelsSection />';
const idx = content.indexOf(tag);

if (idx !== -1) {
  // find start and end of this block, including padding maybe
  const endIdx = content.indexOf('>', idx) + 1;
  const chunk = content.slice(idx, endIdx) + '\n';
  
  // remove it from current pos
  content = content.slice(0, idx) + content.slice(endIdx + 1); // remove \n
  
  // insert before <BonusSection />
  const targetTag = '<BonusSection />';
  const targetIdx = content.indexOf(targetTag);
  if (targetIdx !== -1) {
    content = content.slice(0, targetIdx) + chunk + content.slice(targetIdx);
  }
  
  fs.writeFileSync(file, content);
  console.log("Moved UnconsciousLevelsSection");
}
