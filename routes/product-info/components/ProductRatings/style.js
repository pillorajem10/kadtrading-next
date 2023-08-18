const styles = (theme) => ({
  productRatings: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 7,

    '& p': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#000',
      marginRight: 8,
    },

    [theme.breakpoints.only('xs')]: {
      margin: '39px 0 0',
    },
  },
});

export default styles;
