const styles = (theme) => ({
  section: {
    padding: '70px 0 150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      padding: '25px 0 100px',
    },
  },
  headerContainer: {
    textAlign: 'center',
    paddingBottom: 120,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 30,
    },
  },
  header: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 19.9,
      lineHeight: 'normal',
    },
  },
  starMerchantList: {
    display: 'flex',
    width: 1250,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.only('md')]: {
      width: 960,
    },

    [theme.breakpoints.only('sm')]: {
      width: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: '5px',
      rowGap: '5px',
    },
  },
  merchantItem: {
    width: 'calc(100% / 8)',
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: '0 auto',
    },
  },
  merchantImage: {
    height: 88,
    width: 88,

    [theme.breakpoints.only('xs')]: {
      height: 55,
      width: 55,
    },
  },
});

export default styles;
