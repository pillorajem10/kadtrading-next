const styles = (theme) => ({
  mobileNavBar: {
    boxShadow: '-2px 2px 4px 0 rgba(0, 0, 0, 0.5), 0 0 3px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: '#fff',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: '#000',
    height: 25,
    width: 25,
    marginLeft: 15,
  },
  badge: {
    '& > span.MuiBadge-badge.MuiBadge-anchorOriginTopRightRectangle': {
      color: 'white',
      backgroundColor: '#000 !important',
      fontSize: 9,
    },
  },
  currency: {
    display: 'flex',
    alignItems: 'center',    
    width: '4.3rem',
    padding: 1,
    border: '1px solid black',
    borderRadius: 5,

    [theme.breakpoints.only('sm')]: {
      width: '5.3rem',
    },

    [theme.breakpoints.only('xs')]: {
      width: '5.3rem',
    },    
  }
});

export default styles;
