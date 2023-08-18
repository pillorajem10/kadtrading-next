const styles = (theme) => ({
  success: {
    padding: '40px 0',
    position: 'relative',
    overflow: 'hidden',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 22px 140px',
    },
  },
  successImage: {
    padding: '110px 0 36px',
    display: 'flex',
    margin: '0 auto',
    height: 500,
  },
  successText: {
    width: 620,
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.6)',
    margin: '0 auto',
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  goToAccountButton: {
    width: 304,
    height: 48,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
    display: 'flex',
    margin: '75px auto 0',
  },
  patternTop: {
    left: 0,
    position: 'absolute',
    top: 0,
    zIndex: -1,
    width: 400,

    [theme.breakpoints.only('sm')]: {
      left: -100,
    },

    [theme.breakpoints.only('xs')]: {
      width: 300,
      left: -100,
      top: -150,
    },
  },
  patternBottom: {
    bottom: -100,
    position: 'absolute',
    right: 0,
    zIndex: -1,
    width: 480,

    [theme.breakpoints.only('md')]: {
      right: -30,
      bottom: -250,
    },

    [theme.breakpoints.only('sm')]: {
      right: -30,
      bottom: -320,
    },

    [theme.breakpoints.only('xs')]: {
      width: 300,
      right: -30,
      bottom: -200,
    },
  },
});

export default styles;
