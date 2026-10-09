const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

// For badges:
content = content.replace(
  /<div>\s*<h3 className="font-extrabold text-\[#0B1D3A\] text-sm leading-snug">/g,
  '<div className="text-center lg:text-left">\n                    <h3 className="font-extrabold text-[#0B1D3A] text-sm leading-snug">'
);

fs.writeFileSync('src/AboutPage.tsx', content);
