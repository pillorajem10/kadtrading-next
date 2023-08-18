const styles = (theme) => ({
  roundDiamond: {
    width: 30,
    height:30,

    [theme.breakpoints.only('md')]: {
      width: 20,
      height:20,
    },

    [theme.breakpoints.only('sm')]: {
      width: 20,
      height:20,
    },
  },
  marquiseDiamond: {
    width: 32,
    height:32,

    [theme.breakpoints.only('md')]: {
      width: 22,
      height:20,
    },

    [theme.breakpoints.only('sm')]: {
      width: 22,
      height:20,
    },
  },
  pearDiamond: {
    width: 35,
    height:35,

    [theme.breakpoints.only('md')]: {
      width: 23,
      height:23,
    },

    [theme.breakpoints.only('sm')]: {
      width: 23,
      height:23,
    },
  },
  emeraldDiamond: {
    width: 30,
    height:30,

    [theme.breakpoints.only('md')]: {
      width: 20,
      height:20,
    },

    [theme.breakpoints.only('sm')]: {
      width: 20,
      height:20,
    },
  },
  princessDiamond: {
    width: 30,
    height:30,

    [theme.breakpoints.only('md')]: {
      width: 20,
      height:20,
    },

    [theme.breakpoints.only('sm')]: {
      width: 20,
      height:20,
    },
  },
  ovalDiamond: {
    width: 30,
    height:30,

    [theme.breakpoints.only('md')]: {
      width: 20,
      height:20,
    },

    [theme.breakpoints.only('sm')]: {
      width: 20,
      height:20,
    },
  },
 diamondBackgroundBlack: {
   border: 'solid 1px #CACACA',
   display: 'flex',
   width: 60,
   marginRight: 5,
   padding: 10,
   justifyContent: 'center',
   cursor: "pointer",
   alignItems: 'center',
   marginBottom: 10,

   [theme.breakpoints.only('md')]: {
     width: 30,
     height:35,
   },

   [theme.breakpoints.only('sm')]: {
     width: 30,
     height:35,
   },

   [theme.breakpoints.only('xs')]: {
     width: 40,
     height:40,
   },
 },
 diamondBackgroundRed: {
   border: 'solid 1px #780000',
   display: 'flex',
   marginBottom: 10,
   width: 60,
   alignItems: 'center',
   marginRight: 5,
   padding: 10,
   justifyContent: 'center',
   cursor: "pointer",

   [theme.breakpoints.only('md')]: {
     width: 30,
     height:35,
   },

   [theme.breakpoints.only('sm')]: {
     width: 30,
     height:35,
   },

   [theme.breakpoints.only('xs')]: {
     width: 40,
     height:40,
   },
 }
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
  caratSliderWrapper: {
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
  caratRangeValue: {
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
