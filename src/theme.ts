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
});

export default theme;
