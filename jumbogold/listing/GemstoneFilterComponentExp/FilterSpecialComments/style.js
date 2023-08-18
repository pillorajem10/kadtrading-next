const styles = (theme) => ({
  pairs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 23,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  listItem2: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },


  listItemText: {
    fontSize: 12.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    marginLeft: 5,
  },
  checkbox: {
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  textField: {
    width: '100%',
  },







  layout: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',
  },
  headerWrapper: {
    height: 64,
    padding: '10px 13px 10px 0',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bolder',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  expandIcon: {
    width: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 40px',
  },
});

export default styles;
