const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

// Center column (Len Krick photo)
content = content.replace(
  /className="h-\[550px\] w-auto object-contain mx-auto mix-blend-lighten scale-150 transition-all duration-700 ease-in-out opacity-0"/g,
  'className="h-auto lg:h-[550px] w-full max-w-xs mx-auto lg:w-auto object-contain mix-blend-lighten scale-100 lg:scale-150 transition-all duration-700 ease-in-out opacity-0"'
);

// Trophies
// First trophy
content = content.replace(
  /className="h-\[560px\] sm:h-\[640px\] lg:h-\[700px\] w-auto object-contain mix-blend-screen scale-200 transition-all duration-700 ease-in-out opacity-0"/g,
  'className="h-auto lg:h-[700px] w-full max-w-sm mx-auto lg:w-auto object-contain mix-blend-screen scale-100 lg:scale-200 transition-all duration-700 ease-in-out opacity-0"'
);

// Second trophy
content = content.replace(
  /className="h-\[560px\] sm:h-\[640px\] lg:h-\[700px\] w-auto object-contain mix-blend-screen scale-150 transition-all duration-700 ease-in-out opacity-0"/g,
  'className="h-auto lg:h-[700px] w-full max-w-sm mx-auto lg:w-auto object-contain mix-blend-screen scale-100 lg:scale-150 transition-all duration-700 ease-in-out opacity-0"'
);


// Check the trophies container height
content = content.replace(
  /className="relative h-\[560px\] sm:h-\[640px\] lg:h-\[700px\] bg-transparent rounded-xl overflow-visible animate-pulse"/g,
  'className="relative h-auto lg:h-[700px] w-full max-w-sm mx-auto lg:w-auto bg-transparent rounded-xl overflow-visible animate-pulse"'
);

fs.writeFileSync('src/AboutPage.tsx', content);
