const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    outline: 'none',
    position: 'relative',
    height: 450,
    width: 450,
    backgroundColor: 'transparent',

    [theme.breakpoints.only('sm')]: {
      width: 315,
      // height: 'fit-content',
      height: '48%',
    },

    [theme.breakpoints.only('xs')]: {
      width: 315,
      // height: 'fit-content',
      height: '48%',
    },
  },
  modalFooter: {
    backgroundColor: '#000000',
    padding: '14px 0',
    textAlign: 'center',
    marginTop: -5,

    '& p': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.64,
      letterSpacing: 0.2,
      color: '#ffffff',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  eventPicture: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,

    [theme.breakpoints.only('xs')]: {
      top: 6,
      right: 6,
    },
  },
  modalContent: {
    position: 'absolute',
    top: 224,
    right: 0,
    left: 0,
    width: 245,
    textAlign: 'center',
    margin: '0 auto',

    [theme.breakpoints.only('xs')]: {
      width: 165,
      top: 157,
    },
  },
  modalContentText: {
    fontSize: 20,
    lineHeight: 1.3,
    letterSpacing: -0.32,
    color: '#fff',

    '& b:first-child': {
      backgroundColor: '#000',
      padding: '0 2px',
      fontWeight: 600,
      color: '#fff',
    },

    '& span': {
      fontSize: 16,
      lineHeight: '28px',
      marginBottom: 25,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      lineHeight: 1.29,
      letterSpacing: -0.22,

      '& span': {
        fontSize: 10,
        lineHeight: 1.29,
        letterSpacing: -0.22,
      },
    },
  },
  signUpButton: {
    border: 'solid 1px #fff',
    backgroundColor: '#000',
    padding: '10px 0',
    width: '100%',
    margin: '0 auto',
    cursor: 'pointer',
    marginTop: 30,

    '& p': {
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: 0.25,
      color: '#fff',
    },

    [theme.breakpoints.only('xs')]: {
      marginTop: 13,
      width: 131,
      height: 27,
      padding: 0,

      '& p': {
        fontSize: 12,
        lineHeight: 2,
        letterSpacing: 0.16,
      },
    },
  },
});

export default styles;
