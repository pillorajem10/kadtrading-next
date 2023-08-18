const styles = (theme) => ({
  defectCheckSection: {
    marginTop: 38,

    [theme.breakpoints.only('xs')]: {
      marginTop: 44,
    },
  },
  articleSecondHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      letterSpacing: 'normal',
    },
  },
  defectCheckListWrapper: {
    margin: '16px 0 115px',

    [theme.breakpoints.only('xs')]: {
      margin: '30px 0 100px',
    },
  },
  defectCheckList: {
    marginBottom: 16,
    display: 'flex',
  },
  defectCheckListText: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  defectCheckListLink: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: '#000',
    textDecoration: 'underline',
  },
});

export default styles;
