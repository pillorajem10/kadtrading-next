const styles = (theme) => ({
  header: {
    padding: '70px 0',
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '15px',
    rowGap: '15px',

    '& > div': {
      height: 444,
      padding: '29px 44px',
      borderRadius: 10,
      border: 'solid 1px #f5f5f5',
      overflowY: 'scroll',
    },

    [theme.breakpoints.only('md')]: {
      '& > div': {
        height: 380,
      },
    },

    [theme.breakpoints.only('sm')]: {
      '& > div': {
        height: 300,
        padding: '25px 30px',
      },
    },
  },
  faqTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 35,
  },
  faqValue: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  expandIconButton: {
    margin: '56px auto 0',
    display: 'flex',
  },
});

export default styles;
