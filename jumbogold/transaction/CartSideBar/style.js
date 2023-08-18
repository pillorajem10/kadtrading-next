const styles = (theme) => ({
  container: {
    justifyContent: 'flex-end',
  },
  layout: {
    height: '100%',
  },
  paper: {
    width: '25.063rem',
    background: 'white',
  },
  cartSideBarHeader: {
    background: '#403d38',
    padding: '23px 0',
    position: 'relative',
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      padding: '14px 0',
    },
  },
  cartSideBarHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
  },
  cartSideBarIcon: {
    color: '#fff',
    position: 'absolute',
    top: 28,
    right: 15,
    cursor: 'pointer',

    [theme.breakpoints.only('xs')]: {
      left: 20,
      top: 18,
      fontSize: 25,
    },
  },
  transactionCartList: {
    height: '70%',
    overflow: 'scroll',
    padding: 22,

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  confirmOrderWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -1px 4px 0 rgba(195, 195, 195, 0.5)',
    zIndex: 2,
    backgroundColor: 'white',
  },
});

export default styles;
