const styles = (theme) => ({
  ratingContainer: {
    padding: '40px 0',
    display: 'flex',
  },
  overallRatingContainer: {
    padding: '0 38px 0 12px',
    borderRight: 'solid 1px #ededed',

    [theme.breakpoints.only('sm')]: {
      padding: '0 12px',
    },
  },
  overallRatingHeader: {
    fontSize: 14.7,
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  overallRatingInnerContainer: {
    display: 'flex',
    alignItems: 'center',

    '& p': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#000',
      marginRight: 16,
    },
  },
  ratingStarList: {
    padding: '7px 0 0 42px',
    display: 'flex',

    [theme.breakpoints.only('sm')]: {
      padding: '7px 0 0 12px',
    },
  },
  reviewsContainer: {
    paddingBottom: 70,
  },
  reviewsHeader: {
    padding: '11px 10px 10px',
    backgroundColor: '#f6f6f6',
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
  },
  noReviewText: {
    padding: '50px 0 100px',
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
  },
});

export default styles;
