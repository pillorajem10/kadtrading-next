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

    [theme.breakpoints.only('xs')]: {
      width: 315,
      height: 315,
    },
  },
  modalContent: {
    width: 303,
    fontSize: 20,
    lineHeight: 1.4,
    letterSpacing: 0.05,
    position: 'absolute',
    top: 138,
    left: 31,

    '& > span:first-child': {
      backgroundColor: 'white',
      padding: '0 5px',
      fontWeight: 600,
    },

    '& > span:last-child': {
      fontSize: 16,
      letterSpacing: 0.04,
    },

    [theme.breakpoints.only('xs')]: {
      width: 208,
      top: 98,
      left: 21,
      fontSize: 14,

      '& > span:last-child': {
        fontSize: 10,
      },
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
  button: {
    width: 250,
    height: 'fit-content',
    padding: '10px 0',
    border: '1px solid #000',
    backgroundColor: '#000',
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 0.33,
    color: '#ffffff',
    borderRadius: '0 !important',
    position: 'absolute',
    bottom: 44,
    right: 0,
    left: 0,
    margin: '0 auto',

    '&:hover': {
      backgroundColor: '#000',
    },

    [theme.breakpoints.only('xs')]: {
      width: 131,
      padding: '1px 0',
      bottom: 46,
      fontSize: 12,
      lineHeight: 2,
      letterSpacing: 0.16,
    },
  },
});

export default styles;
