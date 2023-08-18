const styles = (theme) => ({
  layout: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',
  },
  headerWrapper: {
    height: 64,
    padding: '10px 13px 10px 0',
  },
  headerText: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  expandIcon: {
    width: theme.spacing(2),
  },
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 0 0',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 23,
  },
  listItemText: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    marginLeft: 22,
  },
  checkbox: {
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  showAllWrapper: {
    height: 40,
    padding: '0 13px 0 0',
  },
  showAllText: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  showAllIcon: {
    fontSize: 20,
  },
  searchFieldWrapper: {
    transition: 'all 0.5s ease-in-out',
    width: '100%',
    height: 37,
    borderRadius: 18.5,
    border: 'solid 1px #e4e4e4',
    marginBottom: 28,
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',

    '&:focus-within': {
      borderColor: '#000',
    },
  },
  searchField: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
