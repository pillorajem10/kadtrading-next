const styles = (theme) => ({
  articleSecondHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      letterSpacing: 'normal',
      marginTop: 100,
    },
  },
  btoCheckListWrapper: {
    padding: '27px 0 128px',

    [theme.breakpoints.only('xs')]: {
      padding: '30px 0 100px',
    },
  },
  btoCheckList: {
    display: 'flex',
    marginBottom: 50,
    width: '100%',
  },
  btoCheckListImageWrapper: {
    width: 215,
    marginRight: 25,
    display: 'flex',
    justifyContent: 'center',
  },
  btoCheckListImage: {
    margin: 'auto 0',
    width: 200,
  },
  btoCheckListContentWrapper: {
    width: 'calc(100% - 240px)',
  },
  btoCheckListTitle: {
    fontSize: 16.8,
    fontWeight: 'bold',
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: '#000',
    marginBottom: 8,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 0,
    },
  },
  btoCheckListContent: {
    fontSize: 16.8,
    lineHeight: 2.38,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      lineHeight: 1.19,
      marginBottom: 12,
    },
  },
  expanded: {
    color: '#000000',
    margin: '0 !important',
  },
  headerWrapper: {
    backgroundColor: '#ffffff',
    padding: 0,
  },
  contentWrapper: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  selectedExpandIcon: {
    marginRight: 16,
    transform: 'rotateX(180deg)',
  },
  expandIcon: {
    marginRight: 16,
  },
});

export default styles;
