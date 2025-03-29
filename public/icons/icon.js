// This file generates the favicon and app icons
// We're using JavaScript to define the icons programmatically for better maintainability

const fs = require('fs');
const path = require('path');

// SVG template with the droplets icon (Lucide icon)
const svgTemplate = (color = '#0d9488', size = 24, strokeWidth = 2) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
</svg>
`;

// Generate favicon.svg - scalable icon for modern browsers
fs.writeFileSync(path.join(__dirname, '../favicon.svg'), svgTemplate('#0d9488', 512, 2));

// Generate favicon.ico placeholder (note: a proper .ico would require a build tool)
fs.writeFileSync(path.join(__dirname, '../favicon.txt'), 'This is a placeholder for favicon.ico. In a real project, you would use a tool like sharp or ico-convert to generate this file from the SVG.');

// Generate browserconfig.xml for Microsoft browsers
const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#0d9488</TileColor>
        </tile>
    </msapplication>
</browserconfig>
`;
fs.writeFileSync(path.join(__dirname, '../browserconfig.xml'), browserConfig);

console.log('Icon assets have been generated in the public directory.');
console.log('In a real project, use a tool like sharp or real-favicon-generator.net to create actual PNG versions.');