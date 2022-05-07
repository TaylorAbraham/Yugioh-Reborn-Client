import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C1874',
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    h1: {
      fontSize: '2.75rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
