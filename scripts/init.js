import { getQueryParam } from './utils.js';

export function init() {
  const bodyElement = document.body;
  const preferredMode = localStorage.getItem('mode');
  const queryMode = getQueryParam('mode');

  const modeToApply =
    queryMode && queryMode.includes('dark')
      ? 'dark-mode'
      : queryMode && queryMode.includes('light')
      ? 'light-mode'
      : preferredMode;

  if (modeToApply) {
    bodyElement.classList.add(modeToApply);
  }
}
