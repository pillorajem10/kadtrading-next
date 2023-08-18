const styles = (theme) => ({
  headerOne: {
    padding: '92px 0 12px',
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  headerTwo: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',

    '& > span': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  activationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 650,
    margin: '0 auto',
    paddingTop: 88,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  wizzoImage: {
    height: 155,
  },
  activationCodeContainer: {
    width: 'calc(100% - 237px)',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  buttonGroup: {
    paddingTop: 88,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '24px',

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '20px',
      paddingTop: 70,
    },
  },
  button: {
    height: 48,
    width: '100%',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  timerText: {
    paddingTop: 12,
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.38)',
  },
});

export default styles;
