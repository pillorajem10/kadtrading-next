const styles = (theme) => ({
  productCardList: {
    height: '100%',
    maxWidth: 1310,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },
  },
  flexContainer: {
    display: 'grid !important',
  },
});

export default styles;
