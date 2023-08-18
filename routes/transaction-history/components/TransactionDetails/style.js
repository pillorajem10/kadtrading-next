const styles = () => ({
  transactionDetails: {
    display: 'flex',
    flexDirection: 'column',

    '& .MuiButton-root.Mui-disabled': {
      backgroundColor: '#f6f6f6',
      color: '#ffffff',
    },
  },
  orderHeader: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fafafa',
  },
  orderHeaderItem: {
    padding: '14px 0',
    width: '25%',

    '&:first-child': {
      padding: '14px 13px',
    },

    '& > p': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.5)',
    },
  },
  summaryContainer: {
    display: 'flex',
    width: '100%',
  },
  summaryItem: {
    padding: '27px 0 38px',
    width: '25%',

    '&:first-child': {
      padding: '27px 13px 38px',
    },

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#000000',
      fontWeight: 'bold',
    },

    '& p:nth-child(2)': {
      fontSize: 12,
      lineHeight: 1.67,
      letterSpacing: 0.2,
      color: '#000000',
    },
  },
  summaryVoucherCode: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000 !important',
  },
  userInfoContainer: {
    display: 'flex',
    width: '100%',
    padding: '30px 13px',
    backgroundColor: '#fafafa',

    '& > div': {
      width: '50%',
    },
  },
  userInfoHeader: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
    marginBottom: 20,
  },
  userName: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
  userPhone: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 7,
  },
  userAddress: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  orderDetailsContainer: {
    border: 'solid 1px black',
    marginTop: 29,
    paddingBottom: 10,
  },
  companyContainer: {
    padding: '30px 14px 20px',
    display: 'flex',
    justifyContent: 'space-between',
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
    color: '#fff',

    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > p': {
      fontSize: 10,
      lineHeight: 1.6,
      letterSpacing: 0.5,
    },
  },
  contactMerchantButton: {
    width: 210,
    height: 43,
    fontSize: 14,
    lineHeight: 2.5,
    color: '#ffffff',

    '&:hover': {
      border: '1px solid black',
      background: 'white',
      color: 'black',
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
      padding: '14px 12px',
    },
  },
  productContainer: {
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid #e4e4e4',
    position: 'relative',
  },
  productItem: {
    padding: '25px 0',
    width: '25%',

    '&:first-child': {
      padding: '25px 14px',
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
    height: 70,
    width: 100,
    marginRight: 14,
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
  receiveItemButton: {
    width: 115,
    height: 30,
    backgroundColor: '#000000',
    fontSize: 9,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginRight: 14,

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  },
  reviewSuccessText: {
    fontSize: 10,
    lineHeight: 2,
    letterSpacing: 0.17,
    color: '#0b610e',
    marginTop: 10,
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
  orderSummaryContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: 6.5,
  },
  orderSummaryTitle: {
    width: '25%',

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& p:nth-child(2)': {
      fontSize: 12,
      letterSpacing: 0.2,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  orderSummaryValue: {
    width: '50%',

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
      whiteSpace: 'pre-wrap',
    },
  },
  orderTotalContainer: {
    display: 'flex',
    width: '100%',
  },
  orderTotalTitle: {
    padding: '14px 0',
    width: '25%',

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 'bold',
    },
  },
  orderTotalValue: {
    padding: '14px 0',
    width: '50%',
    display: 'flex',

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
      marginRight: 5,
      fontWeight: 'bold'
    },
  },
  orderSummaryGst: {
    fontSize: '12px !important',
    lineHeight: '1.67 !important',
    letterSpacing: '0.2 !important',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  backButton: {
    width: 227,
    height: 43,
    fontSize: 14,
    lineHeight: 2.5,
    color: '#ffffff',
    margin: '70px auto 0',

    '&:hover': {
      border: '1px solid black',
      background: '#fff',
      color: '#000',
    }
  },
});

export default styles;
