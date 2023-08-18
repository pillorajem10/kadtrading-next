const styles = (theme) => ({
  page: {
    padding: '40px 0 70px',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      padding: '0 15px',
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      padding: '0 15px',
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  cartQuantity: {
    padding: '75px 0 35px',

    '& p': {
      fontSize: 16.8,
      fontWeight: 'bold',
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '25px 24px',
    },
  },
  emptyCartText: {
    paddingBottom: 150,

    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
    },
  },
});

export default styles;
