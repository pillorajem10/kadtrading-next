const styles = (theme) => ({
  section: {
    padding: '120px 0 70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      padding: '30px 0 25px',
    },
  },
  headerContainer: {
    textAlign: 'center',
    //paddingBottom: 83,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 25,
    },
  },

  headerLine: {
    width: 68,
    height: 4,
    backgroundImage: 'linear-gradient(to right, #dfad96, #d09a81, #c1876c, #b27558, #a36345)',
    margin: '5px auto',
  },
  headerLine1: {
    width: 230,
    height: 4,
    backgroundImage: 'linear-gradient(to right, #dfad96, #d09a81, #c1876c, #b27558, #a36345)',
    margin: '5px auto',
  },
  header: {
    fontSize: 'calc(1.375rem + 1.5vw)',
    letterSpacing: 0.25,
    color: '#444',
    fontFamily: 'Bell MT !important',
    fontWeight: 500,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14.9,
      fontWeight: 500,
      lineHeight: 'normal',
    },
  },
  header1: {
    fontSize: 'calc(.8rem + 1vw)',
    letterSpacing: 0.25,
    color: '#444',
    fontFamily: 'Bell MT !important',
    fontWeight: 500,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14.9,
      fontWeight: 500,
      lineHeight: 'normal',
    },
  },
  categoryList: {
    display: 'flex',
    width: 1250,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: "5rem",

    [theme.breakpoints.only('md')]: {
      width: 960,
    },

    [theme.breakpoints.only('sm')]: {
      width: 720,
    },

    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      overflowY: 'scroll',
      width: '100%',
      position: 'relative',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '10px 0',
    },
  },
  categoryList1: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 80,
    marginBottom: 80,

    [theme.breakpoints.only('md')]: {
      // width: 960,
    },

    [theme.breakpoints.only('sm')]: {
      // width: 720,
    },

    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      overflowY: 'scroll',
      position: 'relative',
      flexWrap: 'wrap',
      justifyContent: 'initial',
      padding: '10px 0',
    },
  },
  categoryOverlay: {
    display: 'none',

    [theme.breakpoints.only('xs')]: {
      display: 'block',
      position: 'absolute',
      top: 150,
      right: 0,
      backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
      width: '10%',
      height: 220,
    },
  },
  categoryItem: {
    margin: '0 10px 30px',
    cursor: 'pointer',
    height: 300,
    width: 225,
    position: 'relative',

    [theme.breakpoints.only('md')]: {
      height: 250,
      width: 168,
    },

    [theme.breakpoints.only('sm')]: {
      height: 180,
      width: 120,
    },

    [theme.breakpoints.only('xs')]: {
      margin: '0 auto',
      marginLeft: 22,
      height: 240,
      width: 180,
    },
  },
  categoryImage: {
    maxHeight: 300,
    maxWidth: 250,

    [theme.breakpoints.only('md')]: {
      height: '100%',
      width: '100%',
    },

    [theme.breakpoints.only('sm')]: {
      height: '100%',
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      height: '100%',
      width: '100%',
    },
  },
  categoryImage1: {
    maxHeight: 700,
    maxWidth: 500,

    [theme.breakpoints.only('md')]: {
      height: '100%',
      width: '100%',
    },

    [theme.breakpoints.only('sm')]: {
      height: '100%',
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      height: '100%',
      width: '100%',
    },
  },
  categoryName: {
    fontSize: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#444',

    /*
    [theme.breakpoints.only('md')]: {
      left: 9,
      fontSize: 18,
    },

    [theme.breakpoints.only('sm')]: {
      left: 9,
      fontSize: 16,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 12.6,
      fontWeight: 'bold',
      lineHeight: 1.27,
      letterSpacing: 0.4,
      left: 7,
      bottom: 13,
    },
    */
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
  },
  viewAllButton: {
    background: 'black',
    width: 360,
    height: 48,
    fontSize: 14.7,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    // color: 'rgba(0, 0, 0, 0.87)',
    color: '#8b54FF',
    boxShadow: 'none',
    marginTop: 70,
    textTransform: 'uppercase',

    [theme.breakpoints.only('xs')]: {
      marginTop: 35,
      width: 240,
      fontSize: 14,
      lineHeight: 1.14,
    },
  },
});

export default styles;
