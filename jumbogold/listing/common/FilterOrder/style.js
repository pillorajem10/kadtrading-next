const styles = (theme) => ({
  filterOrder: {
    width: 185,
    height: 30,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3px 7px',
    transition: '.3s',

    '&:hover': {
      border: '1px solid #000',
      transition: '.3s',
    },

    [theme.breakpoints.only('sm')]: {
      width: 140,
    },
  },
  filterOrderIcon: {
    height: 24,
    width: 24,
  },
  filterOrderText: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.38)',
  },
  popper: {
    position: 'absolute !important',
    left: '1px !important',
    top: '0px !important',
    zIndex: 102,
  },
  menuWrapper: {
    boxShadow: '0 1px 4px 0 #8e8d8d',
    borderRadius: 5,
  },
  menuList: {
    backgroundColor: '#ffffff',
    width: 185,
    borderRadius: 5,
    marginTop: 5,

    [theme.breakpoints.only('sm')]: {
      width: 140,
    },
  },
  menuItem: {
    padding: '14px 16px',

    '& p': {
      fontSize: 13.8,
      lineHeight: 1.45,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export default styles;
