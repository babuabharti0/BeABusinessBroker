const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

content = content.replace(/<section className="([^"]*)"/g, (match, classes) => {
  let newClasses = classes;
  if (!newClasses.includes('w-full')) newClasses += ' w-full';
  if (!newClasses.includes('max-w-full')) newClasses += ' max-w-full';
  if (!newClasses.includes('overflow-x-hidden')) newClasses += ' overflow-x-hidden';
  return `<section className="${newClasses.trim()}"`;
});

fs.writeFileSync('src/AboutPage.tsx', content, 'utf8');
