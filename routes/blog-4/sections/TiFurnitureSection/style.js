const styles = (theme) => ({
  section: {
    paddingBottom: 102,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 55,
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

    '& span': {
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
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1.25,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 25,

    [theme.breakpoints.only('xs')]: {
      fontSize: 16.8,
      fontWeight: 'bold',
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
      marginBottom: 0,
    },
  },
  productDesc: {
    width: 530,
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
      cursor: 'pointer',
    },

    '& span': {
      fontWeight: 'bold',
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
  productContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 22,

    [theme.breakpoints.only('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
      alignItems: 'end',
    },

    [theme.breakpoints.only('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
      alignItems: 'center',
    },

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  productImage: {
    height: 368,

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
    },
  },
  productGif: {
    height: 365,

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
    },
  },
  productFooterContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#9EB8AF',
    padding: '15px 26px 7px',

    '& p, & div': {
      fontSize: 24,
      lineHeight: 1.17,
      color: '#ffffff',

      '& > a': {
        fontWeight: 'normal',
        textDecoration: 'underline !important',
        color: '#ffffff',
        cursor: 'pointer !important',
        position: 'relative',
        zIndex: 2,
      },
    },

    '&  span': {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 1.17,
      color: '#ffffff',
    },
  },
  mobileProductFooterContainer: {
    width: '100%',
    position: 'relative',

    '& > div': {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      padding: 5,
    },

    '& > img': {
      width: '100%',
      height: 'fit-content',
    },

    '& p, & div': {
      fontSize: 14,
      lineHeight: 1.71,
      letterSpacing: 0.42,
      color: '#ffffff',

      '& a': {
        fontSize: 14,
        textDecoration: 'underline !important',
        fontWeight: 'normal',
        color: '#ffffff',
        cursor: 'pointer !important',
        position: 'relative',
        zIndex: 2,
      },
    },

    '& span': {
      fontSize: 28,
      lineHeight: 0.75,
      letterSpacing: 0.72,
      color: '#ffffff',
    },
  },
  tiFurnitureLogo: {
    padding: 12,
    marginRight: 19,
  },
  wizzo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 200,
    zIndex: 1,

    [theme.breakpoints.only('md')]: {
      height: 180,
    },

    [theme.breakpoints.only('sm')]: {
      height: 100,
    },
  },
});

export default styles;
