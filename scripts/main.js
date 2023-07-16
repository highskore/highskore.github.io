import { init } from './init.js';
import { regenerateTitle } from './render.js';
import {
  generateDistinctRandomColor,
  generateRandomColor,
  getComplementaryColor,
  applyRandomColorToEachCharacter,
} from './colors.js';

// defaults

let currentFont = localStorage.getItem('font') || 'smisome1';
let isMobile = window.matchMedia('(max-width: 600px)').matches;

window.addEventListener('DOMContentLoaded', () => {
  init();

  // elements

  const root = document.documentElement;
  const toggleModeButton = document.getElementById('toggleMode');
  const regenerateButton = document.getElementById('restartButton');
  const shareButton = document.getElementById('shareButton');
  const defaultButton = document.getElementById('defaultButton');
  const titleElement = document.querySelector('.title');
  const screenElement = document.querySelector('.container');

  /* listeners */

  document.addEventListener('keydown', async (event) => {
    if (event.code === 'Space') {
      currentFont = await restartAnimation(screenElement, titleElement, isMobile, currentFont);
    }
  });

  // restart

  regenerateButton.addEventListener('click', async () => {
    currentFont = await restartAnimation(screenElement, titleElement, isMobile, currentFont);
  });

  // default

  defaultButton.addEventListener('click', async () => {
    let defaultFont = 'smisome1';
    let defaultMainColor = '#faf8f8';
    let defaultAccentColor = '#191919';
    localStorage.setItem('font', 'smisome1');
    localStorage.setItem('mainColor', '#faf8f8');
    localStorage.setItem('accentColor', '#191919');
    root.style.setProperty('--main-color', '#faf8f8');
    root.style.setProperty('--accent-color', '#191919');
    await regenerateTitle(titleElement, isMobile, true, defaultFont);
  });

  // share

  shareButton.addEventListener('click', () => {
    const mainColor = getComputedStyle(root).getPropertyValue('--main-color').trim();
    const accentColor = getComputedStyle(root).getPropertyValue('--accent-color').trim();
    const toast = document.getElementById('toast');
    toast.style.display = 'block';

    setTimeout(function () {
      toast.style.display = 'none';
    }, 2000);

    const shareURL = `${window.location.origin}?font=${currentFont}&main=${encodeURIComponent(
      mainColor
    )}&accent=${encodeURIComponent(accentColor)}`;

    const tempInput = document.createElement('input');
    tempInput.value = shareURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    console.log('URL copied to clipboard:', shareURL);
  });

  // mode

  toggleModeButton.addEventListener('click', () => {
    // Complement colors when mode changes
    let mainColor = getComputedStyle(root).getPropertyValue('--main-color').trim();
    let accentColor = getComputedStyle(root).getPropertyValue('--accent-color').trim();

    let complementMainColor = getComplementaryColor(mainColor);
    let complementAccentColor = getComplementaryColor(accentColor);

    // Assign the complementary colors to the original CSS variables
    root.style.setProperty('--main-color', complementMainColor);
    root.style.setProperty('--accent-color', complementAccentColor);

    // Store complementary colors in local storage
    localStorage.setItem('mainColor', complementMainColor);
    localStorage.setItem('accentColor', complementAccentColor);
  });

  regenerateTitle(titleElement, isMobile, true, currentFont);
});

async function restartAnimation(screenElement, titleElement, isMobile, currentFont) {
  const newFont = await regenerateTitle(titleElement, isMobile, false, currentFont);

  // Generate two distinct random colors
  let randomColor1 = generateRandomColor();
  let randomColor2 = generateDistinctRandomColor(randomColor1); // Generates a color distinct from randomColor1

  // Apply the random colors as CSS variables
  const root = document.documentElement;
  root.style.setProperty('--main-color', randomColor1);
  root.style.setProperty('--accent-color', randomColor2);

  // Store random colors and font in local storage
  localStorage.setItem('mainColor', randomColor1);
  localStorage.setItem('accentColor', randomColor2);
  localStorage.setItem('font', newFont);

  if (Math.floor(Math.random() * 69) === 1) {
    applyRandomColorToEachCharacter(titleElement);
  }

  return newFont;
}
