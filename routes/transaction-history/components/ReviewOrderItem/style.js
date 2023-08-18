const styles = (theme) => ({
  header: {
    fontSize: 25.2,
    fontWeight: 'bold',
    lineHeight: 'normal',
    textAlign: 'center',
    color: '#000000',
    padding: '31px 0 41px',
  },
  orderDetailsContainer: {
    padding: '0 26px 26px',
  },
  companyName: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000',
  },
  orderNumber: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.2,
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',

    '& > p': {
      fontSize: 12,
      lineHeight: 1.67,
      letterSpacing: 0.2,
      color: '#000000',
      marginRight: 10,
    },
  },
  status: {
    width: 80,
    height: 22,
    borderRadius: 21.5,
    backgroundColor: '#ffce53',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > p': {
      fontSize: 10,
      lineHeight: 1.6,
      letterSpacing: 0.5,
    },
  },
  orderDetailsHeader: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#dbdbdb',
  },
  orderDetailsItem: {
    padding: '14px 0',
    width: '25%',

    '&:first-child': {
      padding: '14px 26px',
    },
  },
  productContainer: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  productItem: {
    padding: '25px 0',
    width: '25%',

    '&:first-child': {
      padding: '25px 10px 25px 26px',
    },

    '&:last-child': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  productDetails: {
    display: 'flex',
  },
  productImage: {
    height: 80,
    width: 80,
    marginRight: 14,
    objectFit: 'cover',
  },
  productName: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 7,
  },
  productVariant: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 7,
  },
  productOption: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  productSku: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  productQty: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  buildringContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    left: '12rem',

    '& > p': {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 0.32,
      color: '#000',
    },
  },  
  promotionContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,

    '& > p': {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 0.32,
      color: '#000',
    },
  },
  buildring: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius: 5,
    border: 'solid 1px #000',
    height: 20,
    padding: 2,
    marginRight: 6,

    '& > img': {
      marginRight: 5,
    },

    '& > p': {
      fontSize: 9,
      fontWeight: 'bold',
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: '#000',
    },
  },
  promotion: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 5,
    border: 'solid 1px #000',
    height: 20,
    padding: 2,
    marginRight: 6,

    '& > img': {
      marginRight: 5,
    },

    '& > p': {
      fontSize: 9,
      lineHeight: 1.78,
      letterSpacing: 1.5,
      color: '#ffffff',
    },
  },
  productPriceContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  salePrice: {
    fontSize: 14.7,
    letterSpacing: 0.25,
    color: '#000',
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 12,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.3)',
    textDecoration: 'line-through',
  },
  normalPrice: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
  },
  productGst: {
    fontSize: 10,
    lineHeight: 2,
    letterSpacing: 0.17,
    color: '#000000',
  },
  reviewSectionContainer: {
    margin: '0 26px',
    padding: '20px 0 34px',
    borderTop: '1px solid #e4e4e4',
  },
  ratingList: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 23,

    '& > p': {
      width: 333,
      marginRight: 25,
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  imageList: {
    display: 'flex',
    margin: '6px 0 23px',
  },
  imageContainer: {
    width: 111,
    height: 111,
    borderRadius: 13,
    border: 'solid 1px #dbdbdb',
    marginRight: 32,
    position: 'relative',
  },
  image: {
    width: 111,
    height: 111,
    borderRadius: 13,
  },
  removePhotoIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    cursor: 'pointer',
  },
  addPhotoContainer: {
    width: 111,
    height: 111,
    borderRadius: 13,
    border: 'solid 1px #dbdbdb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    '&  p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  reviewLabel: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#989898',
    marginBottom: 16,
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    margin: '26px auto 0',
    position: 'relative',
  },
  cancelBtn: {
    width: 161,
    height: 43,
    border: 'solid 1px #ebebeb',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2.92,
    letterSpacing: 0.43,
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: 27,
  },
  confirmBtn: {
    width: 161,
    height: 43,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2.92,
    letterSpacing: 0.43,
    color: '#ffffff',

    '&:hover': {
      border: '1px solid black',
      background: 'white',
      color: 'black',
    },
  },
  anonymousContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 10,

    '& > p': {
      fontSize: 12,
      lineHeight: 1.67,
      letterSpacing: 0.2,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('sm')]: {
      position: 'relative',
      bottom: 0,
      marginTop: 10,
    },
  },
  checkbox: {
    padding: 0,
    marginRight: 12,
  },
});

export default styles;
