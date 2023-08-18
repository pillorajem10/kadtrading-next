const styles = (theme) => ({
  MobileOptionsBar: {
    backgroundColor: 'black',
    borderRadius: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    width: '100%',
    zIndex: 102,
    boxShadow:
      '0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 -2px 4px 0 rgba(0, 0, 0, 0.5)',
  },
  mainWrapper: {
    display: 'flex',
    padding: '19px 22px',
  },
  productInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: '#ffffff',
  },
  priceText: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: '#ffffff',
  },
  iconGroup: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  favItem: {
    marginLeft: 5,
  },
  iconButton: {
    height: 40,
    width: 40,
    color: '#ffffff',
    zIndex: 10,
  },
  divider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: '100%',
  },
});

export default styles;
