const styles = (theme) => ({
  articleContainer: {
    padding: '17px 33px',
    borderRadius: 15,
    border: 'solid 1px #f7f7f7',

    [theme.breakpoints.only('md')]: {
      padding: '17px 22px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '17px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '15px 20px',
    },
  },
  articleImage: {
    width: '100%',
  },
  articleTitle: {
    fontSize: 12.6,
    fontWeight: 'bold',
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '16px 0',
    height: 30,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,

    [theme.breakpoints.only('sm')]: {
      fontSize: 9.5,
      margin: '10px 0',
      height: 25,
    },

    [theme.breakpoints.only('xs')]: {
      margin: '10px 0 12px',
      height: 50,
    },
  },
  articleContent: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 33,
    height: 60,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,

    [theme.breakpoints.only('sm')]: {
      fontSize: 9.5,
      marginBottom: 20,
    },

    [theme.breakpoints.only('xs')]: {
      marginBottom: 25,
      height: 92,
    },
  },
  readMoreLink: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.33,
    letterSpacing: 2.01,
    color: '#9d9d9d',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },

    [theme.breakpoints.only('sm')]: {
      fontSize: 9,
    },
  },
});

export default styles;
