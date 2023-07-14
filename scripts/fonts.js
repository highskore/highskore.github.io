import { getQueryParam } from './utils.js';

export const fonts = [
  '3x5',
  '5lineoblique',
  'Whimsy',
  'alligator',
  'alligator2',
  'acrobatic',
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
  'colossal',
  'contessa',
  'contrast',
  'cosmic',
  'cosmike',
  'cricket',
  'cyberlarge',
  'cybermedium',
  'cybersmall',
  'digital',
  'doom',
  'dotmatrix',
  'drpepper',
  'eftichess',
  'eftifont',
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
  'lean',
  'letters',
  'linux',
  'lockergnome',
  'madrid',
  'marquee',
  'mike',
  'mini',
  'mirror',
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
  'standard',
  'starwars',
  'stellar',
  'stop',
  'straight',
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
  'weird',
  '3-D',
  '3D Diagonal',
  '3D-ASCII',
  '3d',
  '4Max',
  '5 Line Oblique',
  '5lineoblique',
  'starstrips',
  'starwars',
  'stellar',
  'stop',
  'straight',
  'sub-zero',
  'swampland',
  'THIS',
  'tanja',
  'tengwar',
  'term',
  'thick',
  'thin',
  'thorned',
  'threepoint',
  'ticks',
  'tiles',
];

export const mobile = [
  'cosmic',
  'slant',
  'relief2',
  'contrast',
  'smkeyboard',
  'pyramid',
  'stellar',
  'rowancap',
  'trek',
  'smisome1',
  '3d',
  '4Max',
  'sub-zero',
  'swampland',
  'THIS',
];

export const getRandomFont = (isMobile, isFirstLoad, currentFont) => {
  let font = getQueryParam('font');

  if (font && (isMobile ? mobile.includes(font) : fonts.includes(font))) {
    return font;
  }

  if (isFirstLoad) {
    return currentFont;
  } else {
    const randomIndex = Math.floor(Math.random() * (isMobile ? mobile.length : fonts.length));
    return isMobile ? mobile[randomIndex] : fonts[randomIndex];
  }
};
