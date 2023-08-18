const styles = (theme) => ({
  layout: {
    minHeight: 750,
    paddingBottom: 100,
    position: 'relative',
    overflow: 'hidden',

    [theme.breakpoints.only('md')]: {
      minHeight: 'calc(100vh - 526.5px)',
      paddingBottom: 100,
    },

    [theme.breakpoints.only('sm')]: {
      minHeight: 'calc(100vh - 475.5px)',
      paddingBottom: 100,
    },

    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 454.5px)',
      paddingBottom: 50,
    },
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  bottomPattern: {
    bottom: -600,
    position: 'absolute',
    left: -330,
    zIndex: -1,
  },
  topPattern: {
    position: 'absolute',
    left: -150,
    top: -240,
    zIndex: -1,
    height: 400,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 86,
    marginBottom: 20,

    '& > div:first-child': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    [theme.breakpoints.only('xs')]: {
      paddingTop: 18,

      '& > div:first-child': {
        flexDirection: 'column',
        alignItems: 'initial',
      },
    },
  },
  transactionFilterContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 'max-content',

    '& > p': {
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.87)',
      margin: '0 15px 0 30px',
    },
  },
  favouriteHeaderContainer: {
    padding: '86px 0 52px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
    borderBottom: '1px solid #e4e4e4',

    '& > p': {
      fontSize: 23.9,
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '58px 0 25px',

      '& > p': {
        marginRight: 10,
      },
    },
  },
  header: {
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: '1.3rem',
      marginBottom: 0,
      width: '100%',
    },
  },
  avatarContainer: {
    position: 'relative',
    height: 50,
    width: 50,
    marginLeft: 12,

    [theme.breakpoints.only('xs')]: {
      height: 110,
      width: 110,
      margin: '0 auto',
    },
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    objectFit: 'cover',

    [theme.breakpoints.only('xs')]: {
      height: 110,
      width: 110,
    },
  },
  editButton: {
    height: 20,
    width: 20,
    backgroundColor: '#000000',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -5,
    right: 0,
    cursor: 'pointer',

    '& > svg': {
      color: 'white',
      fontSize: 12,
    },

    [theme.breakpoints.only('xs')]: {
      height: 24,
      width: 24,
      top: 5,

      '& > svg': {
        color: 'white',
        fontSize: 14,
      },
    },
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',

    [theme.breakpoints.only('xs')]: {
      paddingTop: 30,
    },
  },
  sideMenuContainer: {
    width: 235,
    marginRight: 52,

    [theme.breakpoints.only('md')]: {
      width: 210,
      marginRight: 20,
    },

    [theme.breakpoints.only('sm')]: {
      width: 190,
      marginRight: 20,
    },
  },
  childContainer: {
    width: 'calc(100% - 287px)',

    [theme.breakpoints.only('md')]: {
      width: 'calc(100% - 230px)',
    },

    [theme.breakpoints.only('sm')]: {
      width: 'calc(100% - 210px)',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  menuItem: {
    padding: '12px 16px 8px',
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.38)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  activeMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    padding: '12px 16px 8px',
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numberFav: {
    width: 29,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > p': {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: '#ffffff',
    },
  },
});

export default styles;
