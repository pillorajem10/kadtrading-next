const styles = (theme) => ({
  filterClarityRange: {
    width: '100%',
    marginRight: 50,
    marginTop: 20
  },
  textFieldCont: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10
  },
  markLabel: {
    [theme.breakpoints.only('md')]: {
      fontSize: 10,
      fontWeight: 'bolder'
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 10,
      fontWeight: 'bolder'
    },
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
  colorSliderWrapper: {
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
  colorRangeValue: {
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
