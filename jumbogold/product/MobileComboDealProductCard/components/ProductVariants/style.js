const styles = () => ({
  productVariants: {
    margin: '8px 0',
    borderRadius: 5,
    border: 'solid 1px #e4e4e4',
    backgroundColor: '#ffffff',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productVariantTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  productVariantColor: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    marginRight: 5,
  },
  productVariantText: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: '#000000',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  productVariantPriceWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  productVariantPrice: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: '#000000',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWrapper: {
    borderRadius: 5,
    boxShadow: '0 3px 4px 0 rgba(167, 167, 167, 0.5), 0 2px 10px 0 #000000',
    backgroundColor: '#ffffff',
    margin: '0 18px',
    outline: 'none',
    width: '100%',
  },
  productVariantItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    margin: '5px 0',

    '&:hover': {
      backgroundColor: '#f6f6f6',
    },

    '&:hover p': {
      fontWeight: 'bold',
    },
  },
  productVariantItemSelected: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    margin: '5px 0',

    '& p': {
      fontWeight: 'bold',
    },

    '&:hover': {
      backgroundColor: '#f6f6f6',
    },

    '&:hover p': {
      fontWeight: 'bold',
    },
  },
  productVariantItemColor: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    marginRight: 11,
  },
  productVariantItemText: {
    fontSize: 13.5,
    fontWeight: 300,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: ' #000000',
  },
  productVariantItemPrice: {
    fontSize: 13.5,
    fontWeight: 300,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: ' #000000',
    marginRight: 30,
  },
  variantRadioButton: {
    padding: '0px !important',
  },
});

export default styles;
