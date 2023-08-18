const styles = (theme) => ({
  ratingStarBox: {
    height: 62,
    minWidth: 85,
    padding: '3px 15px 13px',
    borderRadius: 21.5,
    border: 'solid 1px #000',
    cursor: 'pointer',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
    },

    '&:not(:last-child)': {
      marginRight: 26,
    },

    '&:hover': {
      backgroundColor: '#000',

      '& p': {
        color: '#ffffff',
      },
    },

    [theme.breakpoints.only('sm')]: {
      minWidth: 80,
      padding: '3px 10px 13px',

      '&:not(:last-child)': {
        marginRight: 5,
      },
    },
  },
  ratingStarHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.94,
    color: '#000',
    marginRight: 1,
  },
  ratingStarAmount: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 0.9,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  activeRatingStarBox: {
    height: 62,
    minWidth: 85,
    padding: '3px 15px 13px',
    borderRadius: 21.5,
    border: 'solid 1px #000',
    cursor: 'pointer',
    backgroundColor: '#000',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
    },

    '&:not(:last-child)': {
      marginRight: 26,
    },

    '& p': {
      color: '#ffffff',
    },

    [theme.breakpoints.only('sm')]: {
      minWidth: 80,
      padding: '3px 10px 13px',

      '&:not(:last-child)': {
        marginRight: 5,
      },
    },
  },
});

export default styles;
