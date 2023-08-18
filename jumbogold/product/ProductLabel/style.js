const styles = (theme) => ({
  blackLabel: {
    borderRadius: 3,
    border: 'solid 1px #000000',
    backgroundColor: '#000000',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textAlign: 'center',
    color: '#ffffff',
    width: 'fit-content',
    padding: '0 3px',
    height: 'fit-content',
    minWidth: 40,
    margin: '0 5px 5px 0',
    textTransform: 'uppercase',
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      fontSize: 7,
      lineHeight: 1.5,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 2px',
      fontSize: 7,
      margin: '0 4px 4px 0',
    },
  },
  whiteLabel: {
    borderRadius: 3,
    border: 'solid 1px #000',
    backgroundColor: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    width: 'fit-content',
    padding: '0 3px',
    height: 'fit-content',
    minWidth: 40,
    margin: '0 5px 5px 0',
    textTransform: 'uppercase',
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      fontSize: 7,
      lineHeight: 1.5,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 2px',
      fontSize: 7,
      margin: '0 4px 4px 0',
    },
  },
  redLabel: {
    borderRadius: 3,
    border: 'solid 1px #ff0000',
    backgroundColor: '#ff0000',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textAlign: 'center',
    color: '#ffffff',
    width: 'fit-content',
    padding: '0 3px',
    height: 'fit-content',
    minWidth: 40,
    margin: '0 5px 5px 0',
    textTransform: 'uppercase',
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      fontSize: 7,
      lineHeight: 1.5,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 2px',
      fontSize: 7,
      margin: '0 4px 4px 0',
    },
  },
  orangeLabel: {
    borderRadius: 3,
    border: 'solid 1px #000',
    backgroundColor: '#000',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textAlign: 'center',
    color: '#ffffff',
    width: 'fit-content',
    padding: '0 3px',
    height: 'fit-content',
    minWidth: 40,
    margin: '0 5px 5px 0',
    textTransform: 'uppercase',
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      fontSize: 7,
      lineHeight: 1.5,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 2px',
      fontSize: 7,
      margin: '0 4px 4px 0',
    },
  },
  yellowLabel: {
    borderRadius: 3,
    border: 'solid 1px #ffce00',
    backgroundColor: '#ffce00',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textAlign: 'center',
    color: '#000000',
    width: 'fit-content',
    padding: '0 3px',
    height: 'fit-content',
    minWidth: 40,
    margin: '0 5px 5px 0',
    textTransform: 'uppercase',
    cursor: 'pointer',

    [theme.breakpoints.only('sm')]: {
      fontSize: 7,
      lineHeight: 1.5,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 2px',
      fontSize: 7,
      margin: '0 4px 4px 0',
    },
  },
});

export default styles;
