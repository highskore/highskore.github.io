export function getCurrentMode() {
  const bodyElement = document.body;
  const preferredMode = localStorage.getItem('mode');
  return preferredMode || (bodyElement.classList.contains('light-mode') ? 'light-mode' : 'dark-mode');
}
