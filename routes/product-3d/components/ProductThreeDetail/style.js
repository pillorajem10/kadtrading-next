const styles = (theme) => ({
  layout: {
    marginTop: 39,
    height: '100vh',
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
    },
  },
});

export default styles;
