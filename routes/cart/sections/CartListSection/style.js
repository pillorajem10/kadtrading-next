const styles = (theme) => ({
  container: {},
  cartListHeader: {
    display: 'flex',
    marginBottom: 20,

    '& > p': {
      width: '20%',
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.5)',
    },

    '& > p:first-child': {
      width: '60%',
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.5)',
    },

    '& > p:nth-child(2)': {
      paddingLeft: 46,
    },

    [theme.breakpoints.only('md')]: {
      '& > p:nth-child(2)': {
        paddingLeft: 30,
      },
    },

    [theme.breakpoints.only('sm')]: {
      '& > p': {
        width: '25%',
      },

      '& > p:first-child': {
        width: '50%',
      },

      '& > p:nth-child(2)': {
        paddingLeft: 20,
      },
    },
  },
  itemList: {
    marginBottom: 35,
  },
  itemWrapper: {
    borderRadius: 5,
    border: 'solid 1px #f5f5f5',
  },
  itemTransaction: {
    padding: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  itemOptionWrapper: {
    width: '50%',

    [theme.breakpoints.only('md')]: {
      width: '55%',
    },

    [theme.breakpoints.only('sm')]: {
      width: '73%',
    },
  },
});

export default styles;
