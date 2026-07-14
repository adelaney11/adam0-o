// Generates public/og.png — the link-preview card (iMessage / social share).
// Renders an SVG of the ASCII face + name to a 1200×630 PNG via sharp.
// Run: node scripts/og-image.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');

const W = 1200;
const H = 630;

// Site palette (from src/styles/global.css)
const BG = '#0e0f0d';
const LINE = '#33342d';
const TEXT = '#c9c6b4';
const DIM = '#8b8879';
const PHOSPHOR = '#9fbf8f';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="${LINE}" stroke-width="3"/>
  <text x="${W / 2}" y="272" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="210" fill="${PHOSPHOR}">(0_o)</text>
  <text x="${W / 2}" y="422" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="72" letter-spacing="10" fill="${TEXT}">ADAM DELANEY</text>
  <text x="${W / 2}" y="482" text-anchor="middle" font-family="monospace" font-size="30" letter-spacing="6" fill="${DIM}">iOS ENGINEER · 5+ YEARS</text>
  <text x="${W / 2}" y="566" text-anchor="middle" font-family="monospace" font-size="24" letter-spacing="4" fill="${PHOSPHOR}">adam0-o.dev</text>
</svg>`;

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
