const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

// Coaching Image container
content = content.replace(
  /className="shrink-0 w-64 flex items-center justify-center"/g,
  'className="shrink-0 w-full lg:w-64 flex flex-col lg:flex-row items-center justify-center"'
);

// Coaching image inline styles
content = content.replace(
  /className="w-full object-contain"\s*style=\{\{ marginRight: '25px', marginLeft: '-130px' \}\}/g,
  'className="w-full max-w-[200px] mx-auto h-auto object-contain mr-0 lg:mr-[25px] ml-0 lg:-ml-[130px]"'
);

// Coaching text container inline styles
content = content.replace(
  /className="flex-1 text-right" style=\{\{ marginRight: '61px', marginLeft: '-39px' \}\}/g,
  'className="flex-1 text-center lg:text-right mr-0 lg:mr-[61px] ml-0 lg:-ml-[39px]"'
);

// Coaching text inline styles
content = content.replace(
  /className="font-extrabold text-\[#0B1D3A\] text-xs sm:text-sm uppercase tracking-wide" style=\{\{ marginRight: '20px' \}\}/g,
  'className="font-extrabold text-[#0B1D3A] text-xs sm:text-sm uppercase tracking-wide mr-0 lg:mr-[20px]"'
);

// paragraph inline style
content = content.replace(
  /className="text-xs sm:text-sm text-\[#0B1D3A\] mt-1 leading-relaxed text-left"\s*style=\{\{ textAlign: 'left' \}\}/g,
  'className="text-xs sm:text-sm text-[#0B1D3A] mt-1 leading-relaxed text-center lg:text-left"'
);

fs.writeFileSync('src/AboutPage.tsx', content);
