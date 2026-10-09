const fs = require('fs');
const files = ['src/HomePage.tsx', 'src/TrainingPage.tsx', 'src/AboutPage.tsx', 'src/AssessmentPage.tsx', 'src/SuccessStoriesPage.tsx', 'src/FirmsPage.tsx', 'src/HowDoIBeginPage.tsx'];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<main')) {
    console.log(file);
    // find lines where <main> is
  }
}
