import decoFanBg from 'public/assets/images/article/article-4/deco-fan-background.png';
import mobileDecoFanBg from 'public/assets/images/article/article-4/mobile-deco-fan-background.png';

const styles = (theme) => ({
  section: {
    paddingBottom: 146,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 60,
    },
  },
  productContainer: {
    background: `url(${decoFanBg}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    padding: '0 0 39px',
    position: 'relative',
  },
  mobileProductContainer: {
    background: `url(${mobileDecoFanBg}) no-repeat`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '100%',
    marginBottom: 25,
  },
  decoFanLogo: {
    height: 46,
    marginBottom: 129,

    [theme.breakpoints.only('md')]: {
      marginBottom: 60,
    },

    [theme.breakpoints.only('sm')]: {
      marginBottom: 60,
    },

    [theme.breakpoints.only('xs')]: {
      height: 24,
      marginBottom: 150,
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
    lineHeight: 1.35,
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
  description: {
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

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginBottom: 25,
    },
  },
  promotionCodeContainer: {
    position: 'absolute',
    bottom: 39,
    right: 0,

    [theme.breakpoints.only('xs')]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  promoCodeTitle: {
    width: 218,
    fontSize: 24,
    lineHeight: 'normal',
    letterSpacing: 3,
    textAlign: 'center',
    color: '#ffffff',

    [theme.breakpoints.only('sm')]: {
      color: '#000000',
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      letterSpacing: 1.75,
      color: '#000000',
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
      width: 179,
      padding: '22px 0',

      '& p': {
        fontSize: 22,
        lineHeight: 0.91,
      },
    },
  },
});

export default styles;
