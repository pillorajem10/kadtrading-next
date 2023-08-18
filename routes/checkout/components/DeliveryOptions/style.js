const styles = () => ({
  deliveryOptions: {
    display: 'flex',
    alignItems: 'baseline',
    width: 500,
    marginBottom: 6,
    position: 'relative',

    '& > p': {
      fontSize: 14.7,
      fontWeight: 'bold',
      lineHeight: 0.68,
      letterSpacing: 0.25,
      color: '#000000',
      width: 150,
      marginLeft: 12,
    },
  },
  mobileDeliveryOptions: {
    padding: '20px 8px',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,

    '& > p': {
      fontSize: 12.5,
      fontWeight: 'bold',
      lineHeight: 1.2,
      letterSpacing: 0.21,
      color: '#000000',
      width: 130,
    },
  },
});

export default styles;
