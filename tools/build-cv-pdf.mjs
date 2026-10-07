// Builds cv/Shahid_Nawaz_Khan_CV.pdf from index.html using its print styles.
// Usage: node tools/build-cv-pdf.mjs   (needs the `playwright` package)
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const page = await browser.newPage();
await page.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'load' });
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: path.join(root, 'cv', 'Shahid_Nawaz_Khan_CV.pdf'),
  format: 'A4',
  preferCSSPageSize: true,
  printBackground: false,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate:
    '<div style="font-size:7pt;width:100%;text-align:center;color:#666;">' +
    'Shahid Nawaz Khan &middot; CV &middot; <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
});
await browser.close();
console.log('Wrote cv/Shahid_Nawaz_Khan_CV.pdf');
