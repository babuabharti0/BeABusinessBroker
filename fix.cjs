const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// 1. ELIMINATE X-AXIS OVERFLOW (SCROLL BUGS):
content = content.replace(/className="min-h-screen font-sans bg-white overflow-x-hidden max-w-full"/g, 'className="w-full max-w-full overflow-x-hidden min-h-screen font-sans bg-white"');

// Convert large hardcoded pixel widths to w-full lg:[fixed]
content = content.replace(/max-w-\[666px\]/g, 'w-full lg:max-w-[666px]');
content = content.replace(/max-w-\[575px\]/g, 'w-full lg:max-w-[575px]');
content = content.replace(/max-w-\[574px\]/g, 'w-full lg:max-w-[574px]');

// min-w-[500px] sm:min-w-0 -> w-full min-w-0 lg:min-w-[500px]
content = content.replace(/min-w-\[500px\] sm:min-w-0/g, 'w-full min-w-0 lg:min-w-[500px]');

// w-[300px] sm:w-[340px] -> w-full lg:w-[340px]
content = content.replace(/w-\[300px\] sm:w-\[340px\]/g, 'w-full lg:w-[340px]');
content = content.replace(/w-full sm:w-\[345px\]/g, 'w-full lg:w-[345px]');
content = content.replace(/w-full max-w-\[345px\]/g, 'w-full lg:max-w-[345px]');

// shrink-0 min-w-0 on text containers
content = content.replace(/className="flex-1 min-w-0 flex flex-col justify-between h-full"/g, 'className="flex-1 min-w-0 shrink-0 flex flex-col justify-between h-full"');
// Wait, replacing 'className="flex-1"' might be too greedy. Let's do it specifically.
content = content.replace(/className="flex-1"/g, 'className="flex-1 shrink-0 min-w-0"');

// 2. FLUID TYPOGRAPHY SCALING:
// Hero/Main Headers: text-3xl sm:text-4xl lg:[keep_existing]
content = content.replace(/text-2xl sm:text-3xl lg:text-6xl/g, 'text-3xl sm:text-4xl lg:text-6xl');
content = content.replace(/text-4xl sm:text-6xl/g, 'text-3xl sm:text-4xl lg:text-6xl');

// Sub-headers: text-xl sm:text-2xl lg:[keep_existing]
content = content.replace(/text-\[#1E3A8A\] font-bold text-2xl sm:text-\[28px\]/g, 'text-[#1E3A8A] font-bold text-xl sm:text-2xl lg:text-[28px]');
content = content.replace(/text-\[#1E3A8A\] font-bold text-2xl sm:text-\[30px\]/g, 'text-[#1E3A8A] font-bold text-xl sm:text-2xl lg:text-[30px]');
content = content.replace(/text-\[#1E3A8A\] font-bold text-\[30px\]/g, 'text-[#1E3A8A] font-bold text-xl sm:text-2xl lg:text-[30px]');
content = content.replace(/text-\[#1E3A8A\] text-2xl font-bold/g, 'text-[#1E3A8A] text-xl sm:text-2xl lg:text-2xl font-bold');

// Body text: text-base sm:text-lg
content = content.replace(/text-\[16px\]/g, 'text-base sm:text-lg lg:text-[16px]');

// 3. VERTICAL STACKING & GRID REFLOW:
content = content.replace(/flex flex-col xl:flex-row/g, 'flex flex-col xl:flex-row'); // no change needed
content = content.replace(/flex flex-col sm:flex-row/g, 'flex flex-col sm:flex-col lg:flex-row'); // converted flex-row on sm to lg

// Reflow multi-column grids to single columns
content = content.replace(/grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6/g, 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6');
content = content.replace(/grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6/g, 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6');

// 4. TOUCH-TARGET OPTIMIZATION (UX):
content = content.replace(/px-8 py-3 rounded-md text-lg inline-block w-full sm:w-auto text-center/g, 'px-6 py-4 rounded-md text-lg inline-block w-full sm:w-auto text-center');
content = content.replace(/px-6 py-3 bg-\[#FF4A00\] text-white font-extrabold rounded-md shadow-lg text-lg lg:text-xl w-max/g, 'px-6 py-4 bg-[#FF4A00] text-white font-extrabold rounded-md shadow-lg text-lg lg:text-xl w-full sm:w-auto text-center');
content = content.replace(/px-8 py-4 bg-\[#FF4A00\] text-white font-extrabold rounded-md shadow-lg text-lg lg:text-xl inline-flex items-center gap-2/g, 'px-6 py-4 bg-[#FF4A00] text-white font-extrabold rounded-md shadow-lg text-lg lg:text-xl inline-flex w-full sm:w-auto text-center items-center justify-center gap-2');

fs.writeFileSync('src/HomePage.tsx', content);
