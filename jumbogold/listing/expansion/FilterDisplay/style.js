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
    padding: '15px 0 40px',
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
});

export default styles;
