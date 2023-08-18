const styles = () => ({
  productVariantsOptions: {
    position: 'relative',
    marginTop: 17,
  },
  productVariantsOptionsTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#9d9d9d',
    marginBottom: 12,
  },
  optionSelectField: {
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: '3px 7px 3px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  optionSelectIcon: {
    height: 30,
    width: 30,
  },
  optionSelectIconUp: {
    height: 30,
    width: 30,
    transform: 'rotateX(180deg)',
  },
  placeholderText: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 2.5,
    color: '#000000',
  },
  optionsSelectedWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  optionsWrapper: {
    position: 'absolute',
    top: 65,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 11,
    boxShadow: '0 5px 10px 0 rgba(218, 218, 218, 0.5)',
    borderRight: 'solid 1px #e4e4e4',
    borderLeft: 'solid 1px #e4e4e4',
    borderBottom: 'solid 1px #e4e4e4',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  optionsItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'initial',
    padding: '3px 7px 3px 15px',

    '&:hover': {
      backgroundColor: '#f5f5f5',
    },

    '&:hover p': {
      fontWeight: 'bold !important',
    },
  },
  optionsLabelTextWrapper: {
    width: '60%',
    flexWrap: 'wrap',
  },
  optionsLabelText: {
    fontSize: 14,
    lineHeight: 2.01,
    letterSpacing: 0.42,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  optionsPriceTextWrapper: {
    width: '40%',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  optionsPriceText: {
    fontSize: 14,
    lineHeight: 2.01,
    letterSpacing: 0.42,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  optionOriginalPrice: {
    fontSize: 14,
    lineHeight: 2.01,
    letterSpacing: 0.42,
    color: 'rgba(0, 0, 0, 0.37)',
    textDecoration: 'line-through',
    marginLeft: 5,
  },
  emptyIcon: {
    width: 30,
  },
});

export default styles;
