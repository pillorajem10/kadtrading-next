const styles = (theme) => ({
  copyright: {
    position: 'absolute',
    fontSize: 11,
    left: '1%',
    bottom: -13,
    textAlign: 'left',
    width: '100%',
    padding: '20px 0',
    color: '#fff',
    [theme.breakpoints.only('xs')]: {
      fontSize: 9,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 10,
    },
  },
  pcontainer: {
    cursor: 'pointer',
    marginTop: 39,
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
    },
  }
});

export default styles;
