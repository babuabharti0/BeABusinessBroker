const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');

const content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');
const parser = acorn.Parser.extend(jsx());

try {
  parser.parse(content, { sourceType: 'module', ecmaVersion: 2020 });
  console.log("Parse successful");
} catch (e) {
  console.log("Parse failed at line", e.loc.line, "column", e.loc.column);
  console.log("Error:", e.message);
}
