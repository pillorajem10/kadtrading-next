const styles = (theme) => ({
  welcome: {
    paddingTop: 77,

    [theme.breakpoints.only('xs')]: {
      paddingTop: 140,
    },
  },
  headerOne: {
    fontSize: 21,
    fontWight: 500,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 3,
  },
  headerTwo: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 36,
  },
  welcomeWizzo: {
    height: 280,
    display: 'flex',
    margin: '0 auto',

    [theme.breakpoints.only('xs')]: {
      height: 230,
    },
  },
});

export default styles;
