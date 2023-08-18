const styles = (theme) => ({
  custom404: {
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
    fontSize: 91.4,
    fontWeight: 'bold',
    letterSpacing: -1.5,
    color: '#ffffff',
  },
  headerTwo: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 0.31,
    color: '#ffffff',
    marginBottom: 24,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 9,
    },
  },
  headerThree: {
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
