const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/<(img|iframe|video)\s+([^>]+)>/g, (match, tag, attrs) => {
    if (/loading\s*=\s*['"](lazy|eager)['"]/.test(attrs)) {
      return match;
    }
    return `<${tag} loading="lazy" ${attrs}>`;
  });
  
  fs.writeFileSync(file, content);
});
console.log("Done");
