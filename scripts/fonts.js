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
  'weird',
  '3-D',
  '3D Diagonal',
  '3D-ASCII',
  '3d',
  '3x5',
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
  'swan',
  'sweet',
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
  'smisome1',
  '3-D',
  '3D-ASCII',
  '3d',
  '3x5',
  '4Max',
  '5 Line Oblique',
  '5lineoblique',
  'AMC 3 Line',
  'AMC 3 Liv1',
  'AMC Neko',
  'AMC Razor',
  'AMC Razor2',
  'AMC Slash',
  'AMC Slider',
  'AMC Thin',
  'AMC Tubes',
  'starstrips',
  'starwars',
  'stellar',
  'stforek',
  'stop',
  'straight',
  'sub-zero',
  'swampland',
  'swan',
  'THIS',
  'tanja',
  'tengwar',
  'term',
  'thick',
  'thin',
  'thorned',
  'threepoint',
  'ticks',
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
