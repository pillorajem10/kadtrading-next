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
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    margin: '40px 0',
  },
});

export default styles;
