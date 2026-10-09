const fs = require('fs');
let content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');

content = content.replace(
  "Check,",
  "Check,\n  Handshake,\n  Trophy,\n  BarChart3,"
);

fs.writeFileSync('src/AssessmentPage.tsx', content, 'utf8');
console.log('Successfully fixed imports');
