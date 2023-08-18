const styles = (theme) => ({
  sections: {
    paddingBottom: 100,
  },
  header: {
    fontSize: 32.4,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
    marginBottom: 64,

    [theme.breakpoints.only('xs')]: {
      padding: '45px 0 75px',
      marginBottom: 0,
    },
  },
  merchantsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    rowGap: '50px',
    width: 950,
    margin: '0 auto',

    [theme.breakpoints.only('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  merchantItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  merchantImage: {
    height: 100,

    [theme.breakpoints.only('xs')]: {
      height: 50,
    },
  },
});

export default styles;
