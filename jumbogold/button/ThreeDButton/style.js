const styles = (theme) => ({
  button: {
    width: 30,
    height: 30,

    [theme.breakpoints.only('md')]: {
      width: 24,
      height: 24,
    },

    [theme.breakpoints.only('sm')]: {
      width: 24,
      height: 24,
    },

    [theme.breakpoints.only('xs')]: {
      width: 30,
      height: 30,
    },
  },
});

export default styles;
