const styles = (theme) => ({
  page: {
    borderRadius: '50%',
    color: theme.palette.text.medium,
    height: 24,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 24,
  },
  pageActive: {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.text.light} !important`,
  },
  pageIcon: {
    color: theme.palette.text.high,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  pageLink: {
    alignItems: 'center',
    color: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    fontSize: theme.typography.fontSize * 1.1,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
  },
  pageUnit: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    marginTop: 100,
    padding: 0,

    [theme.breakpoints.only('xs')]: {
      marginTop: 60,
    },
  },
});

export default styles;
