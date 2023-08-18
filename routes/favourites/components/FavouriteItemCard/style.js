import unfavouriteSteps from 'public/assets/images/animation-button/favorite/unfav-strips.png';

const styles = () => ({
  favouriteItem: {
    padding: '40px 9px 0',
  },
  productImage: {
    width: '100%',
    marginBottom: 23,
  },
  productName: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.87)',
    height: 48,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  },
  productPrice: {
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 5,
  },
  brandContainer: {
    display: 'flex',

    '& p:first-child': {
      width: 40,
      fontSize: 9,
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& p:last-child': {
      fontSize: 9,
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  merchantContainer: {
    display: 'flex',
    height: 45,
    borderBottom: '1px solid #f5f5f5',

    '& p:first-child': {
      width: 40,
      fontSize: 9,
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& p:last-child': {
      fontSize: 9,
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)',
      whiteSpace: 'pre-wrap',
    },
  },
  favouriteItemFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',

    '& > div:last-child': {
      display: 'flex',
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
    marginRight: 15,
    cursor: 'pointer',
  },
  productEnquiryContainer: {
    padding: '24px 16px',
    backgroundColor: '#ffffff',
  },
  productEnquiryText: {
    fontSize: 12,
    lineHeight: 1.34,
    color: 'rgba(0, 0, 0, 0.38)',
    marginBottom: 5,
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
  sentText: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    letterSpacing: 0.1,
  },
});

export default styles;
