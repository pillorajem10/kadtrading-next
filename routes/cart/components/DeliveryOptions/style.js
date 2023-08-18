const styles = () => ({
  deliveryOptions: {
    display: 'flex',
    width: 500,
    marginBottom: 6,
    position: 'relative',

    '& > p': {
      fontSize: 14.7,
      fontWeight: 'bold',
      lineHeight: 1.3,
      letterSpacing: 0.25,
      color: '#000000',
      width: 150,
      marginLeft: 12,
    },
  },
  optionsListWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'calc(100% - 150px)',
    padding: '10px 6px',
    borderRadius: 5,
    cursor: 'pointer',

    '& > p': {
      fontSize: 14.7,
      lineHeight: 0.68,
      letterSpacing: 0.25,
      color: '#000000',
    },
  },
  deliveryOptionsContainer: {
    position: 'absolute',
    top: 38,
    right: 0,
    left: 162,
    backgroundColor: 'white',
    zIndex: 2,
    boxShadow: '0 5px 10px 0 rgba(218, 218, 218, 0.5)',
    border: 'solid 1px #e4e4e4',
    borderRadius: 5,
  },
  errorMessageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 470,
    marginBottom: 10,

    '& > div': {
      display: 'flex',
      alignItems: 'start',
      width: 'calc(100% - 162px)',

      '& img': {
        marginRight: 11,
      },

      '& p': {
        fontSize: 14.7,
        lineHeight: 1.36,
        color: '#fc2929',
      },

      '& a': {
        fontSize: 14.7,
        lineHeight: 1.36,
        color: '#000000',
        textDecoration: 'none',
      },
    },
  },
});

export default styles;
