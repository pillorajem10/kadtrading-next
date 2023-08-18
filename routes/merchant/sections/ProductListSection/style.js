const styles = (theme) => ({
  productListSection: {
    display: 'flex',
    width: '100%',
    alignItems: 'start',

    [theme.breakpoints.only('xs')]: {
      paddingTop: 30,
    },
  },
  filterOptionsContainer: {
    width: 250,
    marginRight: 80,

    [theme.breakpoints.only('md')]: {
      marginRight: 40,
    },

    [theme.breakpoints.only('sm')]: {
      width: 200,
      marginRight: 20,
    },
  },
  productListContainer: {
    width: 'calc(100% - 330px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.only('md')]: {
      width: 'calc(100% - 290px)',
    },

    [theme.breakpoints.only('sm')]: {
      width: 'calc(100% - 220px)',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  productListInnerContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '30px',

    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '0px',
    },
  },
  loadMoreButton: {
    width: 250,
    height: 48,
    fontSize: 14.7,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: 'none',
    margin: '50px auto 0',
    textTransform: 'uppercase',

    [theme.breakpoints.only('xs')]: {
      marginTop: 40,
    },
  },
});

export default styles;
