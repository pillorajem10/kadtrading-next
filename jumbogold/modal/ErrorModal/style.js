const styles = (theme) => ({
  paper: {
    borderRadius: 20,
    overflow: 'initial',

    [theme.breakpoints.only('xs')]: {
      width: 'calc(100% - 20px)',
    },
  },
  container: {
    padding: '60px 66px',
    position: 'relative',
    zIndex: 2,

    [theme.breakpoints.only('xs')]: {
      padding: '59px 35px 54px',
    },
  },
  header: {
    fontSize: 25.2,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 33,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 32,
      color: '#000',
      position: 'relative',
      zIndex: 1,
    },
  },
  text: {
    width: 396,
    fontSize: 18,
    lineHeight: 1.94,
    color: '#000000',
    marginBottom: 66,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      fontSize: 14,
      lineHeight: 1.71,
      marginBottom: 50,
    },
  },
  buttonGroup: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
  },
  cancelButton: {
    width: 150,
    height: 36,
    backgroundColor: '#ffffff',
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
    marginRight: 68,

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

    [theme.breakpoints.only('xs')]: {
      marginRight: 15,
    },
  },
  tryAagainButton: {
    width: 150,
    height: 36,
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
  },
  topPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
    height: 200,
    borderTopRightRadius: 20,

    [theme.breakpoints.only('xs')]: {
      height: 151,
    },
  },
  bottomPattern: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 0,
    height: 190,
    borderBottomLeftRadius: 20,

    [theme.breakpoints.only('xs')]: {
      height: 150,
    },
  },
  wizzo: {
    position: 'absolute',
    bottom: -40,
    right: 80,
    zIndex: 1,
    height: 330,

    [theme.breakpoints.only('sm')]: {
      right: 20,
      height: 250,
    },
  },
});

export default styles;
