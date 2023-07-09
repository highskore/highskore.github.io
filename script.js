window.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.querySelector('.title');
  const fonts = [
    '3-d',
    '3x5',
    '5lineoblique',
    'Broadway',
    'Stacey',
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
    'stacey',
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
    'smskeyboard',
    'diamond',
    'pyramid',
    'thick',
    'mike',
    'digital',
    'stellar',
    'nancyj-underlined',
    'graffiti',
    'coinstak',
    'shadow',
    'larry3d',
    'epic',
    'term',
    'morse',
    'speed',
    'l4me',
    'rowancap',
    'trek',
    'wavy',
    'smisome1',
  ];

  let isFirstLoad = true;

  const getRandomFont = (isMobile) => {
    if (isFirstLoad) {
      isFirstLoad = false;
      return 'smisome1';
    } else {
      const randomIndex = Math.floor(Math.random() * (isMobile ? mobile.length : fonts.length));
      return isMobile ? mobile[randomIndex] : fonts[randomIndex];
    }
  };

  const renderTitle = (font, text) => {
    const figletOptions = {
      font: font,
    };

    figlet.text(text, figletOptions, (error, asciiText) => {
      if (error) {
        console.error(error);
        return;
      }

      const preElement = document.createElement('pre');
      preElement.textContent = asciiText;
      titleElement.appendChild(preElement);
    });
  };

  const regenerateTitle = () => {
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    const text = 'highskore';
    const font = getRandomFont(isMobile);
    console.log('Hey dude, the font is: ' + font);
    titleElement.innerHTML = ''; // Clear the title element
    if (isMobile) {
      const chunks = text.match(/.{1,3}/g); // Split text into chunks of 3 characters

      for (const chunk of chunks) {
        const titleElementCopy = titleElement.cloneNode();
        renderTitle(font, chunk, titleElementCopy);
      }
    } else {
      const titleElementCopy = titleElement.cloneNode();
      renderTitle(font, text, titleElementCopy);
    }

    const browserInfoElement = document.getElementById('browserInfo');
    browserInfoElement.textContent = getBrowserInfo();

    const datetimeInfoElement = document.getElementById('datetimeInfo');
    datetimeInfoElement.textContent = getCurrentDateTime();
  };

  // Initial rendering
  regenerateTitle();

  const regenerateButton = document.getElementById('restart');

  regenerateButton.addEventListener('click', () => {
    regenerateTitle();
  });
});

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
