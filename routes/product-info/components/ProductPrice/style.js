const styles = (theme) => ({
  productPrice: {
    marginBottom: 13,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 43,
    },
  },
  priceFrom: {
    fontSize: 12,
    lineHeight: 'normal',
    letterSpacing: 0.09,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 9,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 10,
    },
  },
  productPriceWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 3,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 2,
    },
  },
  salePriceText: {
    fontSize: 32.4,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: '#000',
    marginRight: 3,

    [theme.breakpoints.only('md')]: {
      fontSize: 25,
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 22,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 25,
    },
  },
  originalPriceText: {
    fontSize: 25,
    lineHeight: 0.96,
    letterSpacing: 0.24,
    color: 'rgba(0, 0, 0, 0.38)',
    textDecoration: 'line-through',

    [theme.breakpoints.only('md')]: {
      fontSize: 22,
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 18,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 18,
    },
  },
  priceText: {
    fontSize: 32.4,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('md')]: {
      fontSize: 25,
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 22,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 25,
    },
  },
  priceRemark: {
    fontSize: 12,
    letterSpacing: 0.09,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.2)',
  },
  gstLabel: {
    fontSize: 12,
    letterSpacing: 0.09,
    lineHeight: 'normal',
    color: '#000000',
  },
  discountWrapper: {
    padding: '4px 6px',
    backgroundColor: '#ff6a01',
    textAlign: 'center',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33,
    color: '#ffffff',

    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
    },
  },
  productEnquiryButton: {
    width: 144,
    height: 43,
    borderRadius: 21.5,
    border: '1px solid #e4e4e4',
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
  },
});

export default styles;
