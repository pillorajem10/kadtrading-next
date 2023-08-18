const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    width: 480,
    height: '15rem',
    background: '#fff',
    padding: 20,
    position: 'relative',
    borderRadius: 10,
    outline: 'none',

    [theme.breakpoints.only('xs')]: {
      width: '88%',
    },

    [theme.breakpoints.only('sm')]: {
      width: '58%',
    },

    [theme.breakpoints.only('md')]: {
      width: '43%',
    },
  },
  modalInnerWrapper: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 48,

    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
      marginLeft: 0,
      width: '100%',
    },

    [theme.breakpoints.only('sm')]: {
      marginTop: 0,
      marginLeft: 0,
      width: '100%',
    },
  },
  title: {
    color: '#000',
    fontSize: 16.8,
    fontWeight: 'bold',
    marginBottom: 27,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14.2,
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 14.2,
    },
  },
  content: {
    fontSize: 14.7,
    lineHeight: 1.36,
    marginBottom: 68,

    [theme.breakpoints.only('xs')]: {
      fontSize: 10.2,
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 12.2,
    },
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'flex-start',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'space-between'
    },

    [theme.breakpoints.only('sm')]: {
      justifyContent: 'space-between'
    },    
  },
  button: {
    color: theme.palette.text.high,
    width: 150,
    height: 36,
    background: '#000',

    [theme.breakpoints.only('xs')]: {
      width: 128,
      fontSize: '75%',
      color: 'white',
    },

    [theme.breakpoints.only('sm')]: {
      width: 128,
      fontSize: '75%',
      color: 'white',
    },
  },
});

export default styles;
