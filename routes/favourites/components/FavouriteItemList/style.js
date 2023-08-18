import unfavouriteSteps from 'public/assets/images/animation-button/favorite/unfav-strips.png';

const styles = (theme) => ({
  favouriteItem: {
    padding: '38px 19px 38px 46px',
    borderRadius: 10,
    border: '1px solid transparent',
    display: 'flex',
    marginBottom: 15,

    '&:hover': {
      border: '1px solid #e4e4e4',
    },

    [theme.breakpoints.only('md')]: {
      border: '1px solid #e4e4e4',
    },

    [theme.breakpoints.only('sm')]: {
      padding: 20,
      marginBottom: 20,
      border: '1px solid #e4e4e4',
    },
  },
  productImage: {
    height: 195,
    marginRight: 56,

    [theme.breakpoints.only('sm')]: {
      height: 160,
      marginRight: 30,
    },
  },
  container: {
    width: '100%',
  },
  productInfoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '& > div:first-child': {
      width: '90%',
    },

    '& > div:last-child': {
      width: '10%',
    },
  },
  productName: {
    fontSize: 23.9,
    fontweight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 4,

    [theme.breakpoints.only('sm')]: {
      fontSize: 21,
    },
  },
  merchantContainer: {
    display: 'flex',
    marginBottom: 3,
    textTransform: 'uppercase',

    '& > p': {
      width: 90,
      fontSize: 12,
      lineHeight: 1.34,
      letterSpacing: 2,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& > a > p': {
      fontSize: 12,
      lineHeight: 1.34,
      letterSpacing: 2,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    [theme.breakpoints.only('sm')]: {
      '& > p': {
        width: 70,
        fontSize: 9,
      },

      '& > a > p': {
        fontSize: 9,
      },
    },
  },
  brandContainer: {
    display: 'flex',
    textTransform: 'uppercase',

    '& > p': {
      width: 90,
      fontSize: 12,
      lineHeight: 1.34,
      letterSpacing: 2,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& > a > p': {
      fontSize: 12,
      lineHeight: 1.34,
      letterSpacing: 2,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    [theme.breakpoints.only('sm')]: {
      '& > p': {
        width: 70,
        fontSize: 9,
      },

      '& > a > p': {
        fontSize: 9,
      },
    },
  },
  productPrice: {
    fontSize: 32.4,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '31px 0 29px',

    [theme.breakpoints.only('sm')]: {
      fontSize: 23.9,
    },
  },
  iconGroup: {
    textAlign: 'right',
    position: 'relative',
  },
  iconButton: {
    height: 25,
    position: 'relative',
    width: 25,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  unheart: {
    background: `url(${unfavouriteSteps})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    cursor: 'pointer',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transitionProperty: 'background-position',
    transitionTimingFunction: 'steps(46)',
    transitionDuration: '0s',
    width: '100%',
  },
  unheartActive: {
    transitionDuration: '2s',
    backgroundPosition: '-1150px 0',
  },
  emailIcon: {
    marginTop: 20,
    cursor: 'pointer',
  },
  threeDButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  productEnquiryContainer: {
    marginTop: 10,
  },
  productEnquiryFooter: {
    paddingTop: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    '& > p': {
      fontSize: 12,
      lineHeight: 1.34,
      letterSpacing: 2,
      color: 'rgba(0, 0, 0, 0.38)',
      textTransform: 'uppercase',
      cursor: 'pointer',
    },
  },
  submitBtn: {
    width: 96,
    height: 32,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
  },
  sentContainer: {
    padding: '45px',

    '& > p': {
      textAlign: 'center',
      width: 350,
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export default styles;
