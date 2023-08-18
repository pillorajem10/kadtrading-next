const styles = (theme) => ({
  checkoutSuccess: {
    minHeight: 750,
    padding: '40px 0 50px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('md')]: {
      minHeight: 'calc(100vh - 526.5px)',
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      minHeight: 'calc(100vh - 300px)',
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 300px)',
      padding: '89px 22px 0',
      flexDirection: 'column',
    },
  },
  container: {
    width: 387,
    margin: '0 auto',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#000000',
    marginBottom: 20,
  },
  successText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  emailLink: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000',
  },
  viewYourOrderBtn: {
    width: 387,
    height: 43,
    borderRadius: 21.5,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    margin: '39px 0 16px',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },

    '&:hover': {
      border: '1px solid black',
      background: '#fff',
      color: '#000',
    },
  },
  continueShopping: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',

    '& p': {
      fontSize: 12.6,
      lineHeight: 1.27,
      letterSpacing: 0.4,
    },
  },
  wizzoSuccess: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 450,
    zIndex: -1,

    [theme.breakpoints.only('md')]: {
      height: 400,
    },

    [theme.breakpoints.only('sm')]: {
      height: 260,
    },

    [theme.breakpoints.only('xs')]: {
      position: 'relative',
      height: 314,
      marginTop: 22,
    },
  },
});

export default styles;
