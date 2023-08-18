const styles = (theme) => ({
  container: {
    width: 'calc(100% - 150px)',
    padding: '12px 8px',
    borderRadius: 5,
    border: 'solid 1px transparent',
    cursor: 'pointer',
    display: 'flex',

    '&:hover': {
      border: 'solid 1px #000',
    },

    '& > div:first-child': {
      width: '65%',
    },

    '& > div': {
      width: '35%',
    },

    [theme.breakpoints.only('md')]: {
      '& > div:first-child': {
        width: '46%',
        paddingRight: 10,
      },

      '& > div': {
        width: '54%',
      },
    },

    [theme.breakpoints.only('sm')]: {
      '& > div:first-child': {
        width: '46%',
        paddingRight: 10,
      },

      '& > div': {
        width: '54%',
      },
    },

    [theme.breakpoints.only('xs')]: {
      width: 'calc(100% - 135px)',
      flexDirection: 'column',
      padding: 0,
      borderRadius: 0,
      border: 'none',
      cursor: 'auto',

      '& > div:first-child': {
        width: '100%',
        paddingRight: 0,
      },

      '& > div': {
        width: '100%',
      },

      '&:hover': {
        border: 'none',
      },
    },
  },
  optionAmount: {
    fontSize: 14.7,
    lineHeight: 0.68,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.3)',
    marginBottom: 3,

    '& > span': {
      fontSize: 14.7,
      lineHeight: 0.68,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
      marginRight: 5,
    },
  },
  optionCondition: {
    fontSize: 12,
    lineHeight: 1.25,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  optionName: {
    fontSize: 14.7,
    lineHeight: 1.3,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 3,

    [theme.breakpoints.only('xs')]: {
      marginTop: 15,
    },
  },
  optionDuration: {
    fontSize: 12,
    lineHeight: 1.25,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
