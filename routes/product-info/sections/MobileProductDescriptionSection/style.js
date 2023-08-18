const styles = () => ({
  section: {
    paddingBottom: 10,
  },
  panelRoot: {
    backgroundColor: '#ffffff',
    boxShadow: 'none',

    '&:before': {
      backgroundColor: 'transparent',
    },
  },
  panelExpanded: {
    '& > p': {
      fontSize: 16.8,
      lineHeight: 1.43,
      letterSpacing: 0.15,
      color: '#000',
    },
  },
  summaryRoot: {
    padding: 0,
  },
  header: {
    fontSize: 16.8,
    lineHeight: 1.43,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  panelDetailsWrapper: {
    padding: '14px 0 80px',
    flexDirection: 'column',

    '& a': {
      color: '#000',
    },

    '& tr': {
      display: 'flex',
      flexWrap: 'wrap',
    },

    '& td': {
      width: '100% !important',
    },

    '& jodit': {
      width: '100% !important',
      height: 'auto !important',
    },

    '& iframe': {
      width: '100% !important',
      height: 'auto !important',
    },
    /*
    '& img': {
      width: '100% !important',
      height: 'auto !important',
    },
    */
    '& .thumbnail': {
      marginBottom: 10,
    },
  },
  reviewListWrapper: {
    padding: '0 0 50px',
  },
});

export default styles;
