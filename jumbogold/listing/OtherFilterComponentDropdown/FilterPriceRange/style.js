const styles = (theme) => ({
  filterPriceRange: {
    width: '100%',
    marginRight: 70,
    marginLeft: 30,
    marginTop: 20,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      maxWidth: 300,
      marginLeft: 20,
      marginRight: 20,
    },
  },

  root: {
    width: '100%',
  },

  rail: {
    backgroundColor: '#c3c3c3',
  },

  track: {
    backgroundColor: '#000',
  },

  thumb: {
    backgroundColor: '#000',
  },

  textFieldCont: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  priceFields: {
    width: '40%'
  },

  priceFields1: {
    marginTop: 10,
    width: '100%',
  },

  priceRangeValue: {
    fontSize: 14.7,
    lineHeight: 1.36,
    marginTop: '.5rem',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },

  priceForm: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },

  priceForm1: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  /* expandIcon: {
    height: 24,
    width: 24,
  },
  popper: {
    position: 'absolute !important',
    left: '1px !important',
    top: '0px !important',
    zIndex: 2,
  },
  menuWrapper: {
    boxShadow: '0 1px 4px 0 #8e8d8d',
    borderRadius: 5,
  },
  priceSliderWrapper: {
    backgroundColor: '#ffffff',
    width: 233,
    borderRadius: 5,
    marginTop: 5,

    [theme.breakpoints.only('md')]: {
      width: 180,
    },

    [theme.breakpoints.only('sm')]: {
      width: 150,
    },
  },
  root: {
    width: '98%',
  },
  rail: {
    backgroundColor: '#c3c3c3',
  },
  track: {
    backgroundColor: '#000',
  },
  thumb: {
    width: 13,
    height: 13,
    marginTop: -6,
    borderRadius: 25,
    backgroundColor: '#000',
  },
  priceRangeValue: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2,
    letterSpacing: 0.75,
    color: '#000000',
  },
  valueLabel: {
    top: 25,
    fontSize: 13.3,
    fontWeight: 500,
    lineHeight: 1.8,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.38) !important',
  }, */
});

export default styles;
