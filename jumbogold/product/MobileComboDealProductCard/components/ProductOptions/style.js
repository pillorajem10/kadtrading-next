const styles = () => ({
  productOptions: {
    marginBottom: 15,
    borderRadius: 5,
    border: '1px solid #e4e4e4',
    backgroundColor: '#ffffff',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productOptionsError: {
    marginBottom: 15,
    borderRadius: 5,
    border: 'solid 1px #fc2929',
    backgroundColor: '#ffffff',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& p': {
      color: '#fc2929',
    },
  },
  emptyProductOptions: {
    marginBottom: 15,
    height: 42,
  },
  productOptionText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  productOptionsDropdownIcon: {
    height: 20,
    width: 20,
  },
});

export default styles;
