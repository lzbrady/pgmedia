export const colors = {
  primary: '#89BEA3',
  primaryDark: '#48635A',
  accent: '#8787AB',
  accentDark: '#2A0052',

  light: '#FFF3F0',
  dark: '#000000',

  alpha: {
    primary: 'rgba(237, 242, 244, x)',
    primaryDark: 'rgba(43, 45, 66, x)',
    primaryLight: 'rgba(237, 242, 244, x)',
    accent: 'rgba(239, 35, 60, x)',
    accentDark: 'rgba(217, 4, 41, x)',
  },
};

export const shadows = {
  primary: `
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.56);
  `,

  hover: {
    subtleLight: `
      box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.3);
    `,
    subtleDark: `
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    `,
  },
};

export default { colors, shadows };
