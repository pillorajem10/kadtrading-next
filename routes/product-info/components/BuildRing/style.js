const styles = (theme) => ({
  buildRingWrapper: {
    textAlign: 'right',
    padding: '5px 0px 5px',
  },

  buildRingButton: {
    width: 'calc(100% - 170px)',
    boxShadow: 'none',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    height: 43,
    backgroundColor: '#000',
    marginLeft: 16,

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      marginLeft: 0,
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
