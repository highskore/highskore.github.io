import { init } from './init.js';
import { regenerateTitle } from './render.js';
import { getCurrentMode } from './mode.js';

// defaults

let currentFont = 'smisome1';
let isMobile = window.matchMedia('(max-width: 600px)').matches;

window.addEventListener('DOMContentLoaded', () => {
  init();

  // elements

  const bodyElement = document.body;
  const toggleModeButton = document.getElementById('toggleMode');
  const regenerateButton = document.getElementById('restartButton');
  const shareButton = document.getElementById('shareButton');
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

  // share

  shareButton.addEventListener('click', () => {
    const currentMode = getCurrentMode();
    const toast = document.getElementById('toast');
    toast.style.display = 'block';

    setTimeout(function () {
      toast.style.display = 'none';
    }, 2000);

    const shareURL = `${window.location.origin}?font=${currentFont}&mode=${currentMode}`;

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
    bodyElement.classList.toggle('light-mode');
    const currentMode = bodyElement.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('mode', currentMode);
  });

  regenerateTitle(titleElement, isMobile, true, currentFont);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function restartAnimation(screenElement, titleElement, isMobile, currentFont) {
  const newFont = await regenerateTitle(titleElement, isMobile, false, currentFont);

  return newFont;
}
