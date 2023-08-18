import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 721,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontSize: 14,
    useNextVariants: true,
  },
  palette: {
    common: { black: 'rgba(0, 0, 0, 1)', white: 'rgb(255, 255, 255)' },
    background: {
      paper: 'rgba(247, 247, 247, 1)',
      default: 'rgba(255, 255, 255, 1)',
    },
    primary: {
      light: '#ffa733',
      main: '#000',
      dark: '#fff', // '#b26500',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 1)',
      dark: 'rgba(0, 0, 0, 0.38)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: 'rgb(255, 255, 255)',
    },
    text: {
      high: 'rgba(0, 0, 0, 0.87)',
      medium: '#8a8a8a',
      light: 'rgba(255, 255, 255, 1)',
      disabled: 'rgba(0, 0, 0, 0.35)',
      hint: 'rgba(0, 0, 0, 0.08)',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {},
    },
    MuiButton: {
      root: {
        borderRadius: '12px !important',
        fontSize: 15,
        fontWeight: 700,
        height: 48,
        textTransform: 'initial',
        boxShadow: 'none !important',
      },
      primary: {
        light: '#ffa733',
        main: '#000',
        dark: '#fff', // '#b26500',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      }
      // '.MuiButton-contained.Mui-disabled': {
      //   textTransform: 'initial',
      // },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginBottom: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
      },
    },
    MuiIconButton: {
      label: {
        flexDirection: 'column',
      },
    },
    MuiSlider: {
      root: {
        color: 'rgba(0, 0, 0, 1)',
        height: 2,
        padding: '15px 0',
      },
      markLabel: {
        top: 32,
      },
      thumb: {
        backgroundColor: '#000',
        borderRadius: 5,
        height: 19,
        width: 5,
        marginTop: -8,
        marginLeft: -4,
        '&:focus,&:hover,&$active': {},
      },
      track: {
        height: 2,
      },
      rail: {
        height: 2,
        opacity: 0.5,
      },
      valueLabel: {
        fontSize: 14,
        left: -15,
        top: -22,
        '& *': {
          background: 'transparent',
          color: 'rgba(0, 0, 0, 0.6)',
        },
      },
    },
  },
});

export default theme;
