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
  forms: {
    marginTop:'-26rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    padding: 30,
    [theme.breakpoints.only('md')]: {
      marginTop:'-20rem',
    },

    [theme.breakpoints.only('sm')]: {
      marginTop:'0rem',
    },

    [theme.breakpoints.only('xs')]: {
      marginTop:'0rem',
    },
  },
  /*
  page: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  topPattern: {
    position: 'absolute',
    left: 0,
    top: -150,
    zIndex: -1,
    width: 400,

    [theme.breakpoints.only('xs')]: {
      top: -250,
      left: 0,
      width: 300,
    },
  },
  bottomPattern: {
    bottom: -250,
    position: 'absolute',
    right: 0,
    zIndex: -1,
    width: 400,
  },
  header: {
    padding: '90px 0 50px',
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      padding: '58px 0',
    },
  },
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: 460,
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 24,
  },
  formText: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  errorText: {
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    color: theme.palette.error.main,
    textAlign: 'left',
    marginLeft: 26,
  },
  icon: {
    color: theme.palette.text.medium,
    marginTop: theme.spacing(1.2),
    width: '18px',
  },
  iconError: {
    color: `${theme.palette.error.main} !important`,
  },
  iconButton: {
    color: theme.palette.text.medium,
    cursor: 'pointer',
    marginLeft: theme.spacing(1),
    width: '18px',
  },
  iconImage: {
    width: '100%',
  },
  forgotPassword: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  loginButton: {
    width: '100%',
    height: 48,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
    margin: '47px 0 40px',
  },
  registerLink: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  */
});

export default styles;
