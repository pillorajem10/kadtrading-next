const styles = (theme) => ({
  btoListSection: {
    padding: '0 40px',

    [theme.breakpoints.only('sm')]: {
      padding: 0,
    },

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      margin: '0 -22px',
    },
  },
  btoList: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.breakpoints.only('xs')]: {
      overflowY: 'scroll',
      flexWrap: 'nowrap',
      padding: '0 9px',
    },
  },
  btoWrapper: {
    width: '50%',
    padding: '0 12.5px 20px',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
    },
  },
  btoInnerWrapper: {
    width: '100%',
    border: '2px solid rgba(210,210,210,1)',
    boxShadow: '10px 10px 3px -2px rgba(210,210,210,1)',
    borderRadius: 5,
    height: 310,
    padding: '10px 21px 0',

    [theme.breakpoints.only('sm')]: {
      padding: '8px 15px 0',
    },

    [theme.breakpoints.only('xs')]: {
      height: 280,
      width: 310,
      padding: '8px 0 0 10px',
      margin: '0 9px 20px',
    },
  },
  btoLocation: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 15,

    [theme.breakpoints.only('sm')]: {
      marginBottom: 12,
    },

    [theme.breakpoints.only('xs')]: {
      fontSize: 25.2,
      letterSpacing: 'normal',
    },
  },
  btoClassificationWrapper: {
    display: 'flex',
    marginBottom: 7,

    '& p': {
      fontSize: 16.8,
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& p:first-child': {
      width: 150,
      borderRadius: 5,
      fontWeight: 500,
      backgroundColor: 'rgba(236,236,236,0.7)',
      textAlign: 'right',
      padding: '2px 10px',
      marginRight: 8,
    },

    [theme.breakpoints.only('sm')]: {
      '& p:first-child': {
        width: 130,
        padding: '2px 6px',
        marginRight: 4,
      },
    },

    [theme.breakpoints.only('xs')]: {
      '& p:first-child': {
        width: 130,
        marginRight: 0,
        backgroundColor: 'transparent',
        textAlign: 'left',
        padding: 0,
      },
    },
  },
  btoNumberOfNewFlatWrapper: {
    display: 'flex',

    '& p': {
      fontSize: 16.8,
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
      marginBottom: 7,
    },

    '& p:first-child': {
      width: 150,
      borderRadius: 5,
      fontWeight: 500,
      backgroundColor: 'rgba(236,236,236,0.7)',
      textAlign: 'right',
      padding: '2px 10px',
      marginRight: 8,
    },

    [theme.breakpoints.only('sm')]: {
      '& p:first-child': {
        width: 130,
        padding: '2px 6px',
        marginRight: 4,
        marginBottom: 0,
      },
    },

    [theme.breakpoints.only('xs')]: {
      '& p:first-child': {
        width: 130,
        marginRight: 0,
        backgroundColor: 'transparent',
        textAlign: 'left',
        padding: 0,
      },
    },
  },
  btoTypesOfFlatsWrapper: {
    display: 'flex',

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  btoTypesOfFlatsTitle: {
    width: 150,
    textAlign: 'right',
    padding: '2px 10px',
    fontSize: 16.8,
    fontWeight: 500,
    lineHeight: 1.19,
    letterSpacing: 0.5,
    color: '#4f4f4f',
    marginRight: 8,

    [theme.breakpoints.only('sm')]: {
      padding: '2px 6px',
      marginRight: 4,
      width: 130,
    },

    [theme.breakpoints.only('xs')]: {
      lineHeight: 1.67,
      color: 'rgba(0, 0, 0, 0.87)',
      width: '100%',
      padding: 0,
      textAlign: 'left',
      marginRight: 0,
    },
  },
  btoTypesOfFlats: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
