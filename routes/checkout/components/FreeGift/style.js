const styles = (theme) => ({
  container: {
    width: 500,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 12px',
    borderTop: '2px dashed #f5f5f5',

    '& > p': {
      fontSize: 14.7,
      fontWeight: 'bold',
      lineHeight: 0.68,
      letterSpacing: 0.25,
      color: '#000000',
      width: 150,
    },

    '& > div': {
      width: 'calc(100% - 150px)',
      display: 'flex',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      borderTop: 'none',
      padding: '15px 8px',

      '& > p': {
        fontSize: 12.5,
        fontWeight: 'bold',
        lineHeight: 0.8,
        letterSpacing: 0.21,
        color: '#000000',
        width: 130,
      },

      '& > div': {
        width: 'calc(100% - 135px)',
        display: 'flex',
      },
    },
  },
  freeGift: {
    fontSize: 14.7,
    lineHeight: 0.68,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
