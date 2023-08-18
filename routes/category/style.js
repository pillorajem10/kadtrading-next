const styles = (theme) => ({
  category: {
    padding: '40px 0 87px',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 0 100px',
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
  header: {
    padding: '5px 0 10px',
    fontSize: 32.4,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    flexWrap: 'wrap',
    columnGap: '111px',
    rowGap: '66px',

    '& > div': {
      cursor: 'pointer',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '40px 24px 0',
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '30px',
    },
  },
  categoryImage: {
    width: '100%',
    marginBottom: 18,
    height: '46vh',
    objectFit: 'contain',
  },
  
  categoryName: {
    fontSize: 21,
    lineHeight: 0.76,
    letterSpacing: 3.51,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
  },
});

export default styles;
