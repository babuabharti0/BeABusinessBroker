const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

// FastStart Image container
content = content.replace(
  /className="shrink-0 w-96 flex items-center justify-center"/g,
  'className="shrink-0 w-full lg:w-96 flex flex-col lg:flex-row items-center justify-center"'
);

// FastStart Block wrapper
content = content.replace(
  /<div className="flex items-center gap-4">/g,
  '<div className="flex flex-col lg:flex-row items-center gap-4 w-full">'
);

// We need to apply this to FastStart, PricePoint, and Coaching blocks.
// Let's replace inline styles in FastStart
content = content.replace(
  /style=\{\{ height: '150px', width: '500px', marginTop: '24px' \}\}/g,
  'className="w-full max-w-[250px] mx-auto h-auto object-contain lg:h-[150px] lg:w-[500px] lg:mt-[24px]"'
);
content = content.replace(
  /style=\{\{ textAlign: 'left', marginTop: '42px', marginLeft: '-31px', marginRight: '100px' \}\}/g,
  'className="text-center lg:text-left mt-0 lg:mt-[42px] ml-0 lg:-ml-[31px] mr-0 lg:mr-[100px]"'
);

// PricePoint Image
content = content.replace(
  /className="w-full object-contain pt-\[130px\]"/g,
  'className="w-full max-w-[250px] mx-auto h-auto object-contain pt-0 lg:pt-[130px]"'
);
content = content.replace(
  /style=\{\{ marginTop: '-76px' \}\}/g,
  'className="mt-0 lg:-mt-[76px]"'
);
content = content.replace(
  /style=\{\{ textAlign: 'left', marginTop: '80px', marginLeft: '-27px', marginRight: '100px' \}\}/g,
  'className="text-center lg:text-left mt-0 lg:mt-[80px] ml-0 lg:-ml-[27px] mr-0 lg:mr-[100px]"'
);

// Coaching block inline styles
content = content.replace(
  /style=\{\{ height: '143px', width: '272.71875px', marginTop: '-37px' \}\}/g,
  'className="w-full max-w-[200px] mx-auto h-auto object-contain lg:h-[143px] lg:w-[272px] lg:-mt-[37px]"'
);
content = content.replace(
  /style=\{\{ textAlign: 'left', marginTop: '30px', marginLeft: '-20px', marginRight: '100px' \}\}/g,
  'className="text-center lg:text-left mt-0 lg:mt-[30px] ml-0 lg:-ml-[20px] mr-0 lg:mr-[100px]"'
);

// Block 3 is probably "Coaching". Let's check what it has.
fs.writeFileSync('src/AboutPage.tsx', content);
