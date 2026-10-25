import fs from 'fs';
import path from 'path';

const distIndex = path.resolve('dist/index.html');
const dist404 = path.resolve('dist/404.html');
const distServicesHtml = path.resolve('dist/cyber-security-services.html');
const distServicesShortHtml = path.resolve('dist/services.html');

if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, dist404);
  fs.copyFileSync(distIndex, distServicesHtml);
  fs.copyFileSync(distIndex, distServicesShortHtml);
  console.log('Successfully created dist/404.html, cyber-security-services.html, and services.html for direct static routing');
}
