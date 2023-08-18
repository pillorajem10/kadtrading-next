const styles = (theme) => ({
  promotionTagsContainer: {
    marginTop: 6,

    [theme.breakpoints.only('xs')]: {
      marginTop: 2,
    },
  },
  promotionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 5,
    },
  },
  promotionTagWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 107,
    height: 23,
    borderRadius: 5,
    padding: '3px 8px',
    marginRight: 10,

    [theme.breakpoints.only('xs')]: {
      width: 82,
      height: 21,
      padding: '4px 9px',
      marginRight: 10,
    },
  },
  promotionIcon: {
    height: 22,
    width: 14,
    marginRight: 15,

    [theme.breakpoints.only('xs')]: {
      width: 16,
      height: 16,
      marginRight: 3,
    },
  },
  promotionTag: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: '#ffffff',
  },
  promotionText: {
    fontSize: 12,
    lineHeight: 1.67,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 0.32,
      color: '#000',
    },
  },
  giftText: {
    fontSize: 12,
    lineHeight: 1.67,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      fontSize: 10,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 0.32,
      color: '#6900ff',
    },
  },
});

export default styles;
