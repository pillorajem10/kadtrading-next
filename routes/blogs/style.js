const styles = (theme) => ({
  page: {
    padding: '40px 0 120px',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 22px 80px 22px',
    },
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      padding: '0 15px',
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      padding: '0 15px',
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
    },
  },
  articleList: {
    display: 'flex',
    width: '100%',
    paddingTop: 30,

    [theme.breakpoints.only('xs')]: {
      paddingTop: 22,
      flexDirection: 'column',
    },
  },
});

export default styles;
