const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const INPUT_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(inputPath, outputPath) {
  try {
    const outputDir = path.dirname(outputPath);
    await mkdir(outputDir, { recursive: true });

    // Convert to WebP format with quality 80
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath.replace(/\.[^/.]+$/, '.webp'));

    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  try {
    const files = await readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) {
        await processDirectory(filePath);
      } else if (IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
        const relativePath = path.relative(INPUT_DIR, filePath);
        const outputPath = path.join(OUTPUT_DIR, relativePath);
        await optimizeImage(filePath, outputPath);
      }
    }
  } catch (error) {
    console.error('Error processing directory:', error);
  }
}

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Starting image optimization...');
processDirectory(INPUT_DIR)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error);
