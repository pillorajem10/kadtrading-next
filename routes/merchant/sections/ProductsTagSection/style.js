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
    alignItems: 'baseline',
  },
  tagsYourChoice: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    marginRight: 15,
    width: 110,
  },
  tagsList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  tagsClearAll: {
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#fff', // '#c4c4c4',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginTop: -18,
    background: 'pink !important',

    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
    },

    '&:hover': {
      color: '#000',
      border: '1px solid black',
    },    
  },
});

export default styles;
