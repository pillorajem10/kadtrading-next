const styles = () => ({
  header: {
    padding: '34px 22px 39px',
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  merchantList: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: 20,

    '& > div': {
      display: 'inline-block',
      width: 300,
      height: 444,
      padding: '29px 33px',
      borderRadius: 10,
      border: 'solid 1px #f5f5f5',
      overflowY: 'scroll',
      marginRight: 15,
    },
  },
  faqTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 35,
    whiteSpace: 'pre-wrap',
  },
  faqValue: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    whiteSpace: 'pre-wrap',
  },
});

export default styles;
