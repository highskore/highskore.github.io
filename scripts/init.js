import { getQueryParam } from './utils.js';

export function init() {
  const root = document.documentElement;

  const queryFont = getQueryParam('font');
  const queryMainColor = getQueryParam('main');
  const queryAccentColor = getQueryParam('accent');

  if (queryFont) {
    localStorage.setItem('font', queryFont);
  }

  if (queryMainColor && queryAccentColor) {
    root.style.setProperty('--main-color', queryMainColor);
    root.style.setProperty('--accent-color', queryAccentColor);
    localStorage.setItem('mainColor', queryMainColor);
    localStorage.setItem('accentColor', queryAccentColor);
  } else {
    const storedMainColor = localStorage.getItem('mainColor');
    const storedAccentColor = localStorage.getItem('accentColor');

    if (storedMainColor && storedAccentColor) {
      root.style.setProperty('--main-color', storedMainColor);
      root.style.setProperty('--accent-color', storedAccentColor);
    }
  }
}
