const styles = (theme) => ({
  productVariants: {
    margin: '10px 0',
    position: 'relative',
  },
  productVariantIsAdded: {
    borderRadius: 5,
    border: 'solid 1px #000',
    padding: '11px 19px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: 0.4,

    [theme.breakpoints.only('sm')]: {
      padding: '6px 10px',
    },
  },
  productVariantsField: {
    borderRadius: 5,
    border: 'solid 1px #e4e4e4',
    padding: '11px 19px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      padding: '6px 10px',
    },
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  productVariantTextWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  productVariantColor: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    marginRight: 8,
  },
  productVariantText: {
    fontSize: 14.7,
    fontWeight: 300,
    letterSpacing: 0.25,
    color: '#000000',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 90,

    [theme.breakpoints.only('md')]: {
      width: 80,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 70,
      fontSize: 11.7,
    },
  },
  productVariantPriceWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  productVariantPrice: {
    fontSize: 14.7,
    fontWeight: 300,
    letterSpacing: 0.25,
    color: '#000000',
    marginRight: 8,

    [theme.breakpoints.only('sm')]: {
      fontSize: 11.7,
      marginRight: 0,
    },
  },
  productVariantList: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    boxShadow: '0 3px 4px 0 rgba(167, 167, 167, 0.5)',
    zIndex: 2,
    minHeight: 44,
    maxHeight: 163,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  productVariantItem: {
    padding: '4px 40px 4px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '3px 0',
    width: '100%',
    position: 'relative',

    '&:hover': {
      backgroundColor: '#f6f6f6',
    },

    '&:hover p': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.only('md')]: {
      padding: '4px 30px 4px 10px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '4px 30px 4px 10px',
    },
  },
  clickAwayListenerWrapper: {
    width: '100%',
    margin: 'auto 0',
    position: 'relative',
  },
  productVariantListDropdownIcon: {
    position: 'absolute',
    top: 6,
    right: 20,

    [theme.breakpoints.only('md')]: {
      top: 6,
      right: 15,
    },

    [theme.breakpoints.only('sm')]: {
      top: 4,
      right: 10,
    },
  },
});

export default styles;
