const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

// Fix IBBA Banner block margins
content = content.replace(
  /style=\{\{ marginRight: '100px', marginLeft: '100px' \}\}/g,
  'className="mx-0 lg:mx-[100px]"'
);
content = content.replace(
  /className="bg-orange-50\/60 border border-orange-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 my-8 shadow-xs" className="mx-0 lg:mx-\[100px\]"/g,
  'className="bg-orange-50/60 border border-orange-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 my-8 shadow-xs mx-0 lg:mx-[100px]"'
);

// We need to look for `style={{ marginRight: '100px', marginLeft: '100px' }}` precisely
fs.writeFileSync('src/AboutPage.tsx', content);
