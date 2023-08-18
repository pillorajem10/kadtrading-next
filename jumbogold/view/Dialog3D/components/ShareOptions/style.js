const styles = (theme) => ({
  menuList: {
    backgroundColor: theme.palette.common.white,
    width: 250,
  },
  menuItem: {
    height: 48,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.text.medium,
    fontSize: theme.typography.fontSize * 2,
    marginLeft: 'auto',
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
