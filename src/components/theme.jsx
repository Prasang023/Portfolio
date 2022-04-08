import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily:  [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#07CFF6',
      light: '#194162',
      dark: '#0D2534'
    },
    // secondary: {
    //   main: '#950740',
    //   light: '#C3073F',
    //   dark: '#6F2232',
    // },
    text: {
      main: '#FFFFFF'
    },
    background: {
      main: '#020204',
      light: '#04131E',
    }
  },
});

export default theme;