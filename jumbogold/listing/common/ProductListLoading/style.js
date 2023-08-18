const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'grid',
    flexWrap: 'wrap',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '100px',
    rowGap: '30px',

    [theme.breakpoints.only('md')]: {
      columnGap: '60px',
    },

    [theme.breakpoints.only('sm')]: {
      columnGap: '30px',
    },

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '16px',
      rowGap: '8px',
    },
  },
});

export default styles;
