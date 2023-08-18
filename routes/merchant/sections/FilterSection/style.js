const styles = (theme) => ({
  filterSection: {
    padding: '60px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      padding: '0 0 59px',
    },
  },
  rightFilterSection: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  filterTitle: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 8,
    marginLeft: 25,

    [theme.breakpoints.only('sm')]: {
      marginLeft: 15,
    },
  },
  mobileFilterSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 22px 20px',
  },
  toggleFilterButton: {
    width: 41,
    height: 40,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    marginRight: 12,
    padding: 8,
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  filterIcon: {
    color: theme.palette.text.medium,
    transform: 'rotate(270deg)',
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: 0,

    '& > span.MuiBadge-badge.MuiBadge-anchorOriginTopRightRectangle': {
      backgroundColor: '#000 !important',
      fontSize: 9,
    },
  },
});

export default styles;
