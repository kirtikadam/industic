import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#333'
    },
    background: {
      default: '#fff'
    },
    primary: {
      light: '#52c7b8',
      main: '#ff7607',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f5f5f5',
      dark: '#c2c2c2',
      contrastText: '#333333',
    },
    info: {
      light: '#6ca9ea',
      main: '#337ab7',
      dark: '#004e87',
      contrastText: '#ffffff',
    },
    grey: {
      600: '#847770'
    }
  },
});

export default theme