import fs from 'fs';

let content = fs.readFileSync('index.html', 'utf8');
let changed = false;
content = content.replace(/href="([^"]+)"/g, (match, srcPath) => {
    if (srcPath.startsWith('http') || srcPath.startsWith('data:')) return match;
    let localPath = srcPath;
    if (localPath.startsWith('/')) localPath = localPath.substring(1);
    
    if (localPath.startsWith('src/') || localPath.startsWith('public/')) {
        if (!fs.existsSync(localPath)) {
            console.log(`Fixing missing href in index.html: ${srcPath}`);
            changed = true;
            return `href="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"`;
        }
    }
    return match;
});

if (changed) {
    fs.writeFileSync('index.html', content);
}
