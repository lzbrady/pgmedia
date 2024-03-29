export const colors = {
  primary: '#89BEA3',
  primaryDark: '#48635A',
  // accent: '#8787AB',
  accent: '#5d4266',
  accentDark: '#2A0052',

  light: '#f0f5ff',
  dark: '#242424',

  alpha: {
    primary: 'rgba(237, 242, 244, x)',
    primaryDark: 'rgba(43, 45, 66, x)',
    primaryLight: 'rgba(237, 242, 244, x)',
    accent: 'rgba(93, 66, 102, x)',
    accentDark: 'rgba(217, 4, 41, x)',
  },
};

export const shadows = {
  primary: `
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  `,
  large: `
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  `,
  small: `
    box-shadow: 0px 1px 8px 0px ${colors.alpha.accent.replace('x', 0.2)};
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
