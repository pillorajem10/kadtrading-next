const styles = (theme) => ({
  header: {
    textAlign: 'center',
    fontSize: 'calc(2.8rem + 1.5vw)',
    marginTop: 20,
    fontFamily: 'Bell MT !important',
    color: '#000000'
  },
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
    fontSize: '1rem',

    [theme.breakpoints.only('xs')]: {
      fontSize: '.75rem',
    },
  },
  paragraphCard: {
    marginBottom: 40
  },
  subCard: {
    marginTop: 40
  }
});

export default styles;
