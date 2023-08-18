const styles = (theme) => ({
  section: {
    paddingTop: 50,
  },
  passwordContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '26px',
    paddingTop: 28,

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '28px',
    },
  },
  formInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
  },
  formText: {
    width: '100%',
  },
  passwordRulesContainer: {
    paddingTop: 11,

    '& > p': {
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: 0.4,
    },
  },
  strengthIndicatorContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    height: 16,
    width: 16,
    borderRadius: '50%',
    marginRight: 8,
  },
  strengthText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33,
    letterSpacing: 2,
  },
});

export default styles;
