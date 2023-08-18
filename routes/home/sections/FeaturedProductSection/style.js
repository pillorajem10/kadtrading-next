const styles = (theme) => ({
  section: {
    padding: '70px 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    [theme.breakpoints.only('xs')]: {
      padding: '25px 22px',
    },
  },
  headerContainer: {
    paddingBottom: 72,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 27,
    },
  },
  header: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 19.9,
      lineHeight: 'normal',
    },
  },
  viewAllButton: {
    width: 360,
    height: 48,
    fontSize: 14.7,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: 'none',
    marginTop: 65,
    textTransform: 'uppercase',
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      marginTop: 40,
      width: 240,
      fontSize: 14,
      lineHeight: 1.14,
    },
  },
});

export default styles;
