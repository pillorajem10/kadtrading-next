const styles = (theme) => ({
  detailsListSection: {
    paddingBottom: 200,
  },
  detailsListWrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'initial',
    marginBottom: 75,

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      marginBottom: 50,
    },
  },
  detailsListImage: {
    width: 223,
    height: 244,
    marginRight: 35,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginRight: 0,
      marginBottom: 44,
    },
  },
  detailsListContentWrapper: {
    display: 'flex',
    alignItems: 'initial',
    width: 'calc(100% - 258px)',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  detailsListNumber: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 15,

    [theme.breakpoints.only('xs')]: {
      fontSize: 21,
    },
  },
  detailsListHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 22,

    [theme.breakpoints.only('xs')]: {
      fontSize: 21,
      marginBottom: 15,
    },
  },
  detailsListContent: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
