const styles = (theme) => ({
  btoIntroductionSection: {
    padding: '33px 0 30px',

    [theme.breakpoints.only('xs')]: {
      padding: '44px 0 6px',
    },
  },
  btoIntroductionHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 24,
    width: '60%',

    [theme.breakpoints.only('md')]: {
      width: '70%',
    },

    [theme.breakpoints.only('sm')]: {
      width: '80%',
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      letterSpacing: 'normal',
      width: '100%',
      marginBottom: 30,
    },
  },
  btoIntroductionContent: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 30,
  },
});

export default styles;
