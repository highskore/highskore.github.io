import { getQueryParam } from './utils.js';

export function init() {
  const root = document.documentElement;

  const queryFont = getQueryParam('font');
  const queryMainColor = getQueryParam('main') ? decodeURIComponent(getQueryParam('main')) : null;
  const queryAccentColor = getQueryParam('accent') ? decodeURIComponent(getQueryParam('accent')) : null;

  let defaultFont = 'smisome1';
  let defaultMainColor = '#faf8f8';
  let defaultAccentColor = '#191919';

  let fontToApply = queryFont || localStorage.getItem('font') || defaultFont;
  let mainColorToApply = queryMainColor || localStorage.getItem('mainColor') || defaultMainColor;
  let accentColorToApply = queryAccentColor || localStorage.getItem('accentColor') || defaultAccentColor;

  // If there is a font in the query or local storage, use it
  if (fontToApply) {
    localStorage.setItem('font', fontToApply);
  }

  // If there are colors in the query or local storage, use them
  if (mainColorToApply) {
    root.style.setProperty('--main-color', mainColorToApply);
    localStorage.setItem('mainColor', mainColorToApply);
  }

  if (accentColorToApply) {
    root.style.setProperty('--accent-color', accentColorToApply);
    localStorage.setItem('accentColor', accentColorToApply);
  }
}
