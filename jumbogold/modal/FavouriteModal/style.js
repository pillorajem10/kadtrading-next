const styles = (theme) => ({
  paper: {
    borderRadius: 20,
  },
  container: {
    padding: '26px 98px 26px 38px',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      padding: '25px 30px',
    },
  },
  header: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: '#000',
    marginBottom: 22,

    '& span': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.only('xs')]: {
      position: 'relative',
      zIndex: 2,
      fontSize: 25.1,
      fontWeight: 'bold',
      marginBottom: 29,
    },
  },
  text: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    position: 'relative',
    zIndex: 2,

    '& span:first-child': {
      textDecoration: 'underline',
    },

    '& span:last-child': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      lineHeight: 1.71,
      color: '#000000',

      '& span:first-child': {
        color: '#000',
      },

      '& span:last-child': {
        fontWeight: 'normal',
      },
    },
  },
  okBtn: {
    margin: '44px 0 24px',
    width: 150,
    height: 36,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    position: 'relative',
    zIndex: 2,

    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      margin: '29px auto 25px',
    },
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('xs')]: {
      '& > p': {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
      },
    },
  },
  checkbox: {
    padding: 0,
    marginRight: 13,
  },
  agreeBtn: {
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
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 20,
      height: 151,
    },
  },
  bottomPattern: {
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 0,
      borderBottomLeftRadius: 20,
      height: 150,
    },
  },
  wizzo: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    height: 112,
  },
});

export default styles;
