const styles = (theme) => ({
  section: {
    position: 'relative',
  },
  player: {
    "& video": {
      objectFit: 'cover !important',
    },

    [theme.breakpoints.only('sm')]: {
      height: '20rem',
    },

    [theme.breakpoints.only('xs')]: {
      height: '20rem',
    },

  },
  bannerImage: {
    cursor: 'pointer',
    width: '100%',
  },
  moreInfoButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 50,

    [theme.breakpoints.only('sm')]: {
      bottom: 45,
    },

    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
});

export default styles;
