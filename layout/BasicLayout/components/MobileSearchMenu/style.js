const styles = () => ({
  root: {
    height: '100%',
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  searchContainer: {
    padding: '19px 9px 11px 23px',
    height: 63,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'start',
    animationName: '$fadeIn !important',
    animationDuration: '.5s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in-out',
    borderBottom: '1px solid #d8d8d8',
  },
  searchInput: {
    width: '100%',
    marginLeft: 14,
    fontSize: 15.2,
    lineHeight: 1.84,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.38)',

    '& .MuiInputBase-input': {
      padding: 0,
      height: 'fit-content',
    },
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translate(0, -100px)',
    },
    to: {
      opacity: 1,
      transform: 'translate(0, 0)',
      visibility: 'visible',
    },
  },
  searchResultContainer: {
    backgroundColor: '#ffffff',
    padding: '0 22px',
  },
  productContainer: {
    padding: '24px 0 39px',
  },
  productHeader: {
    fontSize: 9,
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 25,
    textTransform: 'uppercase',
  },
  productItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 17.2,

    '& > img': {
      width: 40,
      height: 40,
      marginRight: 14,
    },

    '& > p': {
      fontSize: 14,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',

      '& > span': {
        fontWeight: 'bold',
      },
    },
  },
  viewAllProductsButton: {
    width: '100%',
    height: 36,
    borderRadius: 18,
    fontSize: 11.8,
    lineHeight: 1.35,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  categoryContainer: {
    padding: '24px 0',
    borderTop: '1px solid #d8d8d8',
  },
  categoryHeader: {
    fontSize: 9,
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 21,
    textTransform: 'uppercase',
  },
  categoryItem: {
    padding: '14px 0',
    marginBottom: 11,

    '& > p': {
      fontSize: 14,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',

      '& > span': {
        fontWeight: 'bold',
      },
    },
  },
  merchantContainer: {
    padding: '24px 0',
    borderTop: '1px solid #d8d8d8',
  },
  merchantHeader: {
    fontSize: 9,
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 21,
    textTransform: 'uppercase',
  },
  merchantItem: {
    padding: '14px 0',
    marginBottom: 11,

    '& > p': {
      fontSize: 14,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',

      '& > span': {
        fontWeight: 'bold',
      },
    },
  },
  noResults: {
    fontSize: 14,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
