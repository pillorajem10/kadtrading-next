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
  listItemText: {
    cursor: 'pointer',
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
    transition: 'all 0.3s ease-in-out',
    padding: '15px 0',
    marginBottom: 4,

    '&:last-child': {
      marginBottom: 0,
    },
  },
  listItemTextActive: {
    color: theme.palette.primary.main,
  },
});

export default styles;
