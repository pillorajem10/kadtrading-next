const styles = (theme) => ({
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    width: 500,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    border: 'solid 2px',
    borderRadius: 5,
    margin: 30,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
    },
  },
  header:{
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: 20,
    fontFamily: 'Bell MT !important',
    color: '#000000'
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  form: {
    width: 300,
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  formText: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  linksContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  links: {
    fontSize: 15,
    '& > p > a': {
      color: '#000000',
      '&:hover': {
         color: '#dfad96',
         transition: '.3s'
       },
    },
  },
  btn: {
    height: 35,
    cursor: 'pointer',
    fontSize: 15,
    width: '100%',
    border: '.5px solid #000000',
    backgroundColor: '#000000',
    color: '#ffffff',
    marginBottom: 20,
    '&:hover': {
       color: '#000',
       background: 'transparent',
       transition: '.3s'
     },
  },
  fbBtn: {
    height: 45,
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
    border: '1px solid #4864b4',
    backgroundColor: '#4864b4',
    marginBottom: 20,
    display: 'flex',
    color: 'white',
    '&:hover': {
       border: '1px solid #101761',
       backgroundColor: '#101761',
       transition: '.3s'
     },
  },
  gmailBtn: {
    height: 45,
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
    border: '1px solid #DB3636',
    backgroundColor: '#DB3636',
    marginBottom: 20,
    display: 'flex',
    color: 'white',
    '&:hover': {
       border: '1px solid #971818',
       backgroundColor: '#971818',
       transition: '.3s'
     },
  },
  fbBtnText: {
    fontSize: 18,
    fontWeight: 500,
  },
  fbIcon: {
    width: 18,
    marginRight: 65,
    marginLeft: 15
  },
  gmailIcon: {
    width: 30,
    marginRight: 65,
    marginLeft: 10
  },
  btnSeparatorContainer: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
  headerLine: {
    width: '100%',
    height: 1,
    backgroundImage: 'linear-gradient(#000000, #000000, #000000, #000000, #000000)',
    margin: '5px auto',
  },
  separatorText: {
    fontSize: 25,
    marginLeft: 15,
    marginRight: 15
  }
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
