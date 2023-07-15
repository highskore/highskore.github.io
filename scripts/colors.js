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

export function applyRandomColorToEachCharacter(element) {
  let preElements = element.querySelectorAll('pre'); // get all the pre blocks

  preElements.forEach((preElement) => {
    let asciiArt = preElement.textContent; // get ASCII art from pre tag
    let coloredAsciiArt = '';

    // iterate through each character in the ASCII art
    for (let char of asciiArt) {
      if (char !== ' ') {
        // if the character is not a space
        let randomColor = generateRandomColor();
        // wrap the character in a span with a random color
        coloredAsciiArt += `<span style="color:${randomColor}">${char}</span>`;
      } else {
        // if the character is a space, just add it to the string
        coloredAsciiArt += char;
      }
    }

    preElement.innerHTML = coloredAsciiArt; // replace the ASCII art with the colored ASCII art
  });
}

function interpolateColor(color1, color2, factor) {
  const r = color1.r + (color2.r - color1.r) * factor;
  const g = color1.g + (color2.g - color1.g) * factor;
  const b = color1.b + (color2.b - color1.b) * factor;

  return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}

function isLightColor(color) {
  const rgb = hexToRgb(color);
  // This is a common formula for calculating perceived brightness
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness > 128; // This is a common threshold
}

export function applyGradientToCharacters(element, startColor) {
  let preElements = element.querySelectorAll('pre'); // get all the pre blocks

  // Decide on end color based on brightness of the start color
  let endColor = isLightColor(startColor) ? '#000000' : '#ffffff';
  const rgbStart = hexToRgb(startColor);
  const rgbEnd = hexToRgb(endColor);
  const step = 1 / element.textContent.length;

  preElements.forEach((preElement) => {
    let asciiArt = preElement.textContent; // get ASCII art from pre tag
    let coloredAsciiArt = '';

    // iterate through each character in the ASCII art
    for (let i = 0; i < asciiArt.length; i++) {
      const char = asciiArt[i];
      if (char !== ' ') {
        // if the character is not a space
        let r = Math.round(lerp(rgbStart.r, rgbEnd.r, i * step));
        let g = Math.round(lerp(rgbStart.g, rgbEnd.g, i * step));
        let b = Math.round(lerp(rgbStart.b, rgbEnd.b, i * step));
        let color = rgbToHex(r, g, b);
        // wrap the character in a span with a color based on the hue
        coloredAsciiArt += `<span style="color:${color}">${char}</span>`;
      } else {
        // if the character is a space, just add it to the string
        coloredAsciiArt += char;
      }
    }

    preElement.innerHTML = coloredAsciiArt; // replace the ASCII art with the colored ASCII art
  });
}

// Linear interpolation function
function lerp(v0, v1, t) {
  return v0 + t * (v1 - v0);
}
