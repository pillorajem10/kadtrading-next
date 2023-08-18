const styles = (theme) => ({
  section: {
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 85,
    position: 'relative',

    [theme.breakpoints.down('xs')]: {
      paddingTop: 40,
    },
  },
  headerContainer: {
    display: 'flex',
    marginBottom: 30,

    [theme.breakpoints.down('xs')]: {
      margin: '20px 0 40px',
    },
  },
  comboDealIcon: {
    height: 66,
    width: 49,
    marginRight: 23,
  },
  comboDeal: {
    fontSize: 25.2,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 8,

    [theme.breakpoints.down('xs')]: {
      fontSize: 23.9,
      marginTop: 0,
    },
  },
  comboDealText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#000',

    [theme.breakpoints.down('xs')]: {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      fontWeight: 'normal',
    },
  },
  addToCartStatus: {
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 90,
    left: 0,
  },
});

export default styles;
