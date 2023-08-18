const styles = () => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  searchInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 18.5,
    width: 292,
    height: 37,
    border: '1px solid #e4e4e4',

    '&:focus-within': {
      boxShadow:
        '0px 1px 5px 0px rgba(0,0,0,0.1), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 3px 1px -2px rgba(0,0,0,0.1)',
    },
  },
  searchInput: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.6)',
    paddingLeft: 20,
    width: '100%',
  },
  iconButton: {
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
    padding: 10,
    color: '#000000',
    backgroundColor: '#fafafa',
    height: 37,
    width: 37,

    '&:hover, &.Mui-focusVisible': {
      backgroundColor: 'rgba(230, 230, 230, 1)',
    },
  },
});

export default styles;
