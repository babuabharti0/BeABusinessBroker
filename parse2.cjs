const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');

const content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');
const parser = acorn.Parser.extend(jsx());

try {
  parser.parse(content, { sourceType: 'module', ecmaVersion: 2020 });
} catch (e) {
  console.log("Error at line", e.loc.line, "column", e.loc.column);
  console.log(e.message);
  
  // print the surrounding lines
  const lines = content.split('\n');
  for (let i = Math.max(0, e.loc.line - 5); i < Math.min(lines.length, e.loc.line + 5); i++) {
    if (i === e.loc.line - 1) {
      console.log(`> ${i+1} | ${lines[i]}`);
    } else {
      console.log(`  ${i+1} | ${lines[i]}`);
    }
  }
}
