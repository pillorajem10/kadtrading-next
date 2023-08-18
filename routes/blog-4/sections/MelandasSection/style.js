const styles = (theme) => ({
  section: {
    paddingBottom: 150,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 60,
    },
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    [theme.breakpoints.only('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
    },

    [theme.breakpoints.only('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
      alignItems: 'center',
    },
  },
  melandasChair: {
    height: 379,

    [theme.breakpoints.only('md')]: {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: 'auto',
      marginBottom: 25,
    },
  },
  headerContainer: {
    display: 'flex',
  },
  headerNumber: {
    width: 55,
    fontSize: 35.6,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('sm')]: {
      width: 40,
      fontSize: 30,
    },

    [theme.breakpoints.only('xs')]: {
      width: 36,
      fontSize: 25.2,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  header: {
    fontSize: 35.6,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 35,

    '& > span': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 30,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      marginBottom: 25,
    },
  },
  productDesc: {
    width: 530,
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 35,

    '& span': {
      fontWeight: 'bold',
    },

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
    },

    [theme.breakpoints.only('md')]: {
      width: '100%',
    },

    [theme.breakpoints.only('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginBottom: 25,
    },
  },
  promoCodeTitle: {
    width: 218,
    fontSize: 24,
    lineHeight: 'normal',
    letterSpacing: 3,
    textAlign: 'center',
    color: '#000000',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      fontSize: 14,
      letterSpacing: 1.75,
    },
  },
  promoCodeText: {
    width: 219,
    backgroundColor: '#000',
    padding: '27px 0',

    '& p': {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 0.83,
      textAlign: 'center',
      color: '#ffffff',
    },

    [theme.breakpoints.only('xs')]: {
      margin: '0 auto',
      padding: '22px 0',

      '& p': {
        fontSize: 22,
        lineHeight: 0.91,
      },
    },
  },
});

export default styles;
