const styles = (theme) => ({
  layout: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(0),
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  marginWide: {
    display: 'flex',
    margin: theme.spacing(3),
  },
  menuIcon: {
    color: theme.palette.text.medium,
    fontSize: theme.typography.fontSize * 2,
    marginLeft: 'auto',
  },
  menuItem: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuList: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 160,
    // width: 250
  },
  menuText: {
    color: theme.palette.text.high,
  },
  shareButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&:focus': {
      outline: 'none',
    },
  },
});

export default styles;
