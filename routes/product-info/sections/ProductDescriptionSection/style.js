const styles = (theme) => ({
  section: {
    paddingBottom: 100,
  },
  tabList: {
    borderBottom: '1px solid #e4e4e4',
    borderTop: '3px solid #e4e4e4',
    width: '100%',
    display: 'flex',
  },
  tabItem: {
    width: 'calc(100% / 5)',
    padding: '14px 0 10px',
    textAlign: 'center',
    cursor: 'pointer',

    '& > p': {
      fontSize: 16.8,
      lineHeight: 1.43,
      letterSpacing: 0.15,
    },

    '&:hover > p': {
      fontSize: 16.8,
      lineHeight: 1.43,
      letterSpacing: 0.15,
      color: '#000',
    },
  },
  tabContainer: {
    padding: '38px 20px 20px',

    '& a': {
      color: '#000',
    },

    '& jodit': {
      width: '100% !important',
    },

    '& iframe': {
      width: '100% !important',
    },

    /*
    '& img': {
      width: '100%',
      height: 'auto',
    },
    */
   
    '& .thumbnail': {
      height: '180px !important',
    },

    [theme.breakpoints.only('md')]: {
      '& .thumbnail': {
        height: '150px !important',
      },
    },

    [theme.breakpoints.only('sm')]: {
      '& .thumbnail': {
        height: '120px !important',
      },
    },
  },
});

export default styles;
