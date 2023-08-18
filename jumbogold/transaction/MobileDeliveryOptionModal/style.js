const styles = () => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    borderRadius: 5,
    boxShadow: '0 3px 4px 0 rgba(167, 167, 167, 0.5), 0 2px 10px 0 #000000',
    backgroundColor: '#ffffff',
    margin: '0 18px',
    outline: 'none',
    width: '100%',
    padding: '16px 30px',
  },
  optionList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'initial',
    padding: '12px 0',
    backgroundColor: '#ffffff',

    '&:not(:last-child)': {
      borderBottom: '1px solid #e4e4e4',
    },
  },
  selectedOptionList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'initial',
    padding: '12px 0',
    backgroundColor: '#ffffff',

    '& p': {
      fontWeight: 'bold',
    },

    '&:not(:last-child)': {
      borderBottom: '1px solid #e4e4e4',
    },
  },
  deliveryOption: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'start',
    width: '100%',
  },
  deliveryDurationWrapper: {
    width: '60%',
  },
  optionName: {
    fontSize: 12,
    lineHeight: 1,
    color: '#000000',
    marginBottom: 7,
  },
  optionCondition: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.21,
    color: '#000',
    marginBottom: 4,
  },
  optionDuration: {
    fontSize: 12,
    lineHeight: 1,
    color: '#000000',
  },
  optionListDeliveryFeeWrapper: {
    width: '40%',
    marginLeft: 5,
  },
  optionAmount: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1,
    color: '#000000',
    marginBottom: 7,
  },
  freeDelivery: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.21,
    color: '#000',
    marginBottom: 4,
  },
  optionRadioButton: {
    padding: '0 !important',
    height: 20,
  },
});

export default styles;
