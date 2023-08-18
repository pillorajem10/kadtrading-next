const styles = (theme) => ({
  logout: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 170,
  },
  sleepWizzo: {
    height: 176,
    marginBottom: 43,

    [theme.breakpoints.only('xs')]: {
      height: 159,
      marginBottom: 39,
    },
  },
  headerOne: {
    fontSize: 21,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 3,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 0,
    },
  },
  headerTwo: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 70,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 62,
    },
  },
  backHomeButton: {
    width: 115,
    height: 50,
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      width: 103,
      height: 45,
    },
  },
});

export default styles;
