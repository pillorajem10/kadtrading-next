const styles = (theme) => ({
  mobileFilterSideBar: {
    backgroundColor: theme.palette.common.white,
    height: '100%',
  },
  headerWrapper: {
    padding: '16px 22px',
    borderBottom: '1px solid #d8d8d8',
    position: 'relative',

    '& > div': {
      display: 'flex',
    },
  },
  headerIcon: {
    color: 'rgba(0, 0, 0, 0.38)',
    fontSize: 24,
    marginRight: 15,
    transform: 'rotate(270deg)',
  },
  headerText: {
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.38)',
    marginRight: 15,
  },
  headerButton: {
    padding: 0,
    position: 'absolute',
    right: 15,
    bottom: 17,
  },
  filterCount: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > p': {
      fontSize: 13.3,
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  list: {
    padding: '20px 20px 0',
  },
  listItem: {
    padding: 0,
  },
  clearAllButton: {
    /*
    height: 48,
    cursor: 'pointer',
    fontSize: 18,
    width: '100%',
    fontWeight: 'bold',
    borderRadius: 24,
    lineHeight: 1.94,
    border: '.5px solid #000000',
    backgroundColor: '#000000',
    color: '#ffffff',
    marginBottom: 20,
    margin: '40px 0',
    '&:hover': {
       color: '#000',
       background: 'transparent',
       transition: '.3s'
     },
     */
     color: '#ffffff',
     bottom: 10,
     height: 30,
     position: 'fixed',
     width: '40%',
     left: 20
  },

  actionButton: {
    /*
    height: 48,
    cursor: 'pointer',
    fontSize: 18,
    width: '100%',
    fontWeight: 'bold',
    borderRadius: 24,
    lineHeight: 1.94,
    border: '.5px solid #000000',
    backgroundColor: '#000000',
    color: '#ffffff',
    marginBottom: 20,
    top: 750,
    right: 20,
    bottom: 500,
    left: 20,
    position: 'sticky',
    margin: '40px 0',
    '&:hover': {
       color: '#000',
       background: 'transparent',
       transition: '.3s'
     },
     */
     // marginTop: 200,
     color: '#ffffff',
     bottom: 10,
     position: 'fixed',
     width: '40%',
     height: 30,
     right: 20
  },
});

export default styles;
