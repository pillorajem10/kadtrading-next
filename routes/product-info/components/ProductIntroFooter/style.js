const styles = (theme) => ({
  productIntroFooter: {
    display: 'grid',
    borderRadius: 5,
    backgroundColor: '#000',
    padding: '8px 0',

    [theme.breakpoints.only('xs')]: {
      padding: '10px 0',
      marginBottom: 56,
    },
  },
  introWrapper: {
    padding: '4px 33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:not(:last-child)': {
      borderRight: 'solid 1px #ededed',
    },

    [theme.breakpoints.only('md')]: {
      padding: '4px 15px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: 4,
    },

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      padding: 0,
    },
  },
  introIcon: {
    marginRight: 3,
    color: 'red',
    
    [theme.breakpoints.only('xs')]: {
      marginBottom: 5,
      marginRight: 0,
    },
  },
  introTextWrapper: {
    padding: '5px 0',
    textAlign: 'center',
    width: 'fit-content',

    '& > p': {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.75,
      color: 'rgba(0, 0, 0, 0.8)',
    },

    [theme.breakpoints.only('sm')]: {
      '& > p': {
        fontSize: 10,
      },
    },

    [theme.breakpoints.only('xs')]: {
      '& > p': {
        fontWeight: 'bold',
        lineHeight: 1.17,
      },
    },
  },
  stripeIntroWrapper: {
    textAlign: 'center',
    width: 'fit-content',
    
    '& > img': {
      height: 20,
    },

    '& > p': {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.75,
      color: '#fff',
    },

    [theme.breakpoints.only('sm')]: {
      '& > p': {
        fontSize: 10,
      },
    },

    [theme.breakpoints.only('xs')]: {
      '& > p': {
        fontWeight: 'bold',
        lineHeight: 1.17,
      },
    },
  },
});

export default styles;
