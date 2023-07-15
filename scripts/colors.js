export function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorDistance(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  return Math.sqrt(Math.pow(rgb1.r - rgb2.r, 2) + Math.pow(rgb1.g - rgb2.g, 2) + Math.pow(rgb1.b - rgb2.b, 2));
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  } else {
    throw new Error(`Invalid color format: ${JSON.stringify(hex)}`);
  }
}

export function generateDistinctRandomColor(referenceColor, minDistance = 100) {
  let newColor;

  do {
    newColor = generateRandomColor();
  } while (colorDistance(referenceColor, newColor) < minDistance);

  return newColor;
}

export function invertColor(color) {
  let rgbObj = hexToRgb(color);
  let invertedColor = '#';
  invertedColor += (255 - rgbObj.r).toString(16).padStart(2, '0');
  invertedColor += (255 - rgbObj.g).toString(16).padStart(2, '0');
  invertedColor += (255 - rgbObj.b).toString(16).padStart(2, '0');
  return invertedColor;
}

export function getComplementaryColor(color) {
  // Convert hexadecimal to RGB
  let rgbColor = hexToRgb(color);

  if (!rgbColor) {
    throw new Error('Invalid color format: ' + color);
  }

  // Calculate the complementary color
  let compColor = {
    r: 255 - rgbColor.r,
    g: 255 - rgbColor.g,
    b: 255 - rgbColor.b,
  };

  // Convert RGB back to hexadecimal
  return rgbToHex(compColor.r, compColor.g, compColor.b);
}

function rgbToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + r + g + b;
}
