const styles = (theme) => ({
  filterTag: {
    minWidth: 100,
    borderRadius: 12.5,
    backgroundColor: '#f0f0f0',
    padding: '3px 10px 3px 19px',
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,

    '& p': {
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: 0.4,
      color: 'rgba(0, 0, 0, 0.38)',
    },

    '& img': {
      cursor: 'pointer',
    },

    [theme.breakpoints.only('xs')]: {
      minWidth: 86,
      borderRadius: 23.5,
      marginRight: 5,
      marginBottom: 10,
      padding: '11px 16px',
      height: 'fit-content',

      '& p': {
        fontSize: 11.4,
        lineHeight: 1.4,
        letterSpacing: 0.4,
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
});

export default styles;
