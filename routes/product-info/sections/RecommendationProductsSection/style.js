const styles = (theme) => ({
  section: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    padding: '100px 0 120px',

    [theme.breakpoints.only('xs')]: {
      padding: '50px 0 60px',
    },
  },
  headerContainer: {
    display: 'flex',
    marginBottom: 40,
  },
  header: {
    color: theme.palette.text.high,
    fontSize: 25.2,

    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.4,
    },
  },
});

export default styles;
