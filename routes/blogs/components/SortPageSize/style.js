const styles = (theme) => ({
  button: {
    alignItems: 'center',
    border: `1px solid #e4e4e4`,
    borderRadius: '4px !important',
    color: theme.palette.text.disabled,
    cursor: 'pointer',
    display: 'flex',
    fontSize: theme.typography.fontSize * 1,
    flex: '0 !important',
    height: 34,
    marginRight: theme.spacing(3),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    textTransform: 'none',
    width: 65,
    zIndex: 100,
    '&:hover': {
      borderColor: `${theme.palette.text.disabled} !important`,
    },
    [theme.breakpoints.only('xs')]: {
      flex: 1,
      marginRight: theme.spacing(1),
    },
  },
  buttonIcon: {
    color: theme.palette.text.high,
    fontSize: theme.typography.fontSize * 1.5,
    marginLeft: theme.spacing(1),
  },
  buttonText: {
    fontSize: theme.typography.fontSize * 1,
  },
  grow: {
    flexGrow: 1,
    marginLeft: 'auto',
  },
  icon: {
    fontSize: theme.typography.fontSize * 1,
    marginLeft: theme.spacing(1),
  },
  link: {
    color: theme.palette.text.high,
    textDecoration: 'none',
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  menuItem: {
    height: 48,
  },
  menuList: {
    backgroundColor: theme.palette.common.white,
    width: 65,
  },
  popper: {
    position: 'absolute !important',
    left: '0px !important',
    top: '0px !important',
    zIndex: 4,
  },
  selectView: {
    width: 70,
    '&:focus': {
      backgroundColor: 'transparent !important',
    },
  },
  text: {
    fontSize: theme.typography.fontSize * 1.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});

export default styles;
