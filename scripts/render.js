// RenderTitle.js

import { getRandomFont } from './fonts.js';
import { getBrowserInfo, getCurrentDateTime } from './utils.js';

const renderTitle = (font, text, titleElement) => {
  return new Promise((resolve, reject) => {
    const figletOptions = {
      font: font,
    };

    figlet.text(text, figletOptions, (error, asciiText) => {
      if (error) {
        reject(error);
        return;
      }

      const preElement = document.createElement('pre');
      preElement.textContent = asciiText;
      titleElement.appendChild(preElement);
      resolve();
    });
  });
};

export const regenerateTitle = async (titleElement, isMobile, isFirstLoad, currentFont) => {
  const text = 'highskore';
  currentFont = getRandomFont(isMobile, isFirstLoad, currentFont);
  // Clear the query parameters from the URL
  history.replaceState(null, null, window.location.pathname);
  const font = currentFont;
  console.log('Hey! The title font is: ' + font);
  titleElement.innerHTML = ''; // Clear the title element

  if (isMobile) {
    const chunks = text.match(/.{1,3}/g); // Split text into chunks of 3 characters
    // Iterate over each chunk and wait for renderTitle to finish
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      await renderTitle(font, chunk, titleElement);
    }
  } else {
    await renderTitle(font, text, titleElement);
  }

  const browserInfoElement = document.getElementById('browserInfo');
  browserInfoElement.textContent = getBrowserInfo();

  const datetimeInfoElement = document.getElementById('datetimeInfo');
  datetimeInfoElement.textContent = getCurrentDateTime();
  return font;
};
