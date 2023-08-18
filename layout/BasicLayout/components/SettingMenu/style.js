const styles = (theme) => ({
  categoryMenu: {
    position: 'absolute',
    top: 31,
    right: 0,
    left: 0,
    height: 0,
    backgroundColor: '#fafafa',
    overflow: 'hidden',
  },
  showMenu: {
    position: 'absolute',
    top: 30,
    left: '-11rem',
    right: 0,
    height: 'auto',
    boxShadow:
      '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    backgroundColor: '#fafafa',
    overflow: 'hidden',
    zIndex: 10,
    maxWidth: 170,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 170,
      top: 45,
      left: 0,
      right: 5,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 170,
      top: 45,
      left: 0,
      right: 5,      
    },
    [theme.breakpoints.only('xs')]: {
      maxWidth: 170,
      top: 45,
      left: 0,
      right: 5,      
    },    
  },
  categoryMenuContainer: {
    padding: 10,
    display: 'flex',
    position: 'relative',

    [theme.breakpoints.only('md')]: {
      padding: 5,
    },

    [theme.breakpoints.only('sm')]: {
      padding: 5,
    },
  },
  level2MenuList: {
    // paddingRight: 10,
    // borderRight: '1px solid rgba(0, 0, 0, 0.04)',
  },
  level2MenuItem: {
    width: 176,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    cursor: 'pointer',

    '& > p': {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
  },
  level2ActiveMenuItem: {
    width: 176,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',

    '& > p': {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  level3MenuList: {
    paddingLeft: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: 'fit-content',
  },
  level3MenuItem: {
    padding: '4px 21px 7px',
    cursor: 'pointer',
    width: 250,
    whiteSpace: 'pre-wrap',

    '& > p': {
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  level3Image: {
    height: 150,
    display: 'flex',
    margin: 'auto 0 auto 200px',
  },
  currencyItem: {
    display: 'flex',
    alignItems: 'center',

    '& > p': {
      fontSize: '0.75rem',
      [theme.breakpoints.only('sm')]: {
        fontSize: '0.65rem',
      },
  
      [theme.breakpoints.only('xs')]: {
        fontSize: '0.65rem',
      },
    },

    '&:hover': { 
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },    
  },
});

export default styles;
