const styles = () => ({
  productCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    height: 'fit-content',
    borderRadius: 5,
    border: '1px solid transparent',
    width: '100%',
    padding: 5,
  },
  productCardIsAddedWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    height: 'fit-content',
    borderRadius: 5,
    border: '1px solid #e4e4e4',
    width: '100%',
    padding: 5,
  },
  productImageContainer: {
    position: 'relative',
  },
  featuredTagWrapper: {
    position: 'absolute',
    top: 4,
    left: 4,
  },
  productImage: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  ribbonsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
  },
  discountWrapper: {
    marginRight: 2,
    padding: '3px 0',
    width: 32,
    textAlign: 'center',
    backgroundColor: '#000',
    position: 'relative',

    '&::after': {
      content: '""',
      width: 0,
      height: 0,
      left: 0,
      bottom: -5,
      position: 'absolute',
      borderColor: 'transparent #000',
      borderStyle: 'solid',
      borderWidth: '0 16px 6px',
    },

    '& p': {
      fontSize: 9,
      fontWeight: 'bold',
      lineHeight: 1.07,
      color: '#ffffff',
    },
  },
  productInfoContainer: {
    position: 'relative',
    width: '100%',
  },
  productLabelWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5px 0',
    height: 14,
  },
  productNameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.87)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  threeDIconButton: {
    padding: 0,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'transparent',
    },
  },
  productPriceWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 40,
    margin: '8px 0 2px',
  },
  salePrice: {
    fontSize: 19.9,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: '#000',
    marginRight: 4,
  },
  originalPrice: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.14,
    letterSpacing: 0.25,
    color: '#9e9e9e',
    textDecoration: 'line-through',
  },
  priceText: {
    fontSize: 19.9,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: '#000000',
  },
  merchant: {
    fontSize: 9,
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
  },

  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 35,

    '& > img': {
      height: 15,
      marginRight: 5,
    },

    '& > p': {
      fontSize: 14,
      lineHeight: 2.5,
    },
  },
});

export default styles;
