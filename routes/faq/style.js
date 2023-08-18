const styles = (theme) => ({
  page: {
    padding: '40px 0 0',

    [theme.breakpoints.only('md')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '40px 0 100px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  mobileFaqSearchSection: {
    position: 'relative',
  },
  mobileFaqSearchList: {
    padding: '15px 30px',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: '#faf9f9',
  },
  mobileFaqSearchListItem: {
    padding: '23px 0',

    '& p': {
      fontSize: 18,
      lineHeight: 1.94,
      color: '#000000',
    },

    '&:not(:last-child)': {
      borderBottom: '1px solid #ededed',
    },
  },
});

export default styles;
