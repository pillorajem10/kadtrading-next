const styles = (theme) => ({
  productCountText: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.38)',
    paddingBottom: 30,

    [theme.breakpoints.only('xs')]: {
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.38)',
      padding: '8px 0 14px',
    },
  },
});

export default styles;
