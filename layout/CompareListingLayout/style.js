const styles = (theme) => ({
  page: {},
  pageContent: {
    backgroundColor: 'rgba(246, 246, 246, 0.6)',
    paddingBottom: 95,

    [theme.breakpoints.only('xs')]: {
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
  divider: {
    [theme.breakpoints.only('xs')]: {
      margin: 0,
    },
  },
  suggestionListWrapper: {
    margin: '0 0 45px',
    padding: '11px 0',
    backgroundColor: '#fafafa',

    '& p': {
      fontSize: 12,
      lineHeight: 2,
      letterSpacing: 0.11,
      color: 'rgba(0, 0, 0, 0.38)',
    },

    '& span': {
      fontSize: 12,
      lineHeight: 2,
      letterSpacing: 0.11,
      color: '#000',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterTitle: {
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 8,
    marginLeft: 0,

    marginTop: 5,
    fontWeight: 'bold',
    fontSize: '1.3rem', 
  },
});

export default styles;
