const styles = () => ({
  mobileComboDealProductCard: {
    width: '50%',
    height: 'fit-content',

    '& .MuiButton-contained.Mui-disabled': {
      color: 'white',
    },

    '&:nth-child(odd)': {
      padding: '10px 8px 0 0',
    },

    '&:nth-child(even)': {
      padding: '10px 0 0 8px',
    },
  },
  addToCartButton: {
    width: '-webkit-fill-available',
    height: 48,
    borderRadius: 21,
    backgroundColor: '#000',
    boxShadow: 'none',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#ffffff',
  },
});

export default styles;
