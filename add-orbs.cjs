const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/Asus/Downloads/portfolio/src/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('glow-orb--top-right')) {
    console.log(file + ' already has glow orbs');
    return;
  }
  
  const sectionRegex = /(<section[^>]*>)/;
  if (sectionRegex.test(content)) {
    const orbs = '\n      <div className="glow-orb glow-orb--top-right" aria-hidden="true" />\n      <div className="glow-orb glow-orb--bottom-left" aria-hidden="true" />';
    content = content.replace(sectionRegex, '$1' + orbs);
    fs.writeFileSync(filePath, content);
    console.log('Added glow orbs to ' + file);
  } else {
    console.log('No <section> tag found in ' + file);
  }
});
