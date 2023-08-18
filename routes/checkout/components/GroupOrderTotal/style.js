const styles = (theme) => ({
  container: {
    display: 'flex',
    padding: '15px 12px',
    backgroundColor: '#f5f5f5',
    width: 500,

    '& > p': {
      fontSize: 14.7,
      fontWeight: 'bold',
      lineHeight: 0.68,
      letterSpacing: 0.25,
      color: '#000000',
    },

    '& > p:first-child': {
      width: 150,
    },

    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 8px',
      backgroundColor: '#f5f5f5',
      marginTop: 0,
      width: '100%',

      '& > p:first-child': {
        fontSize: 12.5,
        fontWeight: 'bold',
        lineHeight: 0.8,
        letterSpacing: 0.21,
        color: '#000000',
        width: '100%',
      },

      '& > p:last-child': {
        fontSize: 14.7,
        fontWeight: 'bold',
        lineHeight: 0.68,
        letterSpacing: 0.25,
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
});

export default styles;
