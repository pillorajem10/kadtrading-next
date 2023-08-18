const styles = (theme) => ({
  deliveryReturnPolicy: {
    padding: '7px 13px',
    marginBottom: 14,

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      marginBottom: 43,
    },
  },
  deliveryOptions: {
    display: 'flex',
    marginBottom: 12,

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      marginBottom: 37,
    },
  },
  deliveryOptionsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.17,
    color: 'rgba(0, 0, 0, 0.8)',
    width: '40%',
    display: 'flex',
    alignItems: 'center',

    '& > img': {
      marginLeft: 6,
      cursor: 'pointer',
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 18,
      lineHeight: 1.22,
      color: 'rgba(0, 0, 0, 0.8)',
      marginBottom: 12,

      '& > img': {
        marginLeft: 7,
        height: 15,
      },
    },
  },
  deliveryOptionsContainer: {
    width: '60%',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  deliveryOptionsInnerContainer: {
    position: 'relative',

    '& > div': {
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: 'normal',
    },

    '& span': {
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 1,
      letterSpacing: 'normal',
      color: '#000',
      textTransform: 'uppercase',
    },

    [theme.breakpoints.only('xs')]: {
      '& > div': {
        lineHeight: 1.5,
      },

      '& span': {
        lineHeight: 1.5,
      },
    },
  },
  defaultDeliveryOption: {
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',

      '& img': {
        height: 'fit-content',
        transform: 'rotate(180deg)',
        margin: 5,
      },
    },
  },
  optionsWrapper: {
    position: 'absolute',
    top: -1,
    right: -1,
    left: -1,
    backgroundColor: 'white',
    zIndex: 2,
    boxShadow: '0 5px 10px 0 rgba(218, 218, 218, 0.5)',
    border: 'solid 1px #e4e4e4',
    borderRadius: 5,
    overflow: 'hidden',
  },
  returnPolicy: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      alignItems: 'end',
    },
  },
  returnPolicyTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.17,
    color: 'rgba(0, 0, 0, 0.8)',
    width: '40%',

    [theme.breakpoints.only('xs')]: {
      fontSize: 18,
      lineHeight: 1.22,
      color: 'rgba(0, 0, 0, 0.8)',
      marginBottom: 12,
    },
  },
  returnPolicyContainer: {
    width: '60%',
    fontSize: 12,
    lineHeight: 1,
    color: '#000',
    textDecoration: 'underline',
    cursor: 'pointer',

    [theme.breakpoints.only('xs')]: {
      width: '100% ',
    },
  },
});

export default styles;
