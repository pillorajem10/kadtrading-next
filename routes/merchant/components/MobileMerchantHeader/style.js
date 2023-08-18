const styles = () => ({
  mobileMerchantHeader: {
    padding: '14px 0 32px',
  },
  headerContainer: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: 'fit-content',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: 100,
    height: 100,
    borderRadius: '50%',
    border: '1px solid #f5f5f5',
    marginBottom: 40,
    overflow: 'hidden',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
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
  favIcon: {
    position: 'absolute',
    bottom: 35,
    right: -5,
    zIndex: 1,
  },
});

export default styles;
