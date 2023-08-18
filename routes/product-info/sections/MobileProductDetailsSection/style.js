const styles = (theme) => ({
  MobileProductDetailsSection: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    padding: '0 22px',
  },
  productLabelWrapper: {
    display: 'flex',
    paddingBottom: 20,
  },
  productImage: {
    width: '100%',
  },
  productNameInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: 23.9,
    fontWeight: 500,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 3,

    [theme.breakpoints.only('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.1rem',
    },    
  },
  merchantInfoWrapper: {
    display: 'flex',
    marginBottom: 7,
  },
  merchantLabel: {
    fontSize: 12,
    fontWeight: 500,
    marginRight: 7,
    textTransform: 'uppercase',
    lineHeight: 1.34,
    letterSpacing: 2,
    width: 50,
  },
  merchantText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.6)',
    textTransform: 'uppercase',
    // textDecoration: 'underline',
    cursor: 'pointer',
  },
  threeDIconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 50,
  },
  threeDIcon: {
    color: theme.palette.text.disabled,
    display: 'flex',
    flexDirection: 'column',
    height: 55,
    width: 55,
    padding: 0,
    marginTop: -9,
  },
  productVariantsWrapper: {
    marginTop: 13,
    padding: 9,
    backgroundColor: '#f6f6f6',
  },
});

export default styles;
