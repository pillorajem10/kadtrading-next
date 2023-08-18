const styles = (theme) => ({
  grow: {
    flexGrow: 1,
    marginLeft: 'auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  headerUnit: {
    display: 'flex',
  },
  iconButton: {
    color: theme.palette.text.medium,
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  iconUnit: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    // height: 100,
    marginLeft: 'auto',
    width: 50,
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    // marginRight: theme.spacing(6),
    // width: 500
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      marginRight: theme.spacing(2),
      // width: "42%"
    },
  },
  peow: {
    textDecoration: 'none',
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  marginWide: {
    display: 'flex',
    margin: theme.spacing(3),
  },
  merchant: {
    color: theme.palette.text.medium,
    cursor: 'pointer',
    fontSize: theme.typography.fontSize * 0.95,
    fontWeight: 500,
    marginRight: theme.spacing(1.2),
    textTransform: 'uppercase',
    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  gstLabel: {
    fontSize: '0.75rem',
    fontWeight: 500,
    marginRight: theme.spacing(1.2),
    [theme.breakpoints.only('sm')]: {
      fontSize: theme.typography.fontSize * 0.85,
    },
  },
  merchantLabel: {
    fontSize: theme.typography.fontSize * 0.95,
    fontWeight: 500,
    marginRight: theme.spacing(1.2),
    textTransform: 'uppercase',
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
    },
  },
  merchantRow: {
    display: 'flex',
  },
  merchantUnit: {
    display: 'flex',
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      paddingBottom: 0,
    },
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
      paddingBottom: 0,
    },
  },
  name: {
    fontSize: theme.typography.fontSize * 1.8,
    fontWeight: 700,
    marginTop: theme.spacing(1),
    // textOverflow: "ellipsis",
    // overflow: "hidden",
    // whiteSpace: "nowrap",
    width: 440,
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
      width: '100%',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
      width: '100%',
    },
  },
  originalText: {
    color: theme.palette.text.disabled,
    fontSize: theme.typography.fontSize * 1.5,
    fontWeight: 500,
    textDecoration: 'line-through',
    lineHeight: 1.1,
    [theme.breakpoints.only('sm')]: {
      fontSize: theme.typography.fontSize * 1,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1,
    },
  },
  priceRemark: {
    color: theme.palette.text.disabled,
    fontSize: theme.typography.fontSize * 1,
    fontWeight: 500,
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
    },
  },
  priceFrom: {
    color: theme.palette.text.disabled,
    fontSize: theme.typography.fontSize * 1,
    fontWeight: 500,
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
      marginTop: theme.spacing(5),
    },
  },
  popper: {
    left: `-10px !important`,
    height: 0,
    zIndex: 99,
  },
  priceText: {
    color: theme.palette.text.high,
    fontSize: theme.typography.fontSize * 2.3,
    fontWeight: 700,
    lineHeight: 1,
    [theme.breakpoints.only('xs')]: {
      fontSize: 18,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 20,
    },
  },
  saleText: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize * 2.3,
    fontWeight: 700,
    lineHeight: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.only('sm')]: {
      fontSize: theme.typography.fontSize * 1.4,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.fontSize * 1.4,
    },
  },
  saleUnit: {
    alignItems: 'flex-end',
    display: 'flex',
    /*
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(5),
    },
    */
  },
  tag: {
    borderColor: theme.palette.primary.main,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.palette.text.high,
    fontSize: theme.typography.fontSize * 0.65,
    fontWeight: 700,
    letterSpacing: 1.1,
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0),
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 70,
    [theme.breakpoints.only('xs')]: {
      fontSize: 8,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },
  },
  isBlack: {
    color: '#e1e1e1',
  },
  isGray: {
    color: '#000',
  },
  isBlackIcon: {
    color: '#8a8a8a',
  },
  isGrayIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  isBlackSvg: {
    filter: 'brightness(0) invert(1);',
  },
  lightSvg: {
    marginTop: -10,
    width: '1.6rem',
    height: '2.7rem',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  backgroundPallete: {
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '3rem',
    backgroundColor: '#fff',
    border: '1px solid #d3d3d3',
    borderRadius: 50,
    zIndex: 2,
  },
  bg1: {
    cursor: 'pointer',
    margin: 5,
    width: '1.8rem',
    height: '1.8rem',
    background: 'linear-gradient(to bottom, #848484, #000000)',
    border: '1px solid #d3d3d3',
    borderRadius: 50,
  },
  bg2: {
    cursor: 'pointer',
    margin: 5,
    width: '1.8rem',
    height: '1.8rem',
    background: 'linear-gradient(to bottom, #a8a8a8, #909090)',
    border: '1px solid #d3d3d3',
    borderRadius: 50,
  },
  bg3: {
    cursor: 'pointer',
    margin: 5,
    width: '1.8rem',
    height: '1.8rem',
    background: 'linear-gradient(to bottom, #ffffff, #efefef)',
    border: '1px solid #d3d3d3',
    borderRadius: 50,
  },
  flexContainer: {
    display: 'flex',
  },
  shareIconButton: {
    color: theme.palette.text.medium,
    padding: 5,

    '& svg': {
      height: 20,
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

export default styles;
