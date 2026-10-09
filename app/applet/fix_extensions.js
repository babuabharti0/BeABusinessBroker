const fs = require('fs');
const path = require('path');

const srcDir = './src';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let allImages = [];
for (let i = 2; i <= 7; i++) {
  const dir = `./src/images${i}`;
  if (fs.existsSync(dir)) {
    const images = fs.readdirSync(dir);
    for (const img of images) {
      allImages.push({
        dir: `images${i}`,
        nameWithoutExt: path.parse(img).name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
        ext: path.parse(img).ext
      });
    }
  }
}

for (const file of files) {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const img of allImages) {
    const wrongPathRegex = new RegExp(`['"]([^'"]*?${img.dir}/${img.nameWithoutExt})\\.webp['"]`, 'g');
    if (content.match(wrongPathRegex)) {
       content = content.replace(wrongPathRegex, `'$1${img.ext}'`);
       changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
