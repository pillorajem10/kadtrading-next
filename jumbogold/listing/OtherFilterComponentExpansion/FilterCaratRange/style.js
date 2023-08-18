const styles = (theme) => ({
  layout: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',
  },
  headerWrapper: {
    height: 64,
    padding: '10px 13px 10px 0',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bolder',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  expandIcon: {
    width: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 40px',
  },
  priceRangeValue: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sliderRoot: {
    width: '85%',
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
  valueLabel: {
    top: 25,
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,

    '& span': {
      color: 'rgba(0, 0, 0, 0.87) !important',
    },
  },

  caratForm: {
    marginTop: -6,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  caratFields: {
    marginRight: 4,
  },

  btn: {
    cursor: 'pointer',
    fontSize: 14,
    width: '20%',
    height:  40.5,
    border: '.5px solid #000000',
    backgroundColor: 'transparent',
    color: '#000'
  }
});

export default styles;
