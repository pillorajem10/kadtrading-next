const styles = (theme) => ({
  footer: {
    backgroundColor: '#fafafa',
    padding: '60px 94px 42px',
    position: 'relative',

    [theme.breakpoints.only('sm')]: {
      padding: '30px 45px 21px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '60px 28px 30px',
    },
  },
  merchantLink: {
    marginRight: 15,
    marginLeft: 5,
    cursor: 'pointer',

    '& > p > a': {
      color: '#000',
      '&:hover': {
         color: '#dfad96',
         transition: '.3s'
       },
    },

    '& > p': {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.8,
      letterSpacing: 0.1,
      color: '#000',

      [theme.breakpoints.only('xs')]: {
        fontSize: '.75rem',
      },
    },
  },
  copyright: {
    left: 5,
    bottom: 10,
    position: 'absolute',
    fontSize: 11,

    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
      position: 'unset'
    },
  },

  copyright1: {
    right: 20,
    bottom: 10,
    position: 'absolute',
    fontSize: 5,

    '& > img': {
      objectFit: 'cover'
    },

    [theme.breakpoints.only('xs')]: {
      right: 20,
      bottom: 10,
    },
  },

  footerHeader: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'flex-start',
    },
  },

  card: {
    marginTop: '1rem',
    // marginLeft: '2rem',
    // marginRight: '2rem',
  },

  developersLogo: {
    width: 19,
    marginRight: 8
  },

  contactContainer: {
    marginTop: '.5rem',
    display: 'flex',
    alignItems: 'flex-start',
  },

  contactDetails: {
    marginLeft: '5%',
    fontSize: '0.8em'
  },

  copyrightContainer: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    position: 'relative',

    [theme.breakpoints.only('xs')]: {
      position: 'unset',
      justifyContent: 'center',
    },
  }

  /*
  logo: {
    marginBottom: 25,
    height: 91.5,

    [theme.breakpoints.only('xs')]: {
      height: 'auto',
      maxWidth: '70%',
      minWidth: '40%',
    },
  },
  containerHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#000',
    marginBottom: 15,
  },
  aboutContainer: {
    width: '30%',
    paddingRight: 70,

    [theme.breakpoints.only('md')]: {
      paddingRight: 50,
    },

    [theme.breakpoints.only('sm')]: {
      paddingRight: 40,
    },
  },
  aboutText: {
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    color: '#000',
  },
  menuContainer: {
    width: '30%',
    paddingRight: 70,

    [theme.breakpoints.only('md')]: {
      paddingRight: 50,
    },

    [theme.breakpoints.only('sm')]: {
      paddingRight: 40,
    },
  },
  contactContainer: {
    width: '30%',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  menuItem: {
    padding: '7px 0 16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',

    '& > a': {
      color: '#000',

      '& > p': {
        fontSize: 11.4,
        lineHeight: 1.4,
        letterSpacing: 0.4,
      },
    },

    '& a:hover': {
      color: '#000',
    },
  },
  contactHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: '#000',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    color: '#000',
    marginBottom: 22,
    width: 300,

    [theme.breakpoints.only('xs')]: {
      maxWidth: '90%',
      minWidth: '40%',
    },
  },
  subscriptionContainer: {
    width: 420,
    height: 37,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18.5,
    paddingLeft: 18,
    marginBottom: 41,
    border: '1px solid black',

    [theme.breakpoints.only('md')]: {
      width: 350,
    },

    [theme.breakpoints.only('sm')]: {
      width: 250,
    },

    [theme.breakpoints.only('xs')]: {
      maxWidth: '90%',
      minWidth: '40%',
    },
  },
  subscriptionInput: {
    fontSize: 11.4,
    lineHeight: 1.4,
    letterSpacing: 0.4,
    color: 'rgba(0, 0, 0, 0.38)',
    width: '100%',
  },
  submitButton: {
    width: 38,
    height: 38,
    padding: 0,
    borderRadius: '0 50% 50% 0',
    transition: 'all 0.5s ease-in-out',
  },
  socialMediaContainer: {
    display: 'flex',

    '& img': {
      marginRight: 13,
    },
  },
  wizzoFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 183,

    [theme.breakpoints.only('xs')]: {
      bottom: 80,
      height: 100,
    },
  },
*/});

export default styles;
