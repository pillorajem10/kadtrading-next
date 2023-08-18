const styles = (theme) => ({
  profile: {},
  changePasswordButton: {
    marginRight: 10,
    width: 179,
    height: 36,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 52,
  },
  lockIcon: {
    height: 22,
    width: 16,
    marginRight: 12,
  },
  saveButton: {
    width: 179,
    height: 36,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
    marginTop: 52,
    border: 'solid #000',
    '&:hover': {
       color: '#000000',
       background: 'transparent',
       transition: '.3s'
     },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
    },
  },
  resetPassSentence: {
    fontSize: 12,
    marginTop: 10,
    position: 'absolute',
    color: '#42AC20',
    cursor: 'pointer'
  }
});

export default styles;
