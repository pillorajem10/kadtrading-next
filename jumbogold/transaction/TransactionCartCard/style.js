const styles = (theme) => ({
  productWrapper: {
    borderRadius: 5,
    border: 'solid 1px #f5f5f5',
    marginBottom: 20,

    '& .MuiButton-root.Mui-disabled': {
      backgroundColor: '#f6f6f6',
      color: '#ffffff',
    },
  },
  cartPageWrapper: {
    borderBottom: '2px dashed #f5f5f5',
  },

  productUpperContainer: {
    padding: 14,
    borderBottom: 'solid 1px #f5f5f5',
    position: 'relative',

    [theme.breakpoints.only('sm')]: {
      padding: 10,
    },

    [theme.breakpoints.only('xs')]: {
      padding: 10,
    },
  },

  productBottomContainer: {
    padding: 8,
    display: 'flex',
    justifyContent: 'space-between',
  },
  productInfoWrapper: {
    display: 'flex',

    '& > div': {
      width: '100%',
    },
  },
  productImage: {
    height: 110,
    objectFit: 'contain',
    marginRight: 25,
    
    [theme.breakpoints.only('sm')]: {
      height: 50,
    },

    [theme.breakpoints.only('xs')]: {
      height: 50,
    },

  },
  productNameWrapper: {
    width: '90%',
  },
  productName: {
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',

    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 12,
    },
  },
  productSKU: {
    fontSize: 9,
    fontWeight: 500,
    lineHeight: 1.78,
    color: 'rgba(93, 93, 93, 0.5)',
    marginTop: 5,
  },
  productVariantWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 8,
  },
  productVariant: {
    fontSize: 12.6,
    lineHeeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  productOptionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  productOption: {
    fontSize: 12.6,
    lineHeeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
  },











  buildRingWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
  buildRingTag: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'gold',
    marginRight: 6,
    padding: 3,
    border: '1px solid black',
  },
  buildRingIcon: {
    height: 16,
    width: 16,
    marginRight: 5,
  },
  buildRingText: {
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#000',
  },
  
  
  
  
  
  
  
  
  
  productPromotionWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
  productPromotionTag: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#000',
    marginRight: 6,
    padding: 3,
  },
  productPromotionIcon: {
    height: 16,
    width: 16,
    marginRight: 5,
  },
  productPromotionText: {
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#ffffff',
  },
  productPromotionName: {
    fontSize: 10,
    letterSpacing: 0.32,
    color: '#000',
  },
  productQuantityWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
  },
  productQuantityIcon: {
    fontSize: 20,
    cursor: 'pointer',
  },
  productQuantity: {
    fontSize: 16.8,
    lineHeight: 1.43,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.6)',
    margin: '0 35px',
  },
  checkoutProductQuantity: {
    fontSize: 16.8,
    lineHeight: 1.43,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.3)',

    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 12,
    },    
  },
  productPriceWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  productPriceInnerWrapper: {
    display: 'flex',
    alignItems: 'baseline',
  },
  productSalePrice: {
    fontSize: 14.7,
    letterSpacing: 0.25,
    color: '#000000',
  },
  productDiscountPrice: {
    fontSize: 14.7,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
    marginRight: 3,

    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 12,
    },    
  },
  productOriginalPrice: {
    fontSize: 12,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.3)',
    textDecoration: 'line-through',
  },
  productGST: {
    fontSize: 10,
    lineHeight: 2,
    letterSpacing: 0.17,
    color: '#000000',
  },
  closeIcon: {
    position: 'absolute',
    top: 14,
    right: 10,
    fontSize: 18,
    cursor: 'pointer',
  },
  itemReceivedContainer: {
    marginTop: 16,
    textAlign: 'right',

    '& > p': {
      fontSize: 10,
      lineHeight: 2,
      letterSpacing: 0.17,
      color: '#0b610e',
    },
  },
  itemReceivedBtn: {
    width: 115,
    height: 30,
    borderRadius: 21.5,
    backgroundColor: '#000000',
    fontSize: 9,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

export default styles;
