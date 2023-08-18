const styles = (theme) => ({
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

  circle: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 40,
    marginRight: 14,
    marginBottom: 10,
    transform: 'scale(1)',

    '&:hover': { 
      transform: 'scale(1.2)',
    }
  },
  






});

export default styles;
