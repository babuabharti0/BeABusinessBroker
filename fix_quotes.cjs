const fs = require('fs');
const path = require('path');
const srcDir = './src';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // replace './images2/LenKrick'sPhoto.jpg' with "./images2/LenKrick'sPhoto.jpg"
  // Actually, let's just find any single quoted string containing 'sPhoto
  content = content.replace(/'(\.\/images[0-9]*\/LenKrick'sPhoto\.[a-z]+)'/g, '"$1"');
  fs.writeFileSync(filePath, content, 'utf8');
}
