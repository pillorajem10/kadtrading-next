const styles = (theme) => ({
  searchKeywordIcon: {
    color: theme.palette.text.disabled,
    marginLeft: 8,
    marginRight: 8,

    [theme.breakpoints.only('sm')]: {
      marginLeft: 4,
      marginRight: 4,
    },

    [theme.breakpoints.only('xs')]: {
      marginLeft: 4,
      marginRight: 4,
    },
  },
  searchKeywordField: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.38)',
  },
  searchKeyword: {
    width: 175,
    height: 30,
    borderRadius: 21.5,
    border: 'solid 1px #e4e4e4',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',

    [theme.breakpoints.only('xs')]: {
      width: 150,
    },

    '&:focus-within': {
      border: '1px solid #000',
    },
  },
});

export default styles;
