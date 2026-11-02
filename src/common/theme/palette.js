import { grey } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? '#090E17' : '#F4F7FB',
    paper: darkMode ? '#111B2B' : '#FFFFFF',
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || '#3B82F6',
    light: '#60A5FA',
    dark: '#1D4ED8',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || '#22D3EE',
    light: '#67E8F9',
    dark: '#0891B2',
    contrastText: '#07111F',
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#22D3EE',
  },
  alwaysDark: {
    main: '#090E17',
  },
  divider: darkMode ? 'rgba(148, 163, 184, 0.14)' : 'rgba(15, 23, 42, 0.12)',
  text: darkMode
    ? { primary: '#E8EEF8', secondary: '#94A3B8', disabled: '#64748B' }
    : { primary: '#172033', secondary: '#64748B', disabled: '#94A3B8' },
});
