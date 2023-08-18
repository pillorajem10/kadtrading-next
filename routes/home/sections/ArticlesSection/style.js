const styles = (theme) => ({
  section: {
    padding: '120px 0 70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      padding: '25px 0',
    },
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: 66,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 45,
    },
  },
  header: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87),',

    [theme.breakpoints.only('xs')]: {
      fontSize: 19.9,
      lineHeight: 'normal',
    },
  },
  articlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '27px',
    width: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      width: 960,
    },

    [theme.breakpoints.only('sm')]: {
      width: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      display: 'flex',
      overflowY: 'scroll',
      position: 'relative',
      columnGap: '0',
      paddingBottom: 10,
    },
  },
  articleContainer: {
    borderRadius: 15,
    border: 'solid 1px #f7f7f7',
    padding: '22px 43px 27px',
    cursor: 'pointer',
    height: 'fit-content',

    [theme.breakpoints.only('md')]: {
      padding: '11px 21px 13px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '11px 21px 13px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '17px 33px',
      marginLeft: 20,
    },
  },
  articleOverlay: {
    display: 'none',

    [theme.breakpoints.only('xs')]: {
      display: 'block',
      position: 'absolute',
      top: 120,
      right: 0,
      backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
      width: '10%',
      height: 400,
    },
  },
  articleImage: {
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      width: 223,
    },
  },
  articleTitle: {
    margin: '16px 0',
    fontSize: 16.8,
    fontWeight: 'bold',
    lineHeight: 1.19,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    height: 38,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,

    [theme.breakpoints.only('sm')]: {
      fontSize: 12.7,
      height: 43,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 12.6,
      lineHeight: 1.27,
      letterSpacing: 0.4,
      height: 34,
    },
  },
  articleContent: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 26,
    height: 57,
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    width: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,

    [theme.breakpoints.only('sm')]: {
      fontSize: 10.9,
      WebkitLineClamp: 4,
    },

    [theme.breakpoints.only('xs')]: {
      WebkitLineClamp: 4,
      fontSize: 12.6,
      lineHeight: 1.27,
      letterSpacing: 0.4,
      marginBottom: 33,
      height: 63,
    },
  },
  readMoreLink: {
    fontSize: 16.8,
    fontWeight: 'bold',
    lineHeight: 1.19,
    letterSpacing: 0.5,
    color: '#696969',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 12.7,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: 2.01,
    },
  },
  viewAllButton: {
    width: 360,
    height: 48,
    fontSize: 14.7,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: 'none',
    marginTop: 100,
    textTransform: 'uppercase',

    [theme.breakpoints.only('xs')]: {
      marginTop: 75,
      width: 288,
    },
  },
});

export default styles;
