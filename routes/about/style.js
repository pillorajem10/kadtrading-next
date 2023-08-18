const styles = (theme) => ({
  about: {
    padding: '40px 0 100px',
    position: 'relative',
    overflow: 'hidden',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 0 100px',
    },
  },

  aboutImage: {
    maxWidth: '50%',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      maxWidth: '100%',
    }
  },

  header: {
    fontSize: 'calc(.7rem + 1vw)',
    letterSpacing: -0.5,
    color: '#444',
    padding: '45px 0 0px',
    fontFamily: 'Bell MT !important',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '30px 0 0px',
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: 0.29
    },
  },

  headerLine: {
    width: 68,
    height: 4,
    backgroundImage: 'linear-gradient(to right, #dfad96, #d09a81, #c1876c, #b27558, #a36345)',
    marginBottom: '2rem',
    [theme.breakpoints.only('xs')]: {
      width: 120,
      height: 2,
    }
  },

  cardHeaderLine: {
    width: '35%',
    height: 4,
    backgroundImage: 'linear-gradient(to right, #dfad96, #d09a81, #c1876c, #b27558, #a36345)',
    marginBottom: '2rem',
    [theme.breakpoints.only('xs')]: {
      height: 2,
    }
  },

  normalText: {
    fontSize: 16,
    color: '#9a9a9a',
    marginBottom: 50,
    textAlign: 'justify',

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.25,
      marginBottom: 84,
    },
  },

  subContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 60,
    marginBottom: 60,

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  /*
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  secondHeader: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 0.31,
    color: 'rgba(0, 0, 0, 0.87)',
    width: 500,
    marginBottom: 23,

    [theme.breakpoints.only('xs')]: {
      fontSize: 23.9,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      width: '80%',
      marginBottom: 12,
    },
  },
  secondHeaderBold: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 0.31,
    color: 'rgba(0, 0, 0, 0.87)',
    width: 543,
    padding: '80px 0',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '84px 0 68px',
    },
  },
  aboutBg: {
    width: '100%',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '78px',

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '114px',
    },
  },
  title: {
    fontSize: 21,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 29,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 14,
    },
  },
  value: {
    fontSize: 18,
    lineHeight: 1.94,
    color: '#000000',
    marginBottom: 53,
    width: '90%',

    [theme.breakpoints.only('xs')]: {
      marginBottom: 39,
      width: '100%',
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  gridImage: {
    height: 210,

    [theme.breakpoints.only('xs')]: {
      margin: '0 auto',
    },
  },
  mascot: {
    position: 'absolute',
    right: 0,
    top: 330,
    height: 431,
    zIndex: -1,

    [theme.breakpoints.only('md')]: {
      top: 250,
    },

    [theme.breakpoints.only('sm')]: {
      top: 200,
    },

    [theme.breakpoints.only('xs')]: {
      height: 178,
      right: -15,
      top: 190,
    },
  },
  patternBottom: {
    position: 'absolute',
    right: -520,
    bottom: -350,
    transform: 'rotate(20deg)',
    zIndex: -1,

    [theme.breakpoints.only('md')]: {
      right: -580,
      bottom: -420,
    },

    [theme.breakpoints.only('sm')]: {
      right: -580,
      bottom: -420,
    },
  },
  */
});

export default styles;
