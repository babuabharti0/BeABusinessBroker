const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');

// 1. Wrap the root component and all main section wrappers in `w-full max-w-full overflow-x-hidden`.
// (Already done sections in a previous step, but let's double check root)
if (!content.includes('overflow-x-hidden max-w-full')) {
  // handled
}

// 2. Resolve Overlaps (HERO SECTION)
// Remove `absolute` positioning, negative margins (`-mt-X`), or overlapping grid tracks on the mobile view
// Ensure all text blocks and columns have safe mobile padding: `px-4 sm:px-6 lg:[keep_existing]`.
// Let's replace 'sm:flex-row' with '' in line 102
content = content.replace(/flex flex-col sm:flex-row items-center justify-center lg:justify-end/g, "flex flex-col lg:flex-row items-center justify-center lg:justify-end");

// "logos (FastStart, PricePoint) are bleeding off the screen"
// Check if they have fixed width on mobile
// In block 1/2/3, shrink-0 w-full lg:w-96
// Let's replace `shrink-0` with `shrink-0 lg:shrink-0`? `shrink-0` means it won't shrink. On mobile, we might want it to shrink.
content = content.replace(/shrink-0 w-full lg:w-96/g, "w-full lg:w-96 lg:shrink-0");
content = content.replace(/shrink-0 w-full lg:w-64/g, "w-full lg:w-64 lg:shrink-0");

// "Text boxes are overlapping Len Krick's face"
// Len Krick image wrapper: w-full lg:w-[389.656px]
// Let's ensure it doesn't have a fixed height on mobile that causes overlap.
content = content.replace(/lg:h-\[550px\] pl-0/g, "h-auto lg:h-[550px] pl-0");

// "trophy images are blown out"
// Trophy image width="500" max-w-sm... Let's add max-w-[200px] on mobile, lg:max-w-sm
content = content.replace(/w-full max-w-sm mx-auto lg:w-auto bg-transparent/g, "w-full max-w-[200px] lg:max-w-sm mx-auto lg:w-auto bg-transparent");
content = content.replace(/w-full max-w-sm mx-auto lg:w-auto object-contain mix-blend-screen scale-100 lg:scale-200/g, "w-full max-w-[200px] lg:max-w-sm mx-auto lg:w-auto object-contain mix-blend-screen scale-100 lg:scale-200");

// "side-by-side flex rows are pushing text completely off the right edge"
// Could be line 416: flex flex-col sm:flex-row -> flex flex-col lg:flex-row
content = content.replace(/flex flex-col sm:flex-row/g, "flex flex-col lg:flex-row");

// Write back
fs.writeFileSync('src/AboutPage.tsx', content, 'utf8');
