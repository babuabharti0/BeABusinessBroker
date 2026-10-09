import fs from 'fs';
const files = ['src/HomePage.tsx', 'src/TrainingPage.tsx', 'src/AboutPage.tsx', 'src/AssessmentPage.tsx', 'src/SuccessStoriesPage.tsx', 'src/FirmsPage.tsx', 'src/HowDoIBeginPage.tsx'];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<main')) {
      console.log('--- ' + file + ' ---');
      const lines = content.split('\n');
      let indent = -1;
      let sectionCount = 0;
      for (let i = 0; i < lines.length; i++) {
         if (lines[i].includes('<main')) {
             indent = lines[i].indexOf('<main');
         } else if (indent > -1) {
             if (lines[i].includes('</main>')) {
                 indent = -1;
             } else {
                 const line = lines[i];
                 if (line.match(new RegExp(`^ {${indent + 2}}<section`))) {
                     sectionCount++;
                     console.log(`section ${sectionCount} at line ${i+1}`);
                 }
             }
         }
      }
  }
}
