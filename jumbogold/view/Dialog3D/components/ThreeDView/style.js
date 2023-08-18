const styles = (theme) => ({
  cta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  background1: {
    width: 200,
    [theme.breakpoints.only('xs')]: {
      width: 125,
    },
    [theme.breakpoints.only('sm')]: {
      width: 125,
    },
    transform: 'scaleX(-1)',
  },
  backgroundBottomUnit1: {
    bottom: -5,
    position: 'absolute',
    left: 0,
    [theme.breakpoints.only('xs')]: {
      bottom: -5,
      left: 0,
    },
    [theme.breakpoints.only('sm')]: {
      bottom: -5,
      left: 0,
    },
  },
  backgroundTopUnit1: {
    right: 0,
    position: 'absolute',
    top: 0,
    // zIndex: -1,
    [theme.breakpoints.only('xs')]: {
      top: 0,
      right: 0,
    },
    [theme.breakpoints.only('sm')]: {
      top: 0,
      right: 0,
    },
  },
  divider: {
    width: '32%',
  },
  formContainer: {
    // alignItems: "center",
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: "center",
    marginLeft: 80,
    // maxWidth: 1200,
    width: '53%',
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
      marginLeft: 0,
      width: '100%',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 0,
      marginLeft: 0,
      width: '100%',
    },
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    // flexDirection: "column",
    justifyContent: 'center',
  },
  formText: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    // marginTop: theme.spacing(1),
    width: '100%',
  },
  image: {
    position: 'absolute',
    top: 210,
    right: 50,
    width: 200,
    [theme.breakpoints.only('xs')]: {
      top: 290,
      right: 12,
      width: 120,
    },
    [theme.breakpoints.only('sm')]: {
      top: 290,
      right: 12,
      width: 120,
    },
  },
  layout1: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    width: 929,
    height: 390,
    background: '#fff',
    padding: 20,
    position: 'relative',
    borderRadius: 10,
    [theme.breakpoints.only('xs')]: {
      width: '88%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '88%',
    },
    [theme.breakpoints.only('md')]: {
      width: '87%',
    },
  },
  button1: {
    color: theme.palette.text.high,
    width: 180,
    background: '#ffffff',
    [theme.breakpoints.only('xs')]: {
      width: '46%', // 135
      fontSize: '75%',
    },
    [theme.breakpoints.only('sm')]: {
      width: 140,
    },
  },
  button2: {
    color: theme.palette.text.high,
    width: 180,
    background: '#000',
    [theme.breakpoints.only('xs')]: {
      width: '46%', // 135
      fontSize: '75%',
    },
    [theme.breakpoints.only('sm')]: {
      width: 140,
    },
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  marginWide: {
    display: 'flex',
    margin: 10,
  },
  subText: {
    fontSize: 18,
    lineHeight: 1.94,
    [theme.breakpoints.only('xs')]: {
      fontSize: 12.2,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 14.2,
    },
  },
  text: {
    color: '#000',
    fontSize: 25.2,
    fontWeight: 'bold',
    marginBottom: 27,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 16.2,
    },
  },
  background: {
    width: 400,
  },
  backgroundBottomUnit: {
    bottom: -300,
    position: 'absolute',
    left: -170,
  },
  backgroundTopUnit: {
    right: -230,
    position: 'absolute',
    top: -300,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10%',
    paddingRight: '10%',
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 30,
      paddingRight: 10,
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: 20,
      paddingRight: 0,
    },
  },
  button: {
    borderRadius: '5px !important',
    textTransform: 'none',
    width: 350,
  },
  buttonUnit: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  grow: {
    flexGrow: 1,
    marginLeft: 'auto',
  },
  icon: {
    fontSize: theme.typography.fontSize * 2,
  },
  iconMuted: {
    color: theme.palette.text.disabled,
    cursor: 'pointer',
    fontSize: theme.typography.fontSize * 2,
  },
  iconButton: {
    color: theme.palette.common.black,
    paddingBottom: theme.spacing(0.5),
    paddingTop: theme.spacing(0.5),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  iconButtonUnit: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  videoIconUnit: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    position: 'absolute',
    bottom: '12%',
    right: '11%',
  },

  iconText: {
    fontSize: theme.typography.fontSize * 0.7,
    textTransform: 'uppercase',
  },
  layout: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    // maxHeight: "100vh",
    overflow: 'hidden',
    padding: theme.spacing(2),
    width: '100%',
    position: 'relative',
    height: '100%',
    alignItems: 'center',
  },
  model3dholder: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  optionUnit: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '7%',
    left: 0,
    // right: '11%',
  },

  virtualRoomButtonT: {
    cursor: 'pointer',
    fontSize: 13.96,
    fontWeight: '200',
    textAlign: 'center',
    margin: '5px', // '0 auto',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #e3e3e3',
    backgroundColor: 'transparent',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ffffff',
    },
  },
  virtualRoomButtonz: {
    cursor: 'pointer',
    fontSize: 13.96,
    fontWeight: '200',
    textAlign: 'center',
    margin: '5px', // '0 auto',
    width: '50%',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #e3e3e3',
    backgroundColor: 'transparent',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ffffff',
    },
  },
  virtualRoomButton: {
    cursor: 'pointer',
    fontSize: 13.96,
    fontWeight: '200',
    textAlign: 'center',
    margin: '5px', // '0 auto',
    width: '60%',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #e3e3e3',
    backgroundColor: 'transparent',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ffffff',
    },
  },
});

export default styles;
