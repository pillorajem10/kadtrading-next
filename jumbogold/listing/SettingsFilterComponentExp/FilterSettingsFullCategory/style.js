const styles = (theme) => ({
  checkbox: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  expandIcon: {
    width: theme.spacing(2),
  },
  header: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  headerUnit: {
    height: 64,
    padding: '10px 13px 10px 0',
  },
  layout: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',

    '& .MuiCollapse-container .MuiCollapse-entered': {
      width: '98%',
      marginBottom: 20,
    },
  },
  list: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 40px',
    width: '100%',
  },
  listExpanded: {
    margin: '0 !important',
    minHeight: '30px !important',
  },
  listExpandDetails: {
    borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
    flexDirection: 'column',
    padding: 0,
    width: '100%',
  },
  listExpandIcon: {
    width: theme.spacing(1.5),
  },
  listExpandIconRoot: {
    marginRight: '0 !important',
  },
  listExpandSummary: {
    height: 35,
    margin: '0 !important',
    minHeight: '0 !important',
    padding: 0,
    width: '100%',
  },
  listItem: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  listItemText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
  },
  innerListItemText: {
    padding: '15px 23px',
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
  },
  listItemTextActive: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: theme.palette.primary.main,
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1),
  },
});

export default styles;
