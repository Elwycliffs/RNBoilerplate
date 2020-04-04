export default {
  palette: {
    primary: {
      main: 'green',
      dark: 'darkgreen',
    },
    secondary: {
      main: 'yellow',
      dark: 'darkyellow',
    },
  },
  Typography: {
    fontFamily: 'san-serify',
  },
  Layout: {
    pagePadding: 8,
    spacing: prop => parseInt(prop) * 8,
  },
};
