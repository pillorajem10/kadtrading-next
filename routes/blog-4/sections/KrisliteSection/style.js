const styles = (theme) => ({
  section: {
    paddingBottom: 75,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 60,
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 35,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 25,
    },
  },
  headerInnerContainer: {
    display: 'flex',
  },
  headerNumber: {
    width: 55,
    fontSize: 35.6,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('sm')]: {
      width: 40,
      fontSize: 30,
    },

    [theme.breakpoints.only('xs')]: {
      width: 36,
      fontSize: 25.2,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  header: {
    fontSize: 35.6,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    '& span': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 30,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
    },
  },
  krisliteLogo: {
    height: 89,
  },
  description: {
    width: 530,
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 35,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginBottom: 25,
    },
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 42,

    [theme.breakpoints.only('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
    },

    [theme.breakpoints.only('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
    },

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      marginBottom: 0,
    },
  },
  tableLampContainer: {
    position: 'relative',
  },
  tableLamp: {
    height: 423,

    [theme.breakpoints.only('md')]: {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: 'auto',
      marginBottom: 25,
    },
  },
  productDescContainer: {
    position: 'absolute',
    top: 24,
    left: 20,

    [theme.breakpoints.only('xs')]: {
      top: 17,
    },
  },
  tableLampName: {
    fontSize: 28,
    lineHeight: 1.07,
    color: '#000000',
    marginBottom: 22,

    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      lineHeight: 1.25,
    },
  },
  tableLampDesc: {
    width: 245,
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
    },

    [theme.breakpoints.only('sm')]: {
      width: 250,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginBottom: 25,
    },
  },
  pendantLampContainer: {
    position: 'relative',
  },
  pendantLamp: {
    height: 423,

    [theme.breakpoints.only('md')]: {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: 'auto',
      marginBottom: 25,
    },
  },
  pendantLampName: {
    fontSize: 28,
    lineHeight: 1.07,
    color: '#d8d8d8',
    marginBottom: 22,

    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      lineHeight: 1.25,
    },
  },
  pendantLampDesc: {
    width: 245,
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(255, 255, 255, 0.87)',

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
    },

    [theme.breakpoints.only('sm')]: {
      width: 250,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      color: 'rgba(0, 0, 0, 0.87)',
      marginBottom: 25,
    },
  },
  checkoutHere: {
    fontSize: 16.8,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',

    '& a': {
      textDecoration: 'underline !important',
      color: '#000',
    },
  },
});

export default styles;
