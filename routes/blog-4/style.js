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
      padding: '0 0 72px',
    },
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',
    position: 'relative',

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
      padding: '0 22px',
    },
  },
  articleHeader: {
    width: 926,
    fontSize: 50.3,
    fontWeight: 500,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 47,

    [theme.breakpoints.only('sm')]: {
      width: '100%',
      fontSize: 40,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      fontSize: 21,
      fontWeight: 500,
      letterSpacing: 0.25,
      marginTop: 12,
      marginBottom: 44,
    },
  },
  articleCover: {
    width: '100%',
  },
  articleContentWrapper: {
    padding: '47px 0 0',

    [theme.breakpoints.only('xs')]: {
      padding: '31px 0 0',
    },
  },
  hideMobileShareOptions: {
    position: 'fixed',
    bottom: -160,
    width: '100%',
    boxShadow: '0 -1px 4px 0 rgba(195, 195, 195, 0.5)',
    transition: '.5s',
  },
  mobileShareOptions: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -1px 4px 0 rgba(195, 195, 195, 0.5)',
    transition: '.5s',
  },
});

export default styles;
