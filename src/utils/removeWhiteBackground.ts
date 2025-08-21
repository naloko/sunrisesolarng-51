export type RemoveWhiteOptions = {
  whiteThreshold?: number; // Pixels above this are fully transparent
  softThreshold?: number;  // Pixels above this start to fade
  minAlphaForCrop?: number; // Alpha threshold for cropping bounds
  padding?: number; // Transparent padding around the cropped content
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}

export async function removeWhiteBackgroundFromUrl(
  src: string,
  options: RemoveWhiteOptions = {}
): Promise<string> {
  const {
    whiteThreshold = 245,
    softThreshold = 230,
    minAlphaForCrop = 8,
    padding = 2,
  } = options;

  const image = await loadImage(src);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Could not get 2D context');

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);

  const { width, height } = canvas;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Remove white background and apply soft edge blending
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const aIndex = i + 3;

    // Fully transparent for definitely white
    if (r >= whiteThreshold && g >= whiteThreshold && b >= whiteThreshold) {
      data[aIndex] = 0;
      continue;
    }

    // Soft fade for near-white
    if (r >= softThreshold && g >= softThreshold && b >= softThreshold) {
      const avg = (r + g + b) / 3;
      const t = Math.min(1, Math.max(0, (avg - softThreshold) / (whiteThreshold - softThreshold)));
      data[aIndex] = Math.round(data[aIndex] * (1 - t));
    }
  }

  // Write back processed pixels
  ctx.putImageData(imageData, 0, 0);

  // Auto-crop to visible (non-transparent) bounds
  let minX = width, minY = height, maxX = -1, maxY = -1;
  const processed = ctx.getImageData(0, 0, width, height).data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alpha = processed[idx + 3];
      if (alpha > minAlphaForCrop) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  // If nothing found, just return original
  if (maxX < 0 || maxY < 0) {
    return canvas.toDataURL('image/png');
  }

  // Apply padding (transparent)
  minX = Math.max(0, minX - padding);
  minY = Math.max(0, minY - padding);
  maxX = Math.min(width - 1, maxX + padding);
  maxY = Math.min(height - 1, maxY + padding);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  const outCanvas = document.createElement('canvas');
  const outCtx = outCanvas.getContext('2d');
  if (!outCtx) throw new Error('Could not get output 2D context');

  outCanvas.width = cropW;
  outCanvas.height = cropH;

  outCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);

  return outCanvas.toDataURL('image/png');
}
