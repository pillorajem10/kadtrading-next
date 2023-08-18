const styles = (theme) => ({
  /* register: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  }, */
  header:{
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: 20,
    fontFamily: 'Bell MT !important',
    color: '#000000'
  },
  headerLine: {
    width: '100%',
    height: 1,
    backgroundImage: 'linear-gradient(#444, #444, #444, #444, #444)',
    margin: '5px auto',
    marginTop: 50
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
      margin: 0,
      marginTop: 20,
    },
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  form: {
    width: 300,
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  formText: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
  btnContainer:{
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 10,
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
