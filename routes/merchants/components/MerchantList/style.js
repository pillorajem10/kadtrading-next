const styles = (theme) => ({
  merchantListContainer: {},
  merchantList: {
    marginBottom: 55,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 61,
    },
  },
  charHeader: {
    fontSize: 32.4,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 19,
  },
  merchantName: {
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 8,

    '&:hover': {
      color: '#000',
    },

    [theme.breakpoints.only('xs')]: {
      marginBottom: 5,
    },
  },
});

export default styles;
