const styles = (theme) => ({
  header: {
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  divider: {
    margin: '33px 0',
  },
  contactFormContainer: {
    width: '75%',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  subHeader: {
    fontSize: 14,
    lineHeight: 1.72,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 33,

    '& a': {
      color: '#000',
    },
  },
  remark: {
    fontSize: 12,
    lineHeight: 1.72,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 33,
  },
  upperRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '50px',
    marginBottom: 25,
  },
  bottomRow: {
    marginBottom: 50,

    '& > div': {
      width: '100%',
    },
  },
  submitButton: {
    width: 125,
    height: 32,
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.09,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
