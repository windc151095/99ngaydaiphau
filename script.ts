import fs from 'fs';
import path from 'path';

function walkSync(dir: string, filelist: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const filesToProcess = walkSync(path.join(process.cwd(), 'src'));

let filesModified = 0;

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace colors
  content = content.replace(/#D03027/g, '#8B2C24'); // Deep classic red
  content = content.replace(/#C12A27/g, '#8B2C24'); // Another red
  content = content.replace(/#8C3A3A/g, '#8B2C24'); // Another red
  
  content = content.replace(/#D5D0B2/g, '#DBCDB3'); // Warm Border
  content = content.replace(/#8F7C6B/g, '#988673'); // Muted brownish text
  
  content = content.replace(/#FFFDF3/g, '#FCFBF8'); // Surface 1
  content = content.replace(/#FDFBF7/g, '#F6F3E9'); // Paper
  content = content.replace(/#EBEBEB/g, '#EFECE1'); // Surface Alt
  
  content = content.replace(/#003B6D/g, '#24201C'); // Dark ink
  content = content.replace(/#00875A/g, '#6E2D2A'); // Accent dark
  content = content.replace(/#A67B5B/g, '#B59A6D'); // Gold
  content = content.replace(/#DFA010/g, '#B59A6D'); // Another Gold
  content = content.replace(/#ECA02B/g, '#B59A6D'); // Another Gold

  // Replace rounded shapes
  content = content.replace(/rounded-\[2rem\]/g, 'rounded-md');
  content = content.replace(/rounded-2xl/g, 'rounded-md');
  content = content.replace(/rounded-xl/g, 'rounded-sm');
  content = content.replace(/rounded-full/g, 'rounded-md'); 

  // Make borders "classic-border"
  // Actually, we can keep borders as is, but we might inject 'classic-border' if we want.
  
  // Update icons stroke width to 1.5 to make them look more classic/elegant
  // Lucide icons have `lucide-react` import. 
  // Let's add strokeWidth={1} to all icons? Tricky to automate safely with regex. 
  // Instead, maybe add a global CSS rule in index.css if we can't reliably do this. 

  // Animations: convert "transition-all duration-300" to "transition-all duration-700 ease-in-out" to make things slower
  content = content.replace(/duration-300/g, 'duration-700 ease-in-out');
  content = content.replace(/duration-500/g, 'duration-700 ease-in-out');

  // Sync fonts to use serif more: We already changed font-sans to point to a serif in index.css, so standard tailwind 
  // font-sans/font-serif will map correctly. But we might want to replace "font-sans" and "font-serif" if needed.
  // Actually, "font-sans" is Lora, and "font-serif" is Cormorant Garamond. That's fine.

  fs.writeFileSync(file, content, 'utf8');
  filesModified++;
}

console.log(`Processed ${filesModified} files.`);
