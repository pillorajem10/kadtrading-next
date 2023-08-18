const styles = (theme) => ({
  section: {
    padding: '40px 0',
    position: 'relative',
  },
  header: {
    color: '#000',
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textTransform: 'capitalize',
    marginBottom: 40,
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.3,
    },
  },
  viewMoreButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },
  viewMoreButton: {
    boxShadow: 'none !important',
    color: theme.palette.text.high,
    width: 216,
    height: 36,
    fontSize: 14.7,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    fontWeight: 600,

    [theme.breakpoints.only('xs')]: {
      width: 240,
    },
  },
});

export default styles;
