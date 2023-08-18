const styles = (theme) => ({
  section: {
    [theme.breakpoints.only('xs')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '20px',
      rowGap: '30px',
    },
  },
  favouriteListContainer: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
});

export default styles;
