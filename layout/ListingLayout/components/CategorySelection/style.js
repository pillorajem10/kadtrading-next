const styles = (theme) => ({
  categoryButton: {
    borderRadius: '0 !important',
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.only('sm')]: {
      width: 190,
    },

    [theme.breakpoints.only('xs')]: {
      width: 175,
      fontSize: 20,
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  arrowIcon: {
    fontSize: 26,
  },
  menuItem: {
    height: 48,
  },
  menuList: {
    backgroundColor: '#ffffff',
    width: 250,
  },
  popper: {
    position: 'absolute',
    height: 0,
    zIndex: 101,
  },
  radio: {
    marginLeft: 'auto',
  },
  radioGroup: {
    maxWidth: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: '80vw',
  },
  radioLabel: {
    justifyContent: 'flex-end',
    width: '94%',
  },
});

export default styles;
