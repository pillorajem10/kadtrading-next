const styles = (theme) => ({
  productNameInfo: {
    marginBottom: 29,
  },
  productLabelsWrapper: {
    display: 'flex',
    marginBottom: 3,
  },
  productInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  productSKU: {
    fontSize: 12,
    letterSpacing: 0.09,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.2)',
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 3,

    [theme.breakpoints.only('sm')]: {
      fontSize: 20,
    },
  },
  merchantWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  merchantLabel: {
    fontSize: 12,
    marginRight: 8,
    textTransform: 'uppercase',
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  merchantText: {
    cursor: 'pointer',
    fontSize: 12,
    marginRight: 8,
    textTransform: 'uppercase',
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.6)',

    '&:hover': {
      color: '#000',
    },
  },
  optionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconButton: {
    padding: 5,

    '& svg': {
      height: 20,
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  shareOptionsPopover: {
    left: `-10px !important`,
    height: 0,
    zIndex: 99,
  },
});

export default styles;
