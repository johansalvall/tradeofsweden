import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#d97706', // amber-600 - construction machinery yellow
      dark: '#92400e', // amber-800 - deep earth
      light: '#fbbf24', // amber-400 - bright equipment yellow
    },
    secondary: {
      main: '#334155', // slate-700 - industrial steel
      dark: '#0f172a', // slate-900 - heavy metal
      light: '#64748b', // slate-500 - light steel
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
  },
  shape: {
    borderRadius: 4, // More angular for industrial feel
  },
});
