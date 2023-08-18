const styles = (theme) => ({
  formContainer: {
    width: 460,
    margin: '0 auto',
    paddingTop: 85,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      paddingTop: 58,
    },
  },
  header: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
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
  icon: {
    color: theme.palette.text.medium,
    marginTop: theme.spacing(1.2),
    width: '18px',
  },
  iconError: {
    color: `${theme.palette.error.main} !important`,
    marginTop: 0,
  },
  iconButton: {
    color: theme.palette.text.medium,
    cursor: 'pointer',
    width: '18px',
    marginBottom: 8,
  },
  iconImage: {
    width: '100%',
  },
  nameContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '20px',
  },
  passwordRulesContainer: {
    paddingTop: 13,
    paddingLeft: 24,

    '& > p': {
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: 0.4,
    },
  },
  strengthIndicatorContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: '50%',
    marginRight: 8,
  },
  strengthText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33,
    letterSpacing: 2,
    marginRight: 10,
  },
  checkbox: {
    padding: '0 11px 0 0',
  },
  latestNewsContainer: {
    paddingTop: 46,
    display: 'flex',
    alignItems: 'center',

    '& > p': {
      fontSize: 11.4,
      lineHeight: 1.4,
      letterSpacing: 0.4,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    [theme.breakpoints.only('xs')]: {
      alignItems: 'start',
    },
  },
  acknowledgeContainer: {
    paddingTop: 30,
    display: 'flex',
    alignItems: 'start',

    '& > p': {
      fontSize: 11.4,
      lineHeight: 1.4,
      letterSpacing: 0.4,
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  signUpButton: {
    margin: '42px 0 17px',
    width: '100%',
    height: 48,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  termsText: {
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',

    '& > a': {
      fontSize: 11.4,
      lineHeight: 1.4,
      letterSpacing: 0.4,
      textAlign: 'center',
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

export default styles;
