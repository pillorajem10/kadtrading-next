const styles = (theme) => ({

  layout: {
    minHeight: 1000,
    paddingBottom: 100,
    overflow: 'hidden',
    position: 'relative',

    [theme.breakpoints.only('md')]: {
      minHeight: 'calc(100vh - 526.5px)',
      paddingBottom: 100,
    },

    [theme.breakpoints.only('sm')]: {
      minHeight: 'calc(100vh - 300px)',
      paddingBottom: 100,
    },

    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 300px)',
      paddingBottom: 50,
    },

  },
  /*
  container: {
    width: '100%',

    margin: '0 auto',
    padding: '47px 0 0',

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

  topPattern: {
    position: 'absolute',
    left: 0,
    top: -250,
    zIndex: -1,
    width: 400,

    [theme.breakpoints.only('xs')]: {
      top: -250,
      left: 0,
      width: 300,
    },
  },
  bottomPattern: {
    bottom: -250,
    position: 'absolute',
    right: 0,
    zIndex: -1,
    width: 400,
  },
  wizzoHi: {
    position: 'absolute',
    bottom: -150,
    left: 0,
    zIndex: -1,

    [theme.breakpoints.only('sm')]: {
      width: 300,
    },
  },
*/
});

export default styles;
