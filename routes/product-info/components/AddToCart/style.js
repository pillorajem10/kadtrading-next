const styles = (theme) => ({
  addToCartWrapper: {
    padding: '12px 0 5px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    [theme.breakpoints.only('xs')]: {
      padding: '5px 0',
    },
  },
  quantityWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  quantityActionsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 15px',
    borderRadius: 12,
    border: 'solid 1px #000',
    height: 43,
    width: 160,

    [theme.breakpoints.only('xs')]: {
      width: 130,
    },
  },
  quantityIconButton: {
    borderRadius: 0,
    margin: 0,
    padding: 0,
    color: 'black',

    '&:hover': {
      backgroundColor: 'white',
      cursor: 'pointer',
    },
  },
  quantityIcon: {
    fontSize: 20,
  },
  quantityText: {
    fontSize: 18,
    lineHeight: 1.94,
    color: 'black',

    '& input': {
      textAlign: 'center !important',
    },
  },
  quantityLeft: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.6,
    color: '#fc2929',
  },
  addToCartButton: {
    width: 'calc(100% - 170px)',
    boxShadow: 'none',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    height: 43,
    backgroundColor: '#000',
    marginLeft: 16,

    '&:hover': {
      color: '#000',
      border: '1px solid #000',
      backgroundColor: '#fff',
      boxShadow: 'none',
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
});

export default styles;
