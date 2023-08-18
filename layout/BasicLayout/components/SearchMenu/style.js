const styles = (theme) => ({
  searchMenu: {
    position: 'absolute',
    top: 50,
    right: 0,
    left: 0,
    backgroundColor: '#fafafa',
    transition: '.5s',
    overflow: 'hidden',
    zIndex: 12,

    [theme.breakpoints.only('md')]: {
      left: -280,
      width: 1024,
    },

    [theme.breakpoints.only('sm')]: {
      left: -270,
      width: 768,
    },
  },
  showSearchMenu: {
    position: 'absolute',
    top: 50,
    right: 0,
    left: 0,
    boxShadow:
      '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    backgroundColor: '#fafafa',
    transition: '.5s',
    overflow: 'scroll',
    zIndex: 12,

    [theme.breakpoints.only('md')]: {
      left: -280,
      width: 1024,
    },

    [theme.breakpoints.only('sm')]: {
      left: -270,
      width: 768,
    },
  },
  searchMenuContainer: {
    width: 780,
    margin: '0 auto',
    padding: '18px 0 9px',

    [theme.breakpoints.only('md')]: {
      width: '100%',
      padding: '15px 10px 10px',
    },

    [theme.breakpoints.only('sm')]: {
      width: '100%',
      padding: '15px 10px 10px',
    },
  },
  recentSearchContainer: {
    display: 'flex',
    alignItems: 'center',

    '& > p': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: 'rgba(0, 0, 0, 0.38)',
    },
  },
  recentText: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    cursor: 'pointer',
  },
  clearSearchHistory: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: 15,

    '& p:first-child': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: 'rgba(0, 0, 0, 0.38)',
    },

    '& p:last-child': {
      fontSize: 9,
      fontWeight: 'bold',
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: '#9d9d9d',
      textDecoration: 'underline',
      marginLeft: 5,
      cursor: 'pointer',
    },
  },
  productContainer: {
    padding: '10px 0 0',
  },
  productHeader: {
    fontSize: 13.3,
    fontWeight: 500,
    lineHeight: 1.8,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 7,
  },
  viewAllProducts: {
    padding: '15px 0',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#9d9d9d',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  categoryContainer: {
    padding: '10px 0 30px',
  },
  categoryHeader: {
    fontSize: 13.3,
    fontWeight: 500,
    lineHeight: 1.8,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 11,
  },
  merchantContainer: {
    padding: '10px 0 30px',
  },
  merchantHeader: {
    fontSize: 13.3,
    fontWeight: 500,
    lineHeight: 1.8,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 11,
  },
  divider: {
    opacity: 0.04,
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    height: 1,
    width: '100%',
  },
  gridContainer: {
    display: 'grid',
    rowGap: '5px',
    columnGap: '15px',
    gridTemplateColumns: 'repeat(2, 1fr)',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '&  img': {
        width: 37,
        height: 37,
        marginRight: 15,
      },

      '& p': {
        fontSize: 14,
        lineHeight: 1.43,
        letterSpacing: 0.25,
        color: 'rgba(0, 0, 0, 0.6)',
        maxHeight: 40,
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
        width: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      },

      '& span': {
        fontSize: 14,
        lineHeight: 1.43,
        letterSpacing: 0.25,
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: 700,
      },
    },
  },
  noResults: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.35) !important',
  },
});

export default styles;
