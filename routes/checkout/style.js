const styles = (theme) => ({
  page: {
    padding: '40px 0 100px',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 0 50px',
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
  innerWrapper: {
    [theme.breakpoints.only('xs')]: {
      padding: '0 24px',
    },
  },
  checkoutHeader: {
    fontSize: 16.8,
    fontWeight: 'bold',
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '30px 0',

    [theme.breakpoints.only('xs')]: {
      margin: '40px 0 44px',
    },
  },
  moses: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },    
  },
  egypt: {
    flex: 1,
    paddingRight: 20,

    [theme.breakpoints.only('sm')]: {
      paddingRight: 0,
      width: '100%',
      marginBottom: 10,
    },
    [theme.breakpoints.only('xs')]: {
      paddingRight: 0,
      width: '100%',
      marginBottom: 10,
    },    
  },
  horeb: {
    flex: 1,
    paddingLeft: 20,

    [theme.breakpoints.only('sm')]: {
      paddingLeft: 0,
      width: '100%',
      marginBottom: 10,
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: 0,
      width: '100%',
      marginBottom: 10,
    },    
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 60,
  },
  checkbox: {
    width: 24,
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
