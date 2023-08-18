const styles = (theme) => ({
  productVariantTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#9d9d9d',
    marginBottom: 7,

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      lineHeight: 1.57,
      letterSpacing: 'normal',
      color: 'rgba(0, 0, 0, 0.3)',
      marginBottom: 5,
    },
  },
  productVariantsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 5,
    },
  },
  emptyOptionVariantContainer: {
    paddingBottom: 0,
    position: 'relative',

    [theme.breakpoints.only('md')]: {
      paddingBottom: 23,
    },

    [theme.breakpoints.only('sm')]: {
      paddingBottom: 23,
    },
  },
  variantContainer: {
    paddingBottom: 45,
    position: 'relative',

    [theme.breakpoints.only('md')]: {
      paddingBottom: 45,
    },

    [theme.breakpoints.only('sm')]: {
      paddingBottom: 45,
    },
  },
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.2)',
    color: theme.palette.text.disabled,
    fontSize: theme.typography.fontSize * 1.2,
    position: 'relative',
  },
  tooltipArrow: {
    color: theme.palette.secondary.main,
  },
  variantWrapper: {
    display: 'flex',
  },
  variantName: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#9d9d9d',
  },
  variantPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.78,
    color: '#000',
    marginLeft: 3,
  },
  variantIconButton: {
    border: `1px solid #c4c4c4`,
    height: 32,
    marginTop: 5,
    marginRight: 8,
    padding: 5,
    width: 32,
  },
  variantIcon: {
    borderRadius: '50%',
    height: 20,
    width: 20,
  },
  variantIconActive: {
    border: `1px solid #000000`,
  },
  variantDisplay: {
    display: 'flex',
  },
  variantDisplayName: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.38)',
    width: 'max-content',
  },
  variantDisplayPrice: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: '#000',
    marginLeft: 5,
  },
});

export default styles;
