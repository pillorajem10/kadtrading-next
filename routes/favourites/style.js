const styles = (theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    marginBottom: 28,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 33,
    },
  },
  threeDCheckboxContainer: {
    display: 'flex',
    padding: '12px 3px 11px',

    '& > p': {
      fontSize: 15.9,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  threeDCheckbox: {
    padding: 0,
    marginRight: 25,
  },
  tabsContainer: {
    display: 'flex',
    borderRadius: 8,
    backgroundColor: '#fbfbfb',
  },
  activeTab: {
    width: 121,
    height: 41,
    borderRadius: 8,
    backgroundImage: 'linear-gradient(to bottom, #f6f6f6, #f3f3f3 99%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '& > p': {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  normalTab: {
    width: 121,
    height: 41,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '& > p': {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: 1.25,
      color: 'rgba(0, 0, 0, 0.38)',
    },
  },
});

export default styles;
