const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

content = content.replace(
  /className="w-full object-contain"\s*className="w-full max-w-\[250px\] mx-auto h-auto object-contain lg:h-\[150px\] lg:w-\[500px\] lg:mt-\[24px\]"/g,
  'className="w-full max-w-[250px] mx-auto h-auto object-contain lg:h-[150px] lg:w-[500px] lg:mt-[24px]"'
);

content = content.replace(
  /className="text-xs sm:text-sm text-\[#0B1D3A\] leading-relaxed text-left"\s*className="text-center lg:text-left mt-0 lg:mt-\[42px\] ml-0 lg:-ml-\[31px\] mr-0 lg:mr-\[100px\]"/g,
  'className="text-xs sm:text-sm text-[#0B1D3A] leading-relaxed text-center lg:text-left mt-0 lg:mt-[42px] ml-0 lg:-ml-[31px] mr-0 lg:mr-[100px]"'
);

content = content.replace(
  /className="w-full max-w-\[250px\] mx-auto h-auto object-contain pt-0 lg:pt-\[130px\]"\s*className="mt-0 lg:-mt-\[76px\]"/g,
  'className="w-full max-w-[250px] mx-auto h-auto object-contain pt-0 lg:pt-[130px] mt-0 lg:-mt-[76px]"'
);

content = content.replace(
  /className="text-xs sm:text-sm text-\[#0B1D3A\] leading-relaxed text-left"\s*className="text-center lg:text-left mt-0 lg:mt-\[80px\] ml-0 lg:-ml-\[27px\] mr-0 lg:mr-\[100px\]"/g,
  'className="text-xs sm:text-sm text-[#0B1D3A] leading-relaxed text-center lg:text-left mt-0 lg:mt-[80px] ml-0 lg:-ml-[27px] mr-0 lg:mr-[100px]"'
);

// also fix text-right container
content = content.replace(
  /<div className="flex-1 text-right">/g,
  '<div className="flex-1 text-center lg:text-right">'
);

fs.writeFileSync('src/AboutPage.tsx', content);
