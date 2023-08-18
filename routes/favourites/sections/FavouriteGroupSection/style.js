const styles = () => ({
  section: {},
  favouriteListContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '27px',
    rowGap: '26px',
  },
  favouriteItemContainer: {
    height: 376,
    padding: '32px 24px 27px',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    border: '1px solid transparent',

    '&:hover': {
      border: '1px solid #000',
    },
  },
  groupImageList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: '8px',
    columnGap: '8px',
    height: 222,
  },
  itemImage: {
    borderRadius: 10,
    height: 107,
  },
  groupNameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 19,

    '& > p': {
      fontSize: 16.8,
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  totalItem: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.38)',
  },
});

export default styles;
