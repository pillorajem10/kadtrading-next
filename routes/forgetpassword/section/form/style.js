const styles = (theme) => ({
  forgotPass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.only('xl')]: {
      marginTop:'-25rem',
    },

    [theme.breakpoints.only('lg')]: {
      marginTop:'-23rem',
    },

    [theme.breakpoints.only('md')]: {
      marginTop:'-17rem',
    },
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 500,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    border: 'solid 2px',
    borderRadius: 5,
    margin: 30,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 20,
    },
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  header:{
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: 20,
    fontFamily: 'Bell MT !important',
    color: '#000000'
  },
  form: {
    width: 300,
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  formText: {
    width: '100%',
  },
  btn: {
    height: 35,
    cursor: 'pointer',
    fontSize: 15,
    width: '100%',
    border: '.5px solid #000000',
    backgroundColor: '#000000',
    color: '#ffffff',
    marginBottom: 20,
    '&:hover': {
       color: '#000',
       background: 'transparent',
       transition: '.3s'
     },
  },
  checkBoxErrMsg: {
    color: 'red',
    position: 'absolute',
  },
  checkboxContainer: {
    display: 'flex',
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
});

export default styles;
