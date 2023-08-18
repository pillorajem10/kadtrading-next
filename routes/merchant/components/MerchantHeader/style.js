const styles = (theme) => ({
  merchantHeader: {
    display: 'flex',
    marginTop: -100,
    position: 'relative',
    zIndex: 0,

    [theme.breakpoints.only('sm')]: {
      marginTop: -80,
    },
  },
  logoContainer: {
    borderRadius: 10,
    boxShadow: '0 2px 6px 0 rgba(162, 162, 162, 0.5)',
    backgroundColor: '#ffffff',
    height: 190,
    width: 190,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,

    [theme.breakpoints.only('sm')]: {
      height: 150,
      width: 150,
    },
  },
  headerContainer: {
    padding: '0 40px 0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    boxShadow: '0 2px 6px 0 rgba(162, 162, 162, 0.5)',
    backgroundColor: '#ffffff',
    width: 'calc(100% - 190px)',
    height: 100,
    position: 'absolute',
    right: 0,
    bottom: 45,
    zIndex: -1,

    [theme.breakpoints.only('sm')]: {
      width: 'calc(100% - 150px)',
      height: 75,
      bottom: 35,
    },
  },
  tabContainer: {
    display: 'flex',
  },
  normalTab: {
    width: 140,
    padding: '10px 0',
    textAlign: 'center',
    borderBottom: '3px solid #ffffff',
    cursor: 'pointer',
    transition: '.3s',

    '& > p': {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: '#000000',
    },
  },
  activeTab: {
    width: 140,
    padding: '10px 0',
    textAlign: 'center',
    borderBottom: '3px solid #000',
    cursor: 'pointer',
    transition: '.3s',

    '& > p': {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: '#000000',
    },
  },
});

export default styles;
