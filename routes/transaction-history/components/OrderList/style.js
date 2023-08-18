const styles = () => ({
  orderList: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#ffffff',
    // borderRadius: 5,
    cursor: 'pointer',

    '&:not(:last-child)': {
      borderBottom: '1px solid #e4e4e4',
    },

    '&:hover': {
      //boxShadow: '0 2px 4px 0 rgb(0 0 0 / 50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'  
      /*
      '&  .MuiButton-containedPrimary': {
        backgroundColor: '#fff',
        borderColor: '1px solid black',
      },
      */
    },
  },
  orderItem: {
    padding: '32px 10px',
    width: '25%',

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#000000',
    },
  },
  buttonContainer: {
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '23px 15px 23px 0',
  },
  viewOrderButton: {
    width: 150,
    height: 40,
    borderRadius: 40,
    border: 'solid 1px #ececec',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#fff',
    textTransform: 'uppercase',
    backgroundColor: 'black',

    '&:hover': {
      border: '1px solid black',
      backgroundColor: '#fff',
      color: '#000',
    }
  },
});

export default styles;
