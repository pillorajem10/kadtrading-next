const styles = (theme) => ({
  board: {
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
  topContainer: {
    padding: '100px 0',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      padding: '64px 0',
    },
  },
  topContainerHeader: {
    fontSize: 50.3,
    fontWeight: 'bold',
    color: '#000',
    width: 690,
    marginBottom: 32,

    [theme.breakpoints.only('xs')]: {
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: 0.31,
      color: '#ff7700',
      marginBottom: 26,
      width: '100%',
    },
  },
  topContainerSubHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 34,

    [theme.breakpoints.only('xs')]: {
      fontSize: 23.9,
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
      marginBottom: 25,
    },
  },
  topContainerValue: {
    fontSize: 18,
    lineHeight: 1.94,
    color: '#000000',
    width: 543,
    marginBottom: 67,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',
      marginBottom: 65,
      width: '100%',
    },
  },
  joinUsButton: {
    width: 204,
    height: 48,
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      width: 167,
      height: 32,
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: '#ffffff',
      display: 'flex',
      margin: '0 auto',
    },
  },
  joinMerchantImage: {
    position: 'absolute',
    right: 0,
    top: 490,
    height: 428,

    [theme.breakpoints.only('md')]: {
      top: 600,
      height: 300,
    },

    [theme.breakpoints.only('sm')]: {
      top: 720,
      height: 250,
    },

    [theme.breakpoints.only('xs')]: {
      position: 'relative',
      top: 0,
      height: 'fit-content',
      display: 'flex',
      margin: '0 auto',
    },
  },
  middleContainer: {
    padding: '100px 0',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      padding: '86px 0 26px',
    },
  },
  bannerPicture: {
    height: 518,
    marginRight: 47,

    [theme.breakpoints.only('md')]: {
      height: 408,
    },

    [theme.breakpoints.only('sm')]: {
      height: 300,
    },

    [theme.breakpoints.only('xs')]: {
      height: 'initial',
      width: '100%',
    },
  },
  middleContainerHeader: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 0.31,
    color: '#000000',
    marginBottom: 21,
  },
  middleContainerValue: {
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: '#000000',
    width: 372,

    [theme.breakpoints.only('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  bottomContainer: {
    padding: '100px 0',

    [theme.breakpoints.only('xs')]: {
      padding: '142px 0 100px',
    },
  },
  bottomContainerHeader: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 0.31,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 21,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 19,
    },
  },
  bottomContainerValue: {
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    width: 597,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',
      width: '100%',
    },
  },
  bottomGridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    paddingTop: 90,

    '& > div': {
      textAlign: 'center',
    },

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      paddingTop: 0,
    },
  },
  supportImage: {
    height: 150,
    marginBottom: 90,

    [theme.breakpoints.only('sm')]: {
      height: 90,
      marginBottom: 70,
    },

    [theme.breakpoints.only('xs')]: {
      height: 100,
      margin: '90px 0 30px',
    },
  },
  jumboLogo: {
    height: 150,
    marginBottom: 90,

    [theme.breakpoints.only('sm')]: {
      height: 90,
      marginBottom: 70,
    },

    [theme.breakpoints.only('xs')]: {
      height: 80,
      margin: '130px 0 45px',
    },
  },
  featureImage: {
    height: 200,
    marginBottom: 40,

    [theme.breakpoints.only('sm')]: {
      height: 140,
      marginBottom: 20,
    },

    [theme.breakpoints.only('xs')]: {
      height: 130,
      margin: '163px 0 20px',
    },
  },
  bottomGridPlaceholder: {
    fontSize: 23.9,
    fontWeight: 'bold',
    color: '#ff7700',
    width: 204,
    margin: '0 auto',

    [theme.breakpoints.only('xs')]: {
      width: 250,
    },
  },
  patternTop: {
    position: 'absolute',
    top: -350,
    right: -475,
    transform: 'rotate(45deg)',
    zIndex: -1,

    [theme.breakpoints.only('xs')]: {
      top: -700,
      right: -600,
      transform: 'rotate(52deg)',
    },
  },
  patternBottom: {
    position: 'absolute',
    left: -400,
    bottom: -500,
    zIndex: -1,

    [theme.breakpoints.only('xs')]: {
      left: -344,
      bottom: 1100,
      height: 616,
    },
  },
});

export default styles;
