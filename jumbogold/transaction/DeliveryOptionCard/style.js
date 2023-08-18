const styles = () => ({
  deliveryOption: {
    borderBottom: '1px solid #d3d3d3',
    display: 'flex',
    padding: '12px 14px',
    minHeight: 65,
    width: '100%',

    '&:hover': {
      backgroundColor: '#eeeeee',
    },
  },
  readOnlyDeliveryOptions: {
    display: 'flex',
    padding: '12px 0',
    margin: '0 14px',
    minHeight: 65,

    '&:not(:last-child)': {
      borderBottom: '1px solid #f5f5f5',
    },
  },
  deliveryDurationWrapper: {
    width: '50%',
    paddingRight: 10,
  },
  deliveryOptionName: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.21,
    color: '#000',
    marginBottom: 4,


  },
  freeDeliveryCondition: {
    fontSize: 12,
    lineHeight: 1,
    color: '#000000',
    marginBottom: 7,
  },
  deliveryEstDuration: {
    fontSize: 12,
    lineHeight: 1,
    color: '#000000',
  },
  deliveryFeeWrapper: {
    width: '50%',
  },
  deliveryFeePrice: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: 5,
  },
  freeDelivery: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.21,
    color: '#000',
    marginBottom: 4,
  },
});

export default styles;
