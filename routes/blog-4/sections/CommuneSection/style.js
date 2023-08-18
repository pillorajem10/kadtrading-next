const styles = (theme) => ({
  section: {
    paddingBottom: 102,

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
  communeCoffeeTable: {
    height: 560,

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
    },
  },
});

export default styles;
