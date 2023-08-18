const styles = (theme) => ({
  header:{
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: 20,
    fontFamily: 'Bell MT !important',
    color: '#000000'
  },
  headerPic: {
    width: '100%'
  },
  resetpass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.only('xl')]: {
      marginTop:'-25rem',
    },

    [theme.breakpoints.only('lg')]: {
      marginTop:'-24rem',
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
    marginTop: 5,
    marginBottom: 5,
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
    marginTop: 10,
    marginBottom: 20,
    '&:hover': {
       color: '#000',
       background: 'transparent',
       transition: '.3s'
     },
  },
});

export default styles;
