const fs = require('fs');

let content = fs.readFileSync('src/components/MapDirectorySection.tsx', 'utf-8');

const regex = /<div className="shrink-0 ml-2">\s*\{activeItem === '([a-zA-Z0-9-]+)' \? <ChevronUp className="w-5 h-5 text-\[\#8B2C24\]" \/> : <ChevronDown className="w-5 h-5 text-\[\#b09e86\]" \/>\}\s*<\/div>/g;

content = content.replace(regex, `<div className="shrink-0 ml-2 flex items-center">
                        <span className={\`text-[10px] md:text-xs font-bold uppercase tracking-wider \${activeItem === '$1' ? 'text-[#8B2C24]' : 'text-[var(--color-muted-dark)]'}\`}>
                          {activeItem === '$1' ? 'Thu gọn' : 'Xem thêm'}
                        </span>
                      </div>`);

fs.writeFileSync('src/components/MapDirectorySection.tsx', content);
