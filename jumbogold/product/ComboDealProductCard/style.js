const styles = (theme) => ({
  comboDealProductCard: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    width: 'calc(1310px / 5)',
    padding: '0 19px',

    [theme.breakpoints.only('md')]: {
      width: 'calc(960px / 4)',
      padding: '0 8px',
    },

    [theme.breakpoints.only('sm')]: {
      width: 'calc(720px / 4)',
      padding: '0 5px',
    },

    '& .MuiButton-contained.Mui-disabled': {
      backgroundColor: '#000',
      opacity: 0.4,
      color: 'white',
    },
  },
  addToCartButton: {
    height: 43,
    borderRadius: 21.5,
    backgroundColor: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
    boxShadow: 'none',
  },
});

export default styles;
