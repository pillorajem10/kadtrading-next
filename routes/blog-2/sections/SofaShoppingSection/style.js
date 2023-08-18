const styles = (theme) => ({
  sofaShoppingSection: {
    padding: '47px 0 100px',

    [theme.breakpoints.only('xs')]: {
      padding: '44px 0 76px',
    },
  },
  sofaShoppingContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  sofaShoppingContent: {
    width: 'calc(100% - 250px)',
    paddingRight: 22,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      paddingRight: 0,
    },
  },
  sofaShoppingHeaderText: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 16,

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      marginBottom: 30,
    },
  },
  sofaShoppingContentText: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  sofaShopingContentLink: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: '#000',
  },
  sofaShoppingImage: {
    width: 366,
    height: 250,

    [theme.breakpoints.only('sm')]: {
      width: 260,
      height: 200,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: '30px 0',
    },
  },
});

export default styles;
