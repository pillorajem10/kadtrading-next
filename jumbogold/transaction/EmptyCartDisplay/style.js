const styles = (theme) => ({
  emptyCartDisplay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,

    [theme.breakpoints.only('xs')]: {
      paddingTop: 10,
    },
  },
  emptyCartImage: {
    width: 129,
    height: 123,
    objectFit: 'contain',

    [theme.breakpoints.only('xs')]: {
      width: 134,
      height: 127,
    },
  },
  emptyCartText: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 15,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      marginTop: 25,
    },
  },
});

export default styles;
