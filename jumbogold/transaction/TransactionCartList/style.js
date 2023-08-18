const styles = (theme) => ({
  productWrapper: {
    padding: 14,
    borderRadius: 5,
    borderBottom: '2px dashed #f5f5f5',
    display: 'flex',
    position: 'relative',
  },
  productInfoWrapper: {
    width: '60%',
    display: 'flex',

    [theme.breakpoints.only('sm')]: {
      width: '50%',
    },
  },
  productPriceWrapper: {
    width: '20%',
    paddingLeft: 46,

    [theme.breakpoints.only('md')]: {
      paddingLeft: 30,
    },

    [theme.breakpoints.only('sm')]: {
      width: '25%',
      paddingLeft: 20,
    },
  },
  productQuantityWrapper: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',

    [theme.breakpoints.only('sm')]: {
      width: '25%',
    },
  },
  productImage: {
    height: 110,
    objectFit: 'contain',
    marginRight: 20,
  },
  productName: {
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
  },
  productSKU: {
    fontSize: 9,
    lineHeight: 1.78,
    color: 'rgba(93, 93, 93, 0.5)',
  },
  productVariantPrice: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '8px 0',
  },
  productOptionPrice: {
    fontSize: 12.6,
    lineHeeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  productPromotionWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '11px 0 5px',
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
  productPriceInnerWrapper: {
    display: 'flex',
    alignItems: 'baseline',
  },
  productDiscountPrice: {
    fontSize: 14.7,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  productSalePrice: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  productOriginalPrice: {
    fontSize: 12,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 5,
    textDecoration: 'line-through',
  },
  productGST: {
    fontSize: 10,
    color: '#000',
    letterSpacing: 0.17,
    marginTop: 5,
  },
  productQuantityIcon: {
    fontSize: 20,
    cursor: 'pointer',
  },
  productQuantity: {
    fontSize: 16.8,
    lineHeight: 1.43,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.3)',
    margin: '0 25px',
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: 16,
    right: 16,
    fontSize: 20,
  },
});

export default styles;
