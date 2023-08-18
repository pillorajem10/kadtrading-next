const styles = (theme) => ({
  filterPriceRange: {
    width: 233,
    height: 30,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    padding: '3px 7px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '.3s',
    marginRight: 21,

    [theme.breakpoints.only('md')]: {
      width: 180,
      marginRight: 13,
    },

    [theme.breakpoints.only('sm')]: {
      width: 135,
      marginRight: 10,
    },

    '& > p': {
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.8)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    '&:hover': {
      border: '1px solid #000 !important',
      transition: '.3s',
    },
  },
  expandIcon: {
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
  },
});

export default styles;
