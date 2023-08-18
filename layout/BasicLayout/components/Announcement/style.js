const styles = (theme) => ({
  container: {
    padding: '7px 0',
    position: 'relative',
    backgroundColor: 'black', // '#000',
    [theme.breakpoints.only('xs')]: {
      padding: 15,
    },
  },
  announcement: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  announcementText: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    // color: 'rgba(0, 0, 0, 0.87)',
    color: '#fff',
    cursor: 'pointer',
    textTransform: 'uppercase',

    '&:hover': {
      textDecoration: 'underline',
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 11,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: 1,
      color: '#fff',
      width: '100%',

      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  announcementIcon: {
    height: 20,
    marginLeft: 14,
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    bottom: 3,
    right: 13,

    [theme.breakpoints.only('xs')]: {
      top: 20,
      right: 15,
    },
  },
  wizzoAnnouncement: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 50,
  },
});

export default styles;
