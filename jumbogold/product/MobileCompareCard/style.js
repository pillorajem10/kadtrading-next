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
      width: '100%',
      padding: '0 !important',
      marginBottom: '2rem',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 !important',
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










  tabsWrapper: {
    position: 'relative',
    width: '100%',

    ' & > .MuiTabs-root': {
      minHeight: '100%',
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    },
  },
  tabIndicator: {
    backgroundColor: 'transparent',
  },
  tabRoot: {
    color: '#9d9d9d',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    transition: 'all ease-in-out .3s',
    padding: 10,
    minHeight: 37,
    minWidth: 130,

    '&$tabSelected': {
      fontSize: 9,
      fontweight: 'bold',
      lineHeight: 1.78,
      letterspacing: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: '#f6f6f6',
    },

    '&:focus': {
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('sm')]: {
      minWidth: 90,
    },

    [theme.breakpoints.only('xs')]: {
      minWidth: 70,
    },
  },


  attributesContainer: {
    height: 153,
    overflow: 'hidden',
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      height: 230,
    },
  },
  attributesWrapper: {
    display: 'flex',
    padding: '2px 20px',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.text.hint}`,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '2px 10px',
    },
  },
  attributesName: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 2,
    color: 'rgba(0, 0, 0, 0.87)',
    flex: 1,
  },
  attributesValue: {
    fontSize: 12,
    lineHeight: 2,
    color: 'rgba(0, 0, 0, 0.87)',


    [theme.breakpoints.only('sm')]: {
      flex: 2,
    },
  },
});

export default styles;
