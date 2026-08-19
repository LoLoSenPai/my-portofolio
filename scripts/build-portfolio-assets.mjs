import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const root = process.cwd();
const iconSource = process.env.PORTFOLIO_ICON_SOURCE;

if (!iconSource || !fs.existsSync(iconSource)) {
  throw new Error("Set PORTFOLIO_ICON_SOURCE to the generated square icon.");
}

await Promise.all([
  sharp(iconSource)
    .resize(512, 512, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "app", "icon.png")),
  sharp(iconSource)
    .resize(180, 180, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "public", "apple-touch-icon.png")),
  sharp(iconSource)
    .resize(192, 192, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "public", "icon-192.png")),
  sharp(iconSource)
    .resize(512, 512, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "public", "icon-512.png")),
]);

const socialImageSvg = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop stop-color="#05070C"/>
        <stop offset="0.62" stop-color="#090D16"/>
        <stop offset="1" stop-color="#121025"/>
      </linearGradient>
      <linearGradient id="accent" x1="96" y1="0" x2="620" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4DE3D1"/>
        <stop offset="0.62" stop-color="#65C8FF"/>
        <stop offset="1" stop-color="#9B7BFF"/>
      </linearGradient>
      <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M44 0H0V44" fill="none" stroke="#FFFFFF" stroke-opacity="0.035"/>
      </pattern>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="48"/>
      </filter>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <circle cx="991" cy="309" r="230" fill="#4DE3D1" fill-opacity="0.11" filter="url(#glow)"/>
    <circle cx="1055" cy="210" r="170" fill="#9B7BFF" fill-opacity="0.12" filter="url(#glow)"/>
    <rect x="72" y="66" width="1056" height="498" rx="34" fill="#080B12" fill-opacity="0.66" stroke="#FFFFFF" stroke-opacity="0.09"/>
    <rect x="96" y="96" width="94" height="5" rx="2.5" fill="url(#accent)"/>
    <text x="96" y="158" fill="#94A3B8" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="5">PORTFOLIO / 2026</text>
    <text x="96" y="257" fill="#F7F8FA" font-family="Arial, sans-serif" font-size="70" font-weight="800" letter-spacing="-2">Loic Dlugosz</text>
    <text x="96" y="326" fill="url(#accent)" font-family="Arial, sans-serif" font-size="35" font-weight="700">Fullstack Developer</text>
    <text x="96" y="374" fill="#B8C0CF" font-family="Arial, sans-serif" font-size="25">Web · Mobile · Solana · Games</text>
    <rect x="96" y="424" width="526" height="1" fill="#FFFFFF" fill-opacity="0.12"/>
    <text x="96" y="470" fill="#D7DCE5" font-family="Arial, sans-serif" font-size="20">Building and shipping products end-to-end.</text>
    <text x="96" y="526" fill="#718096" font-family="Arial, sans-serif" font-size="18" letter-spacing="1">portfolio.lololabs.xyz</text>
    <rect x="781" y="134" width="360" height="360" rx="78" fill="#05070C" stroke="#FFFFFF" stroke-opacity="0.08"/>
  </svg>
`);

const socialMark = await sharp(iconSource)
  .resize(360, 360, { fit: "cover" })
  .png()
  .toBuffer();

fs.mkdirSync(path.join(root, "public", "images"), { recursive: true });

await sharp(socialImageSvg)
  .composite([{ input: socialMark, left: 781, top: 134 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, "public", "images", "og-portfolio.png"));

const projectsDirectory = path.join(root, "public", "images", "projects");
const projectPngs = fs
  .readdirSync(projectsDirectory)
  .filter((filename) => filename.endsWith(".png"));

for (const filename of projectPngs) {
  const input = path.join(projectsDirectory, filename);
  const metadata = await sharp(input).metadata();
  const targetWidth = metadata.width > metadata.height ? 1400 : 720;

  await sharp(input)
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(path.join(projectsDirectory, filename.replace(/\.png$/i, ".webp")));
}

console.log(`Generated brand assets and optimized ${projectPngs.length} project images.`);
