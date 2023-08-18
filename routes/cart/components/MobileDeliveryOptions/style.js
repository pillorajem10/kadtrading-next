const styles = () => ({
  container: {
    padding: '20px 8px',
  },
  deliveryOptions: {
    display: 'flex',
    justifyContent: 'space-between',
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
  optionListWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: '6px 0 6px 3px',
    width: 'calc(100% - 135px)',

    '& > p': {
      fontSize: 12.5,
      lineHeight: 1.2,
      letterSpacing: 0.21,
      color: '#000000',
    },
  },
  errorMessageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& > div': {
      display: 'flex',
      alignItems: 'start',
      width: 220,

      '& img': {
        marginRight: 5,
        height: 20,
        width: 20,
      },

      '& a': {
        color: '#000000',
      },

      '& p': {
        fontSize: 12.5,
        lineHeight: 1.6,
        color: '#fc2929',
      },
    },
  },
});

export default styles;
