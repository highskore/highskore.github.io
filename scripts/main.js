let isFirstLoad;

window.addEventListener('DOMContentLoaded', () => {
  let isFirstLoad = true;
  main();
});

const main = () => {
  /*//////////////////////////////////////////////////////////////
                                 FONTS
//////////////////////////////////////////////////////////////*/

  const fonts = [
    '3-d',
    '3x5',
    '5lineoblique',
    'Broadway',
    'Whimsy',
    'alligator',
    'alligator2',
    'acrobatic',
    'alphabet',
    'avatar',
    'basic',
    'bell',
    'big',
    'bigchief',
    'block',
    'bubble',
    'bulbhead',
    'caligraphy',
    'catwalk',
    'chunky',
    'coinstak',
    'colossal',
    'contessa',
    'contrast',
    'cosmic',
    'cosmike',
    'cricket',
    'cyberlarge',
    'cybermedium',
    'cybersmall',
    'diamond',
    'digital',
    'doh',
    'doom',
    'dotmatrix',
    'drpepper',
    'eftichess',
    'eftifont',
    'eftipiti',
    'eftirobot',
    'eftiwall',
    'eftiwater',
    'eftitalic',
    'epic',
    'fender',
    'fourtops',
    'fuzzy',
    'goofy',
    'gothic',
    'graffiti',
    'invita',
    'isometric1',
    'isometric2',
    'isometric3',
    'isometric4',
    'italic',
    'ivrit',
    'jazmine',
    'jerusalem',
    'katakana',
    'kban',
    'l4me',
    'larry3d',
    'lcd',
    'lean',
    'letters',
    'linux',
    'lockergnome',
    'madrid',
    'marquee',
    'mike',
    'mini',
    'mirror',
    'mnemonic',
    'morse',
    'nancyj-fancy',
    'nancyj-underlined',
    'nancyj',
    'nipples',
    'ntgreek',
    'nvscript',
    'o8',
    'ogre',
    'pawp',
    'peaks',
    'pebbles',
    'puffy',
    'pyramid',
    'relief',
    'relief2',
    'rev',
    'roman',
    'rot13',
    'rounded',
    'rowancap',
    'rozzo',
    'sblood',
    'script',
    'serifcap',
    'shadow',
    'short',
    'slant',
    'slide',
    'slscript',
    'small',
    'smisome1',
    'smkeyboard',
    'smscript',
    'smshadow',
    'smslant',
    'smtengwar',
    'speed',
    'stampatello',
    'standard',
    'starwars',
    'stellar',
    'stop',
    'straight',
    'tanja',
    'tengwar',
    'term',
    'thick',
    'thin',
    'threepoint',
    'ticks',
    'ticksslant',
    'tinker-toy',
    'tombstone',
    'trek',
    'tsalagi',
    'twopoint',
    'univers',
    'usaflag',
    'wavy',
    'weird',
  ];

  const mobile = [
    'bulbhead',
    'starwars',
    'alligator2',
    '3-d',
    'bigchief',
    'tanja',
    'nancyj-fancy',
    'cosmic',
    'slant',
    'relief2',
    'nancyj',
    'basic',
    'usaflag',
    'jazmine',
    'avatar',
    'fender',
    'contrast',
    'slide',
    'smkeyboard',
    'diamond',
    'pyramid',
    'thick',
    'stellar',
    'nancyj-underlined',
    'graffiti',
    'coinstak',
    'shadow',
    'epic',
    'speed',
    'rowancap',
    'trek',
    'wavy',
    'smisome1',
  ];

  /*//////////////////////////////////////////////////////////////
                                 CONST
//////////////////////////////////////////////////////////////*/

  const titleElement = document.querySelector('.title');

  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  /*//////////////////////////////////////////////////////////////
                                 VARS
//////////////////////////////////////////////////////////////*/

  let currentFont = 'smisome1';

  /*//////////////////////////////////////////////////////////////
                                 FUNCTIONS
//////////////////////////////////////////////////////////////*/

  const getQueryParam = (name) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name);
  };

  const getRandomFont = (isMobile) => {
    let font = getQueryParam('font');

    if (font && (isMobile ? mobile.includes(font) : fonts.includes(font))) {
      return font;
    }

    if (isFirstLoad) {
      isFirstLoad = false;
      return currentFont;
    } else {
      const randomIndex = Math.floor(Math.random() * (isMobile ? mobile.length : fonts.length));
      return isMobile ? mobile[randomIndex] : fonts[randomIndex];
    }
  };

  const renderTitle = (font, text) => {
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

  const regenerateTitle = async () => {
    const text = 'highskore';
    currentFont = getRandomFont(isMobile);
    // Clear the query parameters from the URL
    history.replaceState(null, null, window.location.pathname);
    const font = currentFont;
    console.log('Hey! The title font is: ' + font);
    titleElement.innerHTML = ''; // Clear the title element

    if (isMobile) {
      const chunks = text.match(/.{1,3}/g); // Split text into chunks of 3 characters

      // Map each chunk to a promise returned by renderTitle
      const renderPromises = chunks.map((chunk) => {
        const titleElementCopy = titleElement.cloneNode();
        return renderTitle(font, chunk, titleElementCopy);
      });

      // Wait for all promises to resolve before continuing
      await Promise.all(renderPromises);
    } else {
      const titleElementCopy = titleElement.cloneNode();
      await renderTitle(font, text, titleElementCopy);
    }

    const browserInfoElement = document.getElementById('browserInfo');
    browserInfoElement.textContent = getBrowserInfo();

    const datetimeInfoElement = document.getElementById('datetimeInfo');
    datetimeInfoElement.textContent = getCurrentDateTime();
  };

  // Helper function to get the condensed browser information
  const getBrowserInfo = () => {
    const browser = navigator.userAgent;
    const condensedBrowser = browser; // Extracting the first two words
    return condensedBrowser;
  };

  // Helper function to get the condensed current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const condensedDateTime = now.toLocaleString('en-US', options);
    return condensedDateTime;
  };

  /*//////////////////////////////////////////////////////////////
                            LISTENERS
//////////////////////////////////////////////////////////////*/

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      regenerateTitle();
    }
  });

  // BUTTONS

  try {
    // LIGHT AND DARK
    const toggleModeButton = document.getElementById('toggleMode');
    const bodyElement = document.body;

    const preferredMode = localStorage.getItem('mode');
    const queryMode = getQueryParam('mode');

    // Apply the query mode if it exists, otherwise apply the preferred mode from local storage
    const modeToApply =
      queryMode && queryMode.includes('dark')
        ? 'dark-mode'
        : queryMode && queryMode.includes('light')
        ? 'light-mode'
        : preferredMode;

    if (modeToApply) {
      bodyElement.classList.add(modeToApply);
    }

    // Toggle between light and dark mode
    toggleModeButton.addEventListener('click', () => {
      bodyElement.classList.toggle('light-mode');
      const currentMode = bodyElement.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
      localStorage.setItem('mode', currentMode);
    });

    // RESTART

    const regenerateButton = document.getElementById('restart');

    regenerateButton.addEventListener('click', () => {
      regenerateTitle();
    });

    // SHARE

    const shareButton = document.getElementById('shareButton');

    shareButton.addEventListener('click', () => {
      const currentMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      const copiedMessage = document.getElementById('copiedMessage');
      copiedMessage.style.display = 'block';

      setTimeout(function() {
        copiedMessage.style.display = 'none';
      }, 2000)
      
     

      // Create the share URL with font and mode parameters
      const shareURL = `${window.location.origin}?font=${currentFont}&mode=${currentMode}`;

      // Copy the share URL to the clipboard
      const tempInput = document.createElement('input');
      tempInput.value = shareURL;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      console.log('URL copied to clipboard:', shareURL);
    });

    // Render

    regenerateTitle();
  } catch (error) {}
};
