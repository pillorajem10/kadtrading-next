const styles = (theme) => ({
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      padding: '0 15px',
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      padding: '0 15px',
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  searchFieldSection: {
    padding: '233px 0 75px',
    position: 'relative',
    boxShadow: '0 2px 10px 5px rgba(217, 217, 217, 0.5)',

    '& ::placeholder': {
      color: '#000000',
      opacity: 1,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '164px 0 45px',
    },
  },
  faqPic: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -1,

    [theme.breakpoints.only('xs')]: {
      top: -60,
      right: 0,
    },
  },
  faqSearchHeader: {
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 0.31,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 45,

    [theme.breakpoints.only('xs')]: {
      fontSize: 32.4,
      letterSpacing: 0.25,
      marginBottom: 30,
    },
  },
  faqSearchFieldWrapper: {
    display: 'flex',
  },
  faqSearchFieldContainer: {
    width: 'calc(100% - 138px)',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  faqSearchField: {
    border: 'solid 5px #000000',
    backgroundColor: '#ffce00',
    padding: '8px 24px',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#000000',
    width: '100%',

    '&:focus': {
      outline: 'none',
      backgroundColor: '#ffffff',
      caretColor: '#000',
      caretWidth: 3,

      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.3)',
      },
    },

    [theme.breakpoints.only('xs')]: {
      padding: '8px 50px 8px 24px ',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  faqSearch: {
    border: 'solid 5px #000000',
    backgroundColor: '#ffce00',
    padding: '8px 24px',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#000000',
    width: '100%',

    '&:focus': {
      borderRight: 'solid 5px #000000',
      borderTop: 'solid 5px #000000',
      borderLeft: 'solid 5px #000000',
      borderBottom: 'none',
      outline: 'none',
      backgroundColor: '#ffffff',
      caretColor: '#000',
      caretWidth: 3,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '8px 28px 8px 24px ',

      '&:focus': {
        borderBottom: 'solid 5px #000000',
      },
    },
  },
  faqSearchButton: {
    border: 'solid 5px #000000',
    backgroundColor: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    width: 120,
    height: 60,
    borderRadius: '0 !important',
    marginLeft: 18,

    '&:hover': {
      backgroundColor: '#000000',
      color: '#ffce00',
    },
  },
  searchList: {
    position: 'absolute',
    zIndex: 3,
    top: 55,
    right: 0,
    left: 0,
    borderRight: 'solid 5px #000000',
    borderBottom: 'solid 5px #000000',
    borderLeft: 'solid 5px #000000',
  },
  searchListItem: {
    padding: '4px 24px',
    backgroundColor: '#ffffff',

    '& p': {
      fontSize: 18,
      lineHeight: 1.94,
      color: '#000000',
    },

    '&:hover': {
      backgroundColor: '#ffce00',
    },
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: 13,

    [theme.breakpoints.only('xs')]: {
      top: 16,
    },
  },
});

export default styles;
