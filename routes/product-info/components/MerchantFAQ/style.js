const styles = (theme) => ({
  merchantFAQ: {
    padding: '25px 0',
    display: 'grid',
    gridTemplateColumns: `repeat(3, 1fr)`,
    columnGap: '20px',
    rowGap: '20px',

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '10px',
      width: '100%',
    },
  },
  faqContainer: {
    height: 439,
    borderRadius: 10,
    border: 'solid 1px #f5f5f5',
    padding: '30px 44px',
    overflowY: 'scroll',

    [theme.breakpoints.only('md')]: {
      padding: '25px 39px',
    },

    [theme.breakpoints.only('sm')]: {
      padding: '20px 25px',
    },
  },
  faqTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.33,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 34,
  },
  faqAnswer: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.21,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
