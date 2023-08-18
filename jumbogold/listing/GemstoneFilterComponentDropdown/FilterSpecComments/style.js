const styles = (theme) => ({
  filterContainer: {
    width: '100%',
    marginTop: 20,
    marginLeft: 30,
    flex: 1,
  },
  filterStyles: {
    // width: 300,
    cursor: 'pointer',
    height: 30,
    display: 'flex',
    marginTop: '1rem',
    transition: '.3s',
    borderRadius: 3,
    justifyContent: 'space-between',
    position: 'relative',

    [theme.breakpoints.only('md')]: {
      // width: 450,
    },

    [theme.breakpoints.only('sm')]: {
      // width: 350,
    },

    '& > p': {
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.8)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      marginLeft: 4,
    },

    '&:hover': {
      border: '1px solid #000 !important',
      transition: '.3s',
    },
  },
  selectedTagWrapper: {
    display: 'flex',
    overflow: 'hidden',
  },
  selectedTag: {
    borderRadius: 3,
    backgroundColor: '#e4e4e4',
    padding: '0 4px',
    marginRight: 3,

    '& > p': {
      fontSize: 15.9,
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.8)',
    },
  }, 
  expandIcon: {
    height: 24,
    width: 24,
  },
  popper: {
    position: 'absolute !important',
    left: '-6rem !important',
    top: '0px !important',
    zIndex: 2,
  },
  menuWrapper: {
    boxShadow: '0 1px 4px 0 #8e8d8d',
    borderRadius: 5,
  },
  stylesListWrapper: {
    backgroundColor: '#ffffff',
    width: '12rem',
    maxHeight: '100%',
    overflowY: 'scroll',
    borderRadius: 5,
    marginTop: 5,
    padding: '9px 0',

    [theme.breakpoints.only('md')]: {
      width: 450,
    },

    [theme.breakpoints.only('sm')]: {
      width: 350,
    },
  },
  menuItem: {
    padding: '3px 12px',
    marginBottom: 4,

    '&:hover': {
      backgroundColor: '#eeeeee',
    },

    '&:last-child': {
      marginBottom: 0,
    },

    '& > p': {
      fontSize: 12,
      lineHeight: 1.5,
      letterSpacing: 0.11,
    },
  },
  checkbox: {
    padding: 0,
    marginRight: 25,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  textField: {
    padding: '0px 5px',
    width: '100%',
  },
  inputForm: {
    marginLeft: 10,
    marginBottom: 5
  },
});

export default styles;
