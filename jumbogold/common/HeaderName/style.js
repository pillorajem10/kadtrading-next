const styles = (theme) => ({
  headerWrapper: {
    borderRadius: 5,
    backgroundColor: '#000000',
    padding: '5px 9px',
    marginBottom: 35,

    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 18,
    },
  },
  siderBarHeaderNameWrapper: {
    borderRadius: 5,
    backgroundColor: '#000000',
    padding: '5px 9px',
    marginBottom: 20,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 18,
    },
  },
  header: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterspacing: 0.25,
    color: '#ffffff',
  },
});

export default styles;
