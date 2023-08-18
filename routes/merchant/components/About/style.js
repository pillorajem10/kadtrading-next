const styles = (theme) => ({
  about: {
    padding: '20px 0 80px',
    textAlign: 'center',
  },
  merchantName: {
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 30,
  },
  merchantIntro: {
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.6)',
    width: 740,
    margin: '0 auto',

    [theme.breakpoints.only('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
});

export default styles;
