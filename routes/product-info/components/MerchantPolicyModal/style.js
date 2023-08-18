const styles = (theme) => ({
  paper: {
    borderRadius: 15,
    width: 676,

    [theme.breakpoints.only('sm')]: {
      width: 500,
    },

    [theme.breakpoints.only('xs')]: {
      margin: 22,
      width: '100%',
    },
  },
  container: {
    padding: '31px 45px 42px',

    [theme.breakpoints.only('xs')]: {
      padding: '36px 38px',
    },
  },
  header: {
    fontSize: 25.2,
    fontWeight: 'bold',
    lineHeight: 'normal',
    textAlign: 'center',
    marginBottom: 26,

    [theme.breakpoints.only('xs')]: {
      fontSize: 16.8,
      fontWeight: 500,
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: '#000',
      textAlign: 'left',
      marginBottom: 35,
    },
  },
  text: {
    fontSize: 18,
    lineHeight: 1.94,
    height: 330,
    overflow: 'scroll',

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 16.8,
      lineHeight: 1.43,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.87)',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
  },
});

export default styles;
