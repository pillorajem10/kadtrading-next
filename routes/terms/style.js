const styles = (theme) => ({
  headerPic: {
    width: '100%'
  },
  container: {
    marginTop: 60,
    marginBottom: 60,
    marginLeft: 75,
    marginRight: 75,
    fontSize: '1rem',

    [theme.breakpoints.only('xs')]: {
      marginTop: 30,
      marginBottom: 30,
      marginLeft: 25,
      marginRight: 25,
      fontSize: '.75rem',
    },
  },
  paragraphTitle: {
    fontWeight: 'bold',

    [theme.breakpoints.only('xs')]: {
      fontSize: '.75rem',
    },
  },
  parentCard: {
    marginBottom: 40
  },
  childCard: {
    marginLeft: 45,

    [theme.breakpoints.only('xs')]: {
      marginLeft: 30
    },
  },
  subChildCard: {
    marginLeft: 90,

    [theme.breakpoints.only('xs')]: {
      marginLeft: 60
    },
  },
});

export default styles;
