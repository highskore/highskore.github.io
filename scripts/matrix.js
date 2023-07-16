window.addEventListener('DOMContentLoaded', () => {
  renderMatrix();
});

// Get the matrix-effect container
const matrixContainer = document.querySelector('.matrix-effect');

try {
  const regenerateButton = document.getElementById('restartButton');

  regenerateButton.addEventListener('click', () => {
    // Generate a random number between 1 and 69
    const randomChance = Math.floor(Math.random() * 69) + 1;
    // Clear any existing letters
    while (matrixContainer.firstChild) {
      matrixContainer.removeChild(matrixContainer.firstChild);
    }

    if (randomChance === 1) {
      localStorage.setItem('matrixActive', true);
      renderMatrix();
    } else if (randomChance !== 1) {
      localStorage.removeItem('matrixActive');
    }
  });
} catch (e) {}

const renderMatrix = () => {
  const matrixActive = localStorage.getItem('matrixActive');
  if (matrixActive === 'true') {
    // Generate the random letters and append them to the container
    const letters = 'HIGHSKOREHIGHSKOREHIGHSKOREHIGHSKORE0123456789';
    const letterCount = Math.floor(window.innerWidth / 3);

    for (let i = 0; i < letterCount; i++) {
      const span = document.createElement('span');
      span.textContent = letters[Math.floor(Math.random() * letters.length)];
      span.style.top = `${Math.random() * 100}%`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.animationDelay = `${Math.random() * 10}s`; // Add random animation delay
      matrixContainer.appendChild(span);
    }
  }
};
