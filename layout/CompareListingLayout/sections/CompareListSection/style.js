const styles = (theme) => ({
  productListSection: {
    display: 'flex',
    width: '100%',
    alignItems: 'start',

    [theme.breakpoints.only('xs')]: {
      paddingTop: 30,
    },
  },
  productListContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productListInnerContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '30px',

    [theme.breakpoints.only('xs')]: {
      /*
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '0px',
      */
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',      
    },
  },
  loadMoreButton: {
    width: 250,
    height: 48,
    fontSize: 14.7,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'white', // 'rgba(0, 0, 0, 0.87)',
    boxShadow: 'none',
    margin: '50px auto 0',
    textTransform: 'uppercase',

    [theme.breakpoints.only('xs')]: {
      marginTop: 40,
      width: 240,
      fontSize: 14,
      lineHeight: 1.14,
    },

    '&:hover': {
      color: '#000',
      border: '1px solid black',
    },
  },
});

export default styles;
