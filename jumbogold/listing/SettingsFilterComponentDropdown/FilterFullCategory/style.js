const styles = (theme) => ({
  filterCategory: {
    width: 233,
    height: 30,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    padding: '3px 7px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '.3s',
    marginRight: 21,

    [theme.breakpoints.only('md')]: {
      width: 180,
      marginRight: 13,
    },

    [theme.breakpoints.only('sm')]: {
      width: 135,
      marginRight: 10,
    },

    '& > p': {
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.8)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    '&:hover': {
      border: '1px solid #000 !important',
      transition: '.3s',
    },
  },
  expandIcon: {
    height: 24,
    width: 24,
  },
  popper: {
    position: 'absolute !important',
    left: '1px !important',
    top: '0px !important',
    zIndex: 2,
  },
  menuWrapper: {
    boxShadow: '0 1px 4px 0 #8e8d8d',
    borderRadius: 5,
  },
  categoryListWrapper: {
    backgroundColor: '#ffffff',
    width: 233,
    maxHeight: 300,
    overflowY: 'auto',
    borderRadius: 5,
    marginTop: 5,
    padding: '12px 20px',

    '& .MuiCollapse-container .MuiCollapse-entered': {
      width: '98%',
      marginBottom: 20,
    },

    [theme.breakpoints.only('md')]: {
      width: 180,
    },

    [theme.breakpoints.only('sm')]: {
      width: 150,
    },
  },
  listExpanded: {
    margin: '0 !important',
    minHeight: '30px !important',
    color: '#000',
  },
  listExpandIconRoot: {
    marginRight: '0 !important',
    padding: '0 !important',
  },
  listExpandIcon: {
    width: 15,
    padding: '0 !important',
  },
  listExpandSummary: {
    height: 35,
    margin: '0 !important',
    minHeight: '0 !important',
    padding: 0,
    width: '100%',
  },
  listExpandDetails: {
    flexDirection: 'column',
    width: '100%',
    padding: '0 0 15px 0',
    borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
  },
  listItem: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  listItemTitle: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2,
    letterSpacing: 0.11,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  listItemText: {
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    width: '100%',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2,
    letterSpacing: 0.11,
    color: 'rgba(0, 0, 0, 0.8)',
    padding: '3px 19px',

    '&:hover': {
      backgroundColor: '#eeeeee',
    },
  },
  listItemTextActive: {
    color: '#000',
  },
});

export default styles;
