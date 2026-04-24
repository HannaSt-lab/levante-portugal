import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Auto-increment filename
let n = 1;
let filename;
do {
  filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  n++;
} while (fs.existsSync(path.join(dir, filename)));

const browser = await puppeteer.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
// Scroll to trigger intersection observers
await page.evaluate(async () => {
  await new Promise(resolve => {
    let y = 0;
    const step = 400;
    const interval = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y >= document.body.scrollHeight) {
        window.scrollTo(0, 0);
        clearInterval(interval);
        setTimeout(resolve, 500);
      }
    }, 120);
  });
});
await new Promise(r => setTimeout(r, 1000));

const filepath = path.join(dir, filename);
await page.screenshot({ path: filepath, fullPage: false });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
