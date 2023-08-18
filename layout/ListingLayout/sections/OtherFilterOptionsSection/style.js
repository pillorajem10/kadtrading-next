const styles = (theme) => ({
  filterOptionsSection: {
    paddingTop: 20,
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
  },
  filterHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 28,

    '& > img': {
      cursor: 'pointer',
    },
  },
  filterHeader: {
    fontSize: 15.9,
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    transition: '.3s',
    width: 'fit-content',
    marginLeft: 15,
    cursor: 'pointer',

    '&:hover': {
      color: '#000',
    },
  },
  filterOptionsWrapper: {
    height: '100%',
    boxShadow: '0 2px 4px 0 rgba(191, 191, 191, 0.5)',
    backgroundColor: '#f6f6f6',
    transition: '.4s ease',
    padding: '20px 0',
    overflow: 'hidden',
  },
  hideFilterOptionsWrapper: {
    height: 0,
    transition: '.4s ease',
    overflow: 'hidden',
  },
  innerFilterOptionsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  filterOptionsList: {
    display: 'flex',

    '&:not(:last-child)': {
      marginBottom: 19,
    },
  },
  clearAllButton: {
    width: 115,
    height: 30,
    borderRadius: 40,
    border: 'solid 1px #ececec',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#fff', // 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',

    [theme.breakpoints.only('sm')]: {
      width: 100,
    },

    '&:hover': {
      border: '1px solid #000',
      color: '#000',
    },
  },
});

export default styles;
