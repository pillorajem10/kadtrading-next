const styles = (theme) => ({
  modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  wrapper: {
    width: 676,
    height: 358,
    background: '#fff',
    borderRadius: 15,
    outline: 'none',
    padding: '36px 70px 40px',
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      padding: 30,
      margin: '0 10px',
    },
  },
  title: {
    fontSize: 25.2,
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: 35,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 20,
    },
  },
  content: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'left',
  },
  closeButton: {
    width: 227,
    height: 43,
    borderRadius: 21.5,
    backgroundColor: '#000',
    color: 'white',
    marginTop: 66,
    boxShadow: 'none',

    [theme.breakpoints.only('xs')]: {
      marginTop: 40,
    },

    '&:hover': {
      color: '#000',
      border: '1px solid #000',
      backgroundColor: '#fff',
      boxShadow: 'none',
    },    
  },
});

export default styles;
