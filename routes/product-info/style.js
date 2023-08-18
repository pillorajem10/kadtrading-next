const styles = (theme) => ({
  layout: {
    paddingTop: 40,

    [theme.breakpoints.only('xs')]: {
      paddingTop: 0,
    },
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '100px',
    paddingBottom: 60,

    [theme.breakpoints.only('md')]: {
      columnGap: '0px',
    },

    [theme.breakpoints.only('sm')]: {
      columnGap: '0px',
    },
  },
});

export default styles;
