const styles = () => ({
  container: {
    padding: '20px 22px',
  },
  headerContainer: {
    display: ' flex',
    alignItems: 'start',
    marginBottom: 30,

    '& > img': {
      marginRight: 24,
      marginTop: 3,
    },
  },
  header: {
    fontSize: 23.9,
    fontWeight: 500,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',

    '& > p': {
      fontSize: 23,
      fontWeight: 500,
      lineHeight: 1.52,
      color: '#000',
      marginRight: 8,
    },
  },
  activeAllBox: {
    width: 185,
    height: 48,
    borderRadius: 24,
    border: '1px solid #000',
    backgroundColor: '#000',
    marginBottom: 23,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& p': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#ffffff',
    },
  },
  allBox: {
    width: 185,
    height: 48,
    borderRadius: 24,
    border: '1px solid #000',
    backgroundColor: '#ffffff',
    marginBottom: 23,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& p': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#000',
    },
  },
  ratingStarList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  activeStarBox: {
    width: 64,
    height: 48,
    borderRadius: 77,
    border: '1px solid #000',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,

    '&:not(:last-child)': {
      marginRight: 11,
    },

    '& > p': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#ffffff',
      marginRight: 2,
    },
  },
  starBox: {
    width: 64,
    height: 48,
    borderRadius: 77,
    border: '1px solid #000',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,

    '&:not(:last-child)': {
      marginRight: 11,
    },

    '& > p': {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.94,
      color: '#000',
      marginRight: 2,
    },
  },
  reviewListContainer: {
    padding: '40px 0 0',
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
