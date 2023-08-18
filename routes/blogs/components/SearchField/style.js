const styles = (theme) => ({
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    height: 34,
    justifyContent: 'center',
    marginRight: theme.spacing(1.5),
    transition: 'all 0.3s ease-in-out',
    width: 34,
    zIndex: 103,

    '&:hover': {
      backgroundColor: theme.palette.text.hint,
    },
  },
  icon: {
    color: theme.palette.text.disabled,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0.5),
  },
  layout: {
    alignItems: 'center',
    display: 'flex',
    height: '5vh',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    width: '100%',
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  submitButton: {
    borderRadius: '0 50% 50% 0',
    height: 35,
    padding: 0,
    transition: 'all 0.3s ease-in-out',
    width: 35,
  },
  text: {
    fontSize: theme.typography.fontSize * 1.5,
    fontWeight: 700,
    letterSpacing: 1.2,
  },
  textInput: {
    fontSize: theme.typography.fontSize * 1,
    paddingRight: theme.spacing(2),
  },
  textInputUnit: {
    alignItems: 'center',
    animationName: '$expand',
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: theme.palette.common.white,
    borderColor: '#e4e4e4',
    borderRadius: '50rem',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    height: 35,
    minWidth: 200,
    transition: 'all 0.3s ease-in-out',

    '&:focus-within': {
      borderColor: theme.palette.text.disabled,
    },

    [theme.breakpoints.only('xs')]: {},
  },
  '@keyframes expand': {
    from: {
      opacity: 0,
      width: 0,
    },
    to: {
      opacity: 1,
      width: '15%',
    },
  },
});

export default styles;
