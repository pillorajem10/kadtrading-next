const styles = (theme) => ({
  forgetPassword: {
    paddingTop: 90,

    [theme.breakpoints.only('xs')]: {
      paddingTop: 58,
    },
  },
  headerOne: {
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 14,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 33,
    },
  },
  headerTwo: {
    width: 570,
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  formContainer: {
    width: 460,
    margin: '80px auto 0',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: '54px auto 0',
    },
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  formText: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  icon: {
    color: theme.palette.text.medium,
    marginTop: theme.spacing(1.2),
    width: '18px',
  },
  iconError: {
    color: `${theme.palette.error.main} !important`,
  },
  alertContainer: {
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'start',
    backgroundColor: '#f0f0f0',

    '& > p': {
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.25,
      color: 'rgba(65, 84, 33, 0.71)',

      '& > a': {
        fontSize: 14,
        lineHeight: 1.43,
        letterSpacing: 0.25,
        color: 'rgba(65, 84, 33, 0.71)',
        textDecoration: 'underline !important',
      },
    },

    [theme.breakpoints.only('xs')]: {
      marginBottom: 20,
    },
  },
  checkedIcon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
  submitButton: {
    height: 48,
    marginTop: 42,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
  },
});

export default styles;
