const fs = require('fs');
const files = ['src/HomePage.tsx', 'src/TrainingPage.tsx', 'src/AboutPage.tsx', 'src/AssessmentPage.tsx', 'src/SuccessStoriesPage.tsx', 'src/FirmsPage.tsx', 'src/HowDoIBeginPage.tsx'];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('main')) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('img') && lines[i].includes('images5')) {
          console.log(file, i, lines[i]);
      }
    }
  }
}
