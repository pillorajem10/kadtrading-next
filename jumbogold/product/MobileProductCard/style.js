const styles = (theme) => ({
  productCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    width: '50%',
    height: 'fit-content',

    '&:nth-child(odd)': {
      padding: '10px 8px 0 0',
    },

    '&:nth-child(even)': {
      padding: '10px 0 0 8px',
    },



    [theme.breakpoints.only('md')]: {
      // background: 'red',
    },

    [theme.breakpoints.only('sm')]: {
      // background: 'green',
    },

    [theme.breakpoints.only('xs')]: {
      // background: 'blue',
      width: '50%',
      // padding: '0 !important',
      marginBottom: '2rem',
    },

  },
  productCardInnerWrapper: {
    width: '100%',
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
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

    [theme.breakpoints.only('xs')]: {
      // height: '12rem',
      // objectFit: 'contain',
    },    
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
    fontSize: '0.7rem',
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
    margin: '5px 0 2px',
  },
  salePrice: {
    fontSize: '1rem',
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
    fontSize: 5,
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
  promotionTextWrapper: {
    borderRadius: 5,
    backgroundColor: '#ffffff',
    border: 'solid 1px #000',
    padding: '7px 6px',
    width: '100%',
    marginTop: 8,

    '& p': {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1,
      color: '#000',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
});

export default styles;
