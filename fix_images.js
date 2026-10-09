import fs from 'fs';
import path from 'path';

const files = ['src/HomePage.tsx', 'src/TrainingPage.tsx', 'src/AboutPage.tsx', 'src/AssessmentPage.tsx', 'src/SuccessStoriesPage.tsx', 'src/FirmsPage.tsx', 'src/HowDoIBeginPage.tsx', 'src/Navbar.tsx', 'src/Footer.tsx', 'index.html'];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace src="src/images..." if file doesn't exist
  content = content.replace(/src="([^"]+)"/g, (match, srcPath) => {
    if (srcPath.startsWith('http') || srcPath.startsWith('data:')) return match;
    
    // Some are like src/images/... or /src/images/...
    let localPath = srcPath;
    if (localPath.startsWith('/')) localPath = localPath.substring(1);
    
    if (localPath.startsWith('src/') || localPath.startsWith('public/') || localPath.endsWith('.png') || localPath.endsWith('.jpg') || localPath.endsWith('.jpeg')) {
        if (!fs.existsSync(localPath)) {
            console.log(`Fixing missing image in ${file}: ${srcPath}`);
            changed = true;
            return `src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"`;
        }
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content);
  }
}
