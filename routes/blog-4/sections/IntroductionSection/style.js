const styles = (theme) => ({
  subHeader: {
    marginTop: 47,
    fontSize: 35.6,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 21,
      marginTop: 25,
    },
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    padding: '50px 0 61px',

    '& > p': {
      fontSize: 16.8,
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  egssLogo: {
    height: 263,
    marginRight: 31,

    [theme.breakpoints.only('md')]: {
      height: 200,
    },

    [theme.breakpoints.only('sm')]: {
      height: 150,
    },

    [theme.breakpoints.only('xs')]: {
      height: 147,
      marginRight: 0,
      marginBottom: 33,
    },
  },
});

export default styles;
