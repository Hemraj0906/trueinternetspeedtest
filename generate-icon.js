const sharp = require('sharp');
const path = require('path');

async function processImage() {
    try {
        const inputPath = path.join(process.cwd(), 'public', 'logo.png');

        const image = sharp(inputPath);
        const trimmed = await image.trim().toBuffer();
        const trimmedMeta = await sharp(trimmed).metadata();

        const iconSize = trimmedMeta.height; // Extract square symbol assuming it's on the left

        await sharp(trimmed)
            .extract({ left: 0, top: 0, width: iconSize, height: iconSize })
            .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .toFile(path.join(process.cwd(), 'public', 'icon.png'));

        console.log('✅ Successfully generated public/icon.png from public/logo.png');
    } catch (err) {
        console.error('Error generating icon:', err);
    }
}

processImage();
