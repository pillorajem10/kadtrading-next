const styles = (theme) => ({
  productCardWrapper: {
    margin: 10,

    [theme.breakpoints.only('md')]: {
      margin: 8,
    },

    [theme.breakpoints.only('sm')]: {
      margin: 5,
    },
  },
  merchantProductCardWrapper: {
    width: 'calc((100% / 3) - 20px)',
    margin: 10,

    [theme.breakpoints.only('md')]: {
      width: 'calc((100% / 3) - 16px)',
      margin: 8,
    },

    [theme.breakpoints.only('sm')]: {
      width: 'calc((100% / 3) - 10px)',
      margin: 5,
    },
  },
  gridProductCardWrapper: {
    width: 'calc((100% - 200px) / 3)',

    '&:nth-child(3n+1)': {
      margin: '0 50px 1rem 0',
    },

    '&:nth-child(3n+2)': {
      margin: '0 50px 1rem',
    },

    '&:nth-child(3n+3)': {
      margin: '0 0 1rem 50px',
    },

    [theme.breakpoints.only('md')]: {
      width: 'calc((100% - 120px) / 3)',

      '&:nth-child(3n+1)': {
        margin: '0 30px 1rem 0',
      },

      '&:nth-child(3n+2)': {
        margin: '0 30px 1rem',
      },

      '&:nth-child(3n+3)': {
        margin: '0 0 1rem 30px',
      },
    },

    [theme.breakpoints.only('sm')]: {
      width: 'calc((100% - 60px) / 3)',

      '&:nth-child(3n+1)': {
        margin: '0 15px 1rem 0',
      },

      '&:nth-child(3n+2)': {
        margin: '0 15px 1rem',
      },

      '&:nth-child(3n+3)': {
        margin: '0 0 1rem 15px',
      },
    },
  },
  innerProductCardWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    transition: '0.3s',

    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        boxShadow: '0 2px 4px 0 rgba(191, 191, 191, 0.5)',
        transition: '0.3s',
      },
    },
  },
  gridInnerProductCardWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    transition: '0.3s',

    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        boxShadow: '0 2px 4px 0 rgba(191, 191, 191, 0.5)',
        transition: '0.3s',
      },
    },
  },
  productCardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '14px 15px 12px',
    position: 'relative',

    [theme.breakpoints.only('sm')]: {
      padding: '9px 6px 5px 6px',
    },
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
  },
  featuredTagWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  ribbonsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
  },
  freeGiftWrapper: {
    marginRight: 9,
    padding: '5px 0',
    width: 36,
    textAlign: 'center',
    backgroundColor: '#6900ff',
    position: 'relative',

    '&::after': {
      content: '""',
      width: 0,
      height: 0,
      left: 0,
      bottom: -5,
      position: 'absolute',
      borderColor: 'transparent #6900ff',
      borderStyle: 'solid',
      borderWidth: '0 18px 5px',
    },

    '& p': {
      fontSize: 9,
      fontWeight: 'bold',
      lineHeight: 1.07,
      color: '#ffffff',
    },
  },
  discountWrapper: {
    marginRight: 9,
    padding: '5px 0',
    width: 36,
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
      borderWidth: '0 18px 5px',
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
    margin: '12px 0 15px',
    height: 18,
  },
  productNameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& > a': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  productName: {
    fontSize: 14.7,
    lineHeight: 1.64,
    letterSpacing: 0.1,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    height: 24,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
    alignItems: 'baseline',
    height: 26,
    margin: '1px 0 3px',

    [theme.breakpoints.only('md')]: {
      flexWrap: 'wrap',
    },

    [theme.breakpoints.only('sm')]: {
      flexWrap: 'wrap',
    },
  },
  salePrice: {
    color: '#000',
    fontSize: 19.9,
    fontWeight: 500,
    marginRight: 4,

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  originalPrice: {
    color: '#9e9e9e',
    fontSize: 14,
    fontWeight: 500,
    textDecoration: 'line-through',
    lineHeight: 1.14,
    letterSpacing: 0.15,

    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
  priceText: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: '#000000',

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  merchantName: {
    fontSize: 9,
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
    // textDecoration: 'underline',
    marginBottom: 9,
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      height: 32,
    },
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 35,

    '& > p': {
      fontSize: 14,
      lineHeight: 2.5,
      marginLeft: 5,
    },
  },
  promotionTextWrapper: {
    marginTop: 8,
    borderRadius: 5,
    border: 'solid 1px #000',
    backgroundColor: '#ffffff',
    padding: '7px 6px',
    height: 28,

    '& > p': {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.08,
      color: '#000',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
});

export default styles;
