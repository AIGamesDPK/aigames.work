import { ImageLoaderProps } from 'next/image';
import sharp from 'sharp';

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.endsWith('.png')) {
    return new Promise((resolve, reject) => {
      sharp(src)
        .resize(width || undefined)
        .png({ quality: quality || 100, palette: true })
        .toBuffer()
        .then(buffer => {
          const base64 = buffer.toString('base64');
          resolve(`data:image/png;base64,${base64}`);
        })
        .catch(reject);
    });
  }
  return src;
} 