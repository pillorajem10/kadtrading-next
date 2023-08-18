const styles = (theme) => ({
  checkoutCancel: {
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

    '& a': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#000',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#fc2929',
    marginBottom: 20,
  },
  cancelText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  backToShoppingCartBtn: {
    width: 387,
    height: 43,
    borderRadius: 21.5,
    backgroundColor: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    marginTop: 39,

    '&:hover': {
      color: '#000',
      border: '1px solid #000',
      backgroundColor: '#fff',
      boxShadow: 'none',
    },    

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  wizzoCheckoutCancel: {
    position: 'absolute',
    right: -60,
    bottom: 0,
    height: 500,
    zIndex: -1,

    [theme.breakpoints.only('md')]: {
      height: 300,
    },

    [theme.breakpoints.only('sm')]: {
      height: 200,
    },

    [theme.breakpoints.only('xs')]: {
      position: 'relative',
      marginTop: 89,
      height: 282,
    },
  },
});

export default styles;
