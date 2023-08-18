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
   marginRight: 10,
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
 },
 diamondBackgroundRed: {
   border: 'solid 1px #780000',
   display: 'flex',
   marginBottom: 10,
   width: 60,
   alignItems: 'center',
   marginRight: 10,
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
 }
});

export default styles;
