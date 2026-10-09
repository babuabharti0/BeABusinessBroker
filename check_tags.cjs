const fs = require('fs');
const content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');

// A very naive JSX tag balancer for div, section, main, aside, header, footer, form
const tags = ['div', 'section', 'main', 'aside', 'header', 'footer', 'form'];

let lines = content.split('\n');
let stack = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  // Simple regex to find <tag and </tag>
  const openRegex = /<([a-zA-Z0-9]+)(>|\s[^>]*?(?<!\/)>)/g;
  const closeRegex = /<\/([a-zA-Z0-9]+)>/g;
  
  let match;
  while ((match = openRegex.exec(line)) !== null) {
    if (tags.includes(match[1])) {
      stack.push({ tag: match[1], line: i + 1 });
    }
  }
  
  while ((match = closeRegex.exec(line)) !== null) {
    if (tags.includes(match[1])) {
      if (stack.length === 0) {
        console.log(`Unmatched close tag </${match[1]}> at line ${i + 1}`);
      } else {
        let last = stack.pop();
        if (last.tag !== match[1]) {
          console.log(`Mismatch at line ${i + 1}: expected </${last.tag}> (from line ${last.line}) but found </${match[1]}>`);
          // Try to recover
          stack.push(last);
        }
      }
    }
  }
}
console.log('Remaining on stack:');
console.log(stack.map(s => `${s.tag} at line ${s.line}`));
