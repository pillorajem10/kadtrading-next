const styles = (theme) => ({
  filterSection: {
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rightFilterSection: {
    display: 'flex',
    alignItems: 'center',
  },
  filterTitle: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 8,
    marginLeft: 25,

    [theme.breakpoints.only('sm')]: {
      marginLeft: 15,
    },
  },
  mobileFilterSection: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
  },
  toggleFilterButton: {
    width: 41,
    height: 40,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    marginRight: 12,
    padding: 8,
    position: 'relative',
  },
  filterIcon: {
    color: theme.palette.text.medium,
    transform: 'rotate(270deg)',
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: 0,

    '& > span.MuiBadge-badge.MuiBadge-anchorOriginTopRightRectangle': {
      backgroundColor: '#000 !important',
      fontSize: 9,
    },
  },






  buildRingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

   [theme.breakpoints.only('md')]: {
      // background: 'pink',
    },

    [theme.breakpoints.only('sm')]: {
      // background: 'green',
    },

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    },

  },

  buildRingBox1: {
    background: 'white',
    borderRadius: 5,
    color: 'black',
    height: 100,
    width: '30%',

    display: 'flex',
    alignItems: 'center',
    padding: 20,
    border: '1px solid black',


   [theme.breakpoints.only('md')]: {
      // background: 'pink',
    },

    [theme.breakpoints.only('sm')]: {
      // background: 'green',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginBottom: '5%',
    },

  },

  buildRingBox2: {
    background: 'black',
    borderRadius: 5,
    color: 'white',
    height: 100,
    width: '30%',

    display: 'flex',
    alignItems: 'center',
    padding: 20,


   [theme.breakpoints.only('md')]: {
      // background: 'pink',
    },

    [theme.breakpoints.only('sm')]: {
      // background: 'green',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginBottom: '5%',
    },
  },

  buildRingText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    cursor: 'pointer',
  },

  buildRingText1: {
    fontSize: '0.7rem'
  },

  buildRingText2: {
    fontSize: '1.5rem'
  },

  buildRingImgBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  buildRingImgWrap: {
    flex: 1,
  },

  buildRingImg: {
    width: '3rem',
    height: '3rem',
  },

  buildRingImgText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  buildRingPrice: {
    fontSize: '0.9rem'
  },

  buildRingAction: {
    cursor: 'pointer',
    fontSize: '0.7rem'
  },  
});

export default styles;
