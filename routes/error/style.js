const styles = (theme) => ({
  error: {
    display: 'flex',
    alignItems: 'cente',
    justifyContent: 'center',
    backgroundColor: '#000',
    minHeight: '100vh',

    [theme.breakpoints.only('xs')]: {
      padding: 55,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  errorTextContainer: {
    marginRight: 60,

    [theme.breakpoints.only('xs')]: {
      marginRight: 0,
    },
  },
  headerOne: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 0.31,
    color: '#ffffff',
    marginBottom: 15,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 9,
    },
  },
  headerTwo: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: '#ffffff',
    width: 280,
  },
  wizzo: {
    height: 263,
    marginTop: 30,

    [theme.breakpoints.only('xs')]: {
      height: 178,
      marginTop: 56,
      textAlign: 'right',
    },
  },
});

export default styles;
