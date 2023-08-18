const styles = (theme) => ({
  productsTagSection: {
    padding: '28px 0 20px',

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      width: '100%',
    },
  },
  productCountText: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.38)',
    marginBottom: 30,
  },
  mobileHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  tagsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'start',
  },
  tagsYourChoice: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 15,
    width: 110,
  },
  tagsClearAll: {
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#c4c4c4',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginTop: 0,
  },
  clearAllButton: {
    width: 115,
    height: 30,
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#fff', // rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('md')]: {
      width: 170,
    },

    [theme.breakpoints.only('sm')]: {
      width: 170,
    },

    '&:hover': {
      border: '1px solid #000',
      color: '#000',
    },        
  },
});

export default styles;
