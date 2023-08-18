const styles = (theme) => ({
  chooseWizzo: {

    [theme.breakpoints.only('xs')]: {
      // padding: '53px 0 95px',
    },
  },
  container: {
    width: '95%',
    [theme.breakpoints.only('xs')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  uploadContainer: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    border: 'solid 2px #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '& > p': {
      width: 52,
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.43,
      letterSpacing: 0.25,
      color: 'rgba(177, 177, 177, 0.87)',
      textAlign: 'center',
    },

    [theme.breakpoints.only('xs')]: {
      width: 160,
      height: 160,
      marginBottom: 51,
    },
  },
  avatarImage: {
    width: 198,
    height: 198,
    borderRadius: '50%',
    objectFit: 'cover',

    [theme.breakpoints.only('xs')]: {
      width: 158,
      height: 158,
    },
  },
  editButton: {
    height: 35,
    width: 35,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    position: 'absolute',
    right: 0,
    top: 25,
    zIndex: 1,

    '& > svg': {
      color: 'white',
    },

    [theme.breakpoints.only('xs')]: {
      top: 10,
    },
  },
  avatarListContainer: {
    width: 'calc(100% - 280px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    rowGap: '24px',
    columnGap: '24px',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      rowGap: '23px',
      columnGap: '23px',
    },
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    cursor: 'pointer',

    [theme.breakpoints.only('xs')]: {
      width: 60,
      height: 60,
      margin: '0 auto',
    },
  },
  submitButton: {
    width: 223,
    height: 48,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#ffffff',
    display: 'flex',
    margin: '83px auto 0',

    [theme.breakpoints.only('xs')]: {
      width: 300,
      margin: '69px auto 0',
    },
  },
});

export default styles;
