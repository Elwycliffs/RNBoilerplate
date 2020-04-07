export default {
  palette: {
    primary: {
      base: 'gray',
      main: 'lightgray',
      info: 'green',
      error: 'red',
      warning: 'yellow'
    },
    secondary: {
      base: 'gray',
      main: 'lightgray',
      info: 'green',
      error: 'red',
      warning: 'yellow'
    }
  },
  Typography: {
    fontFamily: 'san-serif'
  },
  Layout: {
    pagePadding: 8,
    spacing: (prop) => parseInt(prop) * 8
  }
};
