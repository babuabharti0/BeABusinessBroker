import fs from 'fs';
import * as cheerio from 'cheerio';

const files = ['src/HomePage.tsx', 'src/TrainingPage.tsx', 'src/AboutPage.tsx', 'src/AssessmentPage.tsx', 'src/SuccessStoriesPage.tsx', 'src/FirmsPage.tsx', 'src/HowDoIBeginPage.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // strip out React-specific stuff that breaks cheerio, like { ... }
  // Actually, cheerio can parse HTML with custom tags.
  // It might fail on some JSX, but let's try.
  try {
      const $ = cheerio.load(content, { xmlMode: true });
      const imgs = $('main > div:nth-of-type(6) > img');
      if (imgs.length > 0) {
          console.log(file, 'has', imgs.length, 'images!');
      }
      
      const imgs2 = $('main > div:nth-of-type(6) img');
      if (imgs2.length > 0) {
          console.log(file, 'has', imgs2.length, 'nested images in div 6');
      }
  } catch(e) {}
}
