const styles = (theme) => ({
  productImageSection: {
    width: 'calc(1250px / 2 - 50px)',

    [theme.breakpoints.only('md')]: {
      width: 'calc(960px / 2 - 30px)',
    },

    [theme.breakpoints.only('sm')]: {
      width: 'calc(720px / 2 - 10px)',
    },
  },
  productImageWrapper: {
    padding: 45,
    position: 'relative',
    width: '100%',

    [theme.breakpoints.only('md')]: {
      padding: 30,
    },

    [theme.breakpoints.only('sm')]: {
      padding: 20,
    },

    '& ul': {
      padding: 0,
    },
  },
  productVideo: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 490,

    [theme.breakpoints.only('md')]: {
      height: 395,
    },

    [theme.breakpoints.only('sm')]: {
      height: 315,
    },
  },
  productImage: {
    width: '100%',
    transition: 'ease-in .3s',
  },
  threeDIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default styles;
