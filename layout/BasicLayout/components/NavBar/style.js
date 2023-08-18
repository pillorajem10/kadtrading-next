const styles = (theme) => ({
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  upperContainer: {
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: '#fff', // #403d38',
    transition: 'all 0.5s',

  },
  bottomContainer: {
    padding: '7px 0',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'relative',

  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },
  },
  logo: {
    transition: 'all 0.5s',
    cursor: 'pointer',
    width: '6rem',
  },
  middleContainer: {
    margin: '0 27px',
    width: '100%',
    position: 'relative',
  },
  searchContainer: {
    width: '100%',
    height: 36,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    padding: '14px 27px',
    border: '1px solid black',

    [theme.breakpoints.only('md')]: {
      width: 550,
    },

    [theme.breakpoints.only('sm')]: {
      width: 350,
      height: 40,
    },
  },
  searchInput: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    marginLeft: 13,
  },
  searchIcon: {
    height: 24,
  },
  rightContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      height: 24,
    },
  },
  shoppingCartIcon: {
    height: 24,
    color: '#000',
    cursor: 'pointer',
  },
  badge: {
    '& > span.MuiBadge-badge.MuiBadge-anchorOriginTopRightRectangle': {
      color: 'black',
      backgroundColor: '#fff !important',
      fontSize: 9,
      border: '1px solid black',
    },
  },
  favouriteIcon: {
    height: 24,
    cursor: 'pointer',
    marginLeft: 26,

    [theme.breakpoints.only('sm')]: {
      marginLeft: 20,
    },
  },
  avatar: {
    width: 80,
    height: 36,
    borderRadius: '50%',
    /*
    height: 24,
    width: 24,
    marginLeft: 26,
    borderRadius: '50%',
    */
    [theme.breakpoints.only('sm')]: {
      // marginLeft: 20,
    },
  },
  avatar1: {
    width: '30px',
    height: '30px',
    marginLeft: '26px',
    borderRadius: '50%',
    objectFit: 'cover',
    /*
    height: 24,
    width: 24,
    marginLeft: 26,
    borderRadius: '50%',
    */
    [theme.breakpoints.only('sm')]: {
      marginLeft: 20,
    },
  },
  bottomMenuItem: {
    display: 'flex',
    color: '#ffffff',
    marginRight: 10,
    cursor: 'pointer',
    borderRadius: 5,
    padding: '0 0 0 5px',

    '& > p': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: 'rgba(255, 255, 255, 0.87)',
    },

    '&:hover': {
      backgroundColor: '#ffffff',
      color: 'rgba(0, 0, 0, 0.87)',

      '& > p': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
  bottomActiveMenuItem: {
    display: 'flex',
    marginRight: 10,
    cursor: 'pointer',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: '0 0 0 5px',
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.87)',
    zIndex: 11,

    '& > p': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& > svg': {
      transform: 'rotateX(180deg)',
    },
  },
  downIcon: {
    height: 24,
  },
  merchantLink: {
    marginRight: 15,
    marginLeft: 5,
    cursor: 'pointer',

    '& > p > a': {
      color: '#fff',
    },
    '& > p': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: '#fff',
    },




    '& > a > p': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: '#fff',
    },
    '& > a': {
      textDecoration: 'none'
    },

  },
  saleButton: {
    width: 90,
    height: 24,
    borderRadius: '5px !important',
    // backgroundColor: 'rgba(255, 119, 0, 0.8)',
    background: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    // color: 'rgba(0, 0, 0, 0.87)',
    color: '#fff',
    marginLeft: 8,

    '&:hover': {
      color: '#000',
      border: '1px solid black',
    },    
  },
  currency: {
    display: 'flex',
    alignItems: 'center',    
    width: '10rem',
    padding: '1px 5px 1px 15px',
    border: '2px solid black',
    borderRadius: 5,
    marginRight: 30,
  }
});

export default styles;
