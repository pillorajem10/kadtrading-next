const styles = () => ({
  container: {
    padding: '31px 38px 57px',
  },
  header: {
    fontSize: 25.2,
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 67,
  },
  productContainer: {
    display: 'flex',
  },
  productImage: {
    height: 119,
  },
  productDetails: {
    marginLeft: 37,
  },
  productName: {
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000',
    marginBottom: 10,
  },
  confirmText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 17,
  },
  btnGroup: {
    display: 'flex',
  },
  cancelBtn: {
    width: 161,
    height: 43,
    border: 'solid 1px #ebebeb',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2.92,
    letterSpacing: 0.43,
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: 27,
  },
  confirmBtn: {
    width: 161,
    height: 43,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 2.92,
    letterSpacing: 0.43,
    color: '#ffffff',

    '&:hover': {
      border: '1px solid black',
      background: 'white',
      color: 'black',
    },
  },
});

export default styles;
