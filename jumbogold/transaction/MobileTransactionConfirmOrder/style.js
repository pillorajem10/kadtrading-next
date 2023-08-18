const styles = () => ({
  mobileTransactionConfirmOrder: {
    padding: '22px 22px 35px',
    boxShadow: '0 -2px 4px 0 rgba(228, 228, 228, 0.5)',

    '& .MuiButton-contained.Mui-disabled': {
      opacity: 0.4,
      borderRadius: 21.5,
      backgroundColor: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#ffffff',
    },
  },
  inputVoucherCodeContainer: {
    paddingBottom: 18,
  },
  confirmOrderWrapper: {
    display: 'flex',
    padding: '0 10px',
    marginBottom: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperTitle: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  wrapperValue: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  voucherCodeInnerWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  voucherTitle: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  addVoucherIcon: {
    cursor: 'pointer',
    height: 20,
    width: 20,
    margin: '5px 0 5px 5px',
  },
  closeVoucherIcon: {
    cursor: 'pointer',
    marginRight: -5,
  },
  enterIcon: {
    cursor: 'pointer',
  },
  voucherWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px 5px',
    marginBottom: 15,
    borderBottom: '1px solid rgba(255, 113, 0, 0.12)',
  },
  voucherCodeTitle: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  voucherCodeText: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: '#000',
    width: '80%',
    textTransform: 'uppercase',
  },
  voucherTextField: {
    border: 'none',
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    width: '80%',
    textTransform: 'uppercase',

    '&:focus': {
      outline: 'none',
    },
  },
  voucherDiscount: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: '#000',
  },
  serviceFeeDivider: {
    margin: '0 10px',
    backgroundColor: 'rgba(255, 113, 0, 0.12) !important',
  },
  orderTotalTitle: {
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  orderTotalValue: {
    fontSize: 21,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  confirmOrderButton: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    height: 43,
    marginTop: 22,
    backgroundColor: '#000',
    boxShadow: 'none',


    '&:hover': {
      color: '#000',
      border: '1px solid #000',
      backgroundColor: '#fff',
      boxShadow: 'none',
    },
    
  },
  divider: {
    margin: '10px 0',
  },
});

export default styles;
