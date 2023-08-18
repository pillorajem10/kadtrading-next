const styles = () => ({
  header: {
    padding: '18px 0 39px',
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  listHeader: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fafafa',
  },
  headerItem: {
    padding: '14px 10px',
    width: '25%',

    '& > p': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.5)',
    },
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 44,

    '& > p': {
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: '#000000',
    },
  },
});

export default styles;
