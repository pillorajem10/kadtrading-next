const styles = () => ({
  header: {
    padding: '18px 0 39px',
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  expandIcon: {
    padding: '0 12px',
  },
  userInfoExpander: {
    backgroundColor: '#ffffff',
    border: '1px solid #f5f5f5',
    boxShadow: 'none',
    width: '100%',
    borderRadius: 5,

    '& .MuiIconButton-root': {
      padding: 0,
    },

    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  userInfoContainer: {
    padding: '13px 12px 13px 14px',
    minHeight: 'auto',
  },
  userInfoHeader: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
  },
  userInfoInnerContainer: {
    padding: '7px 13px 11px',
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
  userDivider: {
    height: 1,
    width: '100%',
    opacity: 0.06,
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    margin: '18px 0',
  },
  createTimeContainer: {
    backgroundColor: '#f7f7f7',
    padding: '2px 10px',
    marginTop: 25,

    '& > p': {
      fontSize: 12,
      lineHeight: 1.67,
      letterSpacing: 0.2,
      color: '#000000',
    },
  },
  transactionOrderContainer: {
    backgroundColor: '#fff',
    padding: '9px 10px',
    display: 'flex',
    width: '100%',

    '& > div': {
      width: '100%',

      '& > p': {
        fontSize: 14.7,
        fontWeight: 'bold',
        lineHeight: 1.36,
        letterSpacing: 0.25,
        color: '#000000',
      },

      '& p:first-child': {
        marginBottom: 5,
      },
    },
  },
  amountPaid: {
    fontSize: '16.8px !important',
    fontWeight: 'bold !important',
    lineHeight: '1.67 !important',
    letterSpacing: '0.5 !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  voucherCodeContainer: {
    padding: '18px 10px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #f5f5f5',

    '& p:first-child': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& p:last-child': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#000',
    },
  },
  orderDetailsContainer: {
    padding: '40px 0',
  },
  companyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,

    '& > img': {
      marginRight: 16,
    },
  },
  companyName: {
    fontSize: 14.7,
    fontWeight: 'bold',
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
  },
  statusContainer: {
    display: 'flex',

    '& > p': {
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 1.67,
      letterSpacing: 0.2,
      color: '#000000',
      marginRight: 10,
    },
  },
  status: {
    width: 80,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,

    '& > p': {
      fontSize: 10,
      fontWeight: 'bold',
      lineHeight: 1.6,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  orderSummaryContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginTop: 7,

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
      width: '50%',
    },

    '& p:last-child': {
      textAlign: 'right',
    },
  },
  voucherCode: {
    fontSize: 12,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  orderTotalContainer: {
    backgroundColor: '#fff',
    padding: '14px 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,

    '& p:first-child': {
      fontSize: 14.7,
      fontWeight: 'bold',
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#000000',
    },

    '& span:first-child': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#000000',
    },

    '& span:last-child': {
      fontSize: 14.7,
      fontWeight: 'bold',
      lineHeight: 1.66,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  divider: {
    boxShadow: 'inset 0 1px 3px 3px rgba(238, 238, 238, 0.5)',
    backgroundColor: '#f3f3f3',
    height: 16,
    margin: '0 -22px',
  },
  backButton: {
    width: '100%',
    height: 43,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 2.5,
    color: '#ffffff',
    marginTop: 30,
  },
});

export default styles;
