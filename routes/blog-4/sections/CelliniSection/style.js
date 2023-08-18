const styles = (theme) => ({
  section: {
    paddingBottom: 153,
    display: 'flex',
    justifyContent: 'space-between',

    '& > div:first-child': {
      width: 530,
    },

    [theme.breakpoints.only('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
      alignItems: 'start',

      '& > div': {
        width: '100% !important',
      },
    },

    [theme.breakpoints.only('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '27px',
      alignItems: 'start',

      '& > div': {
        width: '100% !important',
      },
    },

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 50,
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
    letterSpacing: 0.25,
    lineHeight: 'normal',
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
  description: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 35,

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
    },

    [theme.breakpoints.only('xs')]: {
      marginBottom: 25,
    },
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: '#000',
    textDecoration: 'none !important',

    [theme.breakpoints.only('xs')]: {
      fontSize: 18,
    },
  },
  productPrice: {
    fontSize: 56,
    fontWeight: 'bold',
    lineHeight: '32px',
    color: '#000',

    [theme.breakpoints.only('xs')]: {
      fontSize: 38,
      lineHeight: '28px',
    },
  },
  deliveryOption: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.33,
    color: '#000',
    margin: '13px 0',

    [theme.breakpoints.only('xs')]: {
      fontSize: 16,
      lineHeight: 1.75,
    },
  },
  promotionCodeContainer: {
    width: 178,
    padding: 8,
    backgroundColor: '#000',
    marginBottom: 25,

    '& p': {
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 1.5,
      color: '#ffffff',
      textTransform: 'uppercase',
    },

    [theme.breakpoints.only('xs')]: {
      width: 121,
    },
  },
  moreProduct: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',

    '& a': {
      color: '#000',
      textDecoration: 'underline !important',
    },
  },
  pictureContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  celliniPicOne: {
    height: 371,
    marginBottom: 12,

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
  celliniPicTwo: {
    height: 330,

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
});

export default styles;
