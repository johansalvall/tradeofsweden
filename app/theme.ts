import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9',
      dark: '#0284c7',
      light: '#38bdf8',
    },
    secondary: {
      main: '#f97316',
      dark: '#ea580c',
      light: '#fb923c',
    },
  },
  typography: {
    fontFamily: 'inherit',
  },
  shape: {
    borderRadius: 8,
  },
});
