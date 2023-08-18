const styles = (theme) => ({
  layout: {
    position: 'relative',

    '& main': {
      marginTop: -39,
    },

    [theme.breakpoints.only('xs')]: {
      '& main': {
        marginTop: 0,
      },
    },
  },
});

export default styles;
