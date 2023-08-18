const styles = (theme) => ({
  productOptions: {
    marginBottom: 10,
    height: 61,
    position: 'relative',
  },
  productOptionIsAdded: {
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
  productOptionsField: {
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
  productOptionsFieldError: {
    borderRadius: 5,
    border: 'solid 1px #fc2929',
    padding: '11px 19px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',

    '& p': {
      color: '#fc2929',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '6px 10px',
    },
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  productOptionPlaceholder: {
    fontSize: 14.7,
    fontWeight: 300,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('sm')]: {
      fontSize: 11.7,
    },
  },
  productOptionText: {
    fontSize: 14.7,
    fontWeight: 300,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 150,

    [theme.breakpoints.only('sm')]: {
      maxWidth: 120,
      fontSize: 11.7,
    },
  },
  productOptionPrice: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.29,
    letterSpacing: 0.42,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  productOptionList: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    boxShadow: '0 3px 4px 0 rgba(167, 167, 167, 0.5)',
    zIndex: 2,
    minHeight: 44,
    maxHeight: 180,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  productOptionListItem: {
    padding: '11px 19px',
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

    [theme.breakpoints.only('sm')]: {
      padding: '6px 10px',
    },
  },
  productOptionListText: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.15,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('sm')]: {
      fontSize: 11,
    },
  },
  productOptionPriceWrapper: {
    display: 'flex',
  },
  productOptionListPrice: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.29,
    letterSpacing: 0.42,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 5,

    [theme.breakpoints.only('sm')]: {
      fontSize: 11,
    },
  },
  productOptionListOriginalPrice: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.29,
    letterSpacing: 0.42,
    color: 'rgba(0, 0, 0, 0.38)',
    textDecoration: 'line-through',

    [theme.breakpoints.only('sm')]: {
      fontSize: 11,
    },
  },
  clickAwayListenerWrapper: {
    width: '100%',
    margin: 'auto 0',
  },
});

export default styles;
