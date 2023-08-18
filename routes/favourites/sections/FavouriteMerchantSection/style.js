const styles = (theme) => ({
  section: {},
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    boxShadow: '0 3px 6px 0 rgba(224, 222, 222, 0.5)',
    marginBottom: 42,
  },
  totalMerchantsSaved: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.38)',
  },
  closeIconContainer: {
    paddingLeft: 15,
    borderLeft: 'solid 1px #eae9e9',
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
      color: 'rgba(0, 0, 0, 0.38)',
      cursor: 'pointer',
    },
  },
  favouriteListContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    rowGap: '25px',
    columnGap: '20px',

    [theme.breakpoints.only('sm')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      rowGap: '21px',
      columnGap: '15px',
    },
  },
  merchantBanner: {
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  merchantLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4px 0',
  },
  merchantLogo: {
    height: 62,

    [theme.breakpoints.only('xs')]: {
      height: 45,
    },
  },
});

export default styles;
