const styles = (theme) => ({
  filterSection: {
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rightFilterSection: {
    display: 'flex',
    alignItems: 'center',
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
    paddingBottom: 20,
  },
  toggleFilterButton: {
    width: 41,
    height: 40,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    marginRight: 12,
    padding: 8,
    position: 'relative',
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
