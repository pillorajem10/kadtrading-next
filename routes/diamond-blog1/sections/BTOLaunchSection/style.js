const styles = (theme) => ({
  btoLaunchSection: {
    padding: '90px 0 150px',
    width: '50%',

    [theme.breakpoints.only('md')]: {
      width: '100%',
    },

    [theme.breakpoints.only('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '70px 0 90px',
      width: '100%',
    },
  },
  btoLaunchHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 24,

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      letterSpacing: 'normal',
      marginBottom: 15,
    },
  },
  btoLaunchContent: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 20,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 15,
    },
  },
  btoLaunchLink: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: '#000',
  },
});

export default styles;
