const styles = (theme) => ({
  inputVoucherCodeContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    padding: '27px 0',
    borderRadius: 5,
    border: 'solid 2px #f5f5f5',
  },
  transactionConfirmOrder: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingTop: 40,

    '& .MuiButton-contained.Mui-disabled': {
      opacity: 0.4,
      borderRadius: 21.5,
      backgroundColor: '#000',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 2.5,
      color: '#ffffff',
    },
  },
  container: {
    width: '50%',

    [theme.breakpoints.only('md')]: {
      width: '55%',
    },

    [theme.breakpoints.only('sm')]: {
      width: '73%',
    },
  },
  confirmOrderDetailsWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 12px',
    borderBottom: '2px dashed #f5f5f5',
    width: 'fit-content',

    '&:last-child': {
      borderBottom: 'none',
    },
  },
  confirmOrderWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 12px',
  },
  wrapperTitle: {
    width: 156,
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  wrapperValue: {
    width: 170,
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  voucherWrapper: {
    width: 470,
    display: 'flex',
    alignItems: 'center',
    padding: '5px 12px',
  },
  voucherTitle: {
    width: 156,
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  voucherInnerWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 156px)',

    '& > div': {
      width: '50%',
    },
  },
  addVoucherIcon: {
    cursor: 'pointer',
    height: 20,
    width: 20,
    margin: 5,
  },
  closeVoucherIcon: {
    cursor: 'pointer',
    marginLeft: 10,
  },
  enterIcon: {
    cursor: 'pointer',
  },
  voucherTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 3,
    width: '100%',
    borderBottom: '1px solid rgba(255, 113, 0, 0.12)',
  },
  voucherDiscountText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  voucherCodeWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  voucherCodeText: {
    fontSize: 14.7,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
  },
  voucherTextField: {
    border: 'none',
    fontSize: 14.7,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    width: '100%',
    textTransform: 'uppercase',

    '&:focus': {
      outline: 'none',
    },
  },
  alertMessageWrapper: {
    width: 330,
  },
  orderTotalTitle: {
    width: 156,
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
  },
  orderTotalValue: {
    fontSize: 21,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  confirmOrderButton: {
    width: 227,
    height: 43,
    borderRadius: 21.5,
    backgroundColor: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 2.5,
    color: '#ffffff',
    boxShadow: 'none',
    marginLeft: 23,

    [theme.breakpoints.only('md')]: {
      width: 210,
    },

    [theme.breakpoints.only('sm')]: {
      width: 200,
    },

    '&:hover': {
      color: '#000',
      border: '1px solid #000',
      backgroundColor: '#fff',
      boxShadow: 'none',
    },    
    
  },
  divider: {
    margin: '5px 0',
  },
});

export default styles;
