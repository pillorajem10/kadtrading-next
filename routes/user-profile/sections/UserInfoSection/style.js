const styles = (theme) => ({
  section: {
    [theme.breakpoints.only('xs')]: {
      paddingTop: 18,
    },
  },
  nameContainer: {
    marginBottom: '3rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '26px',

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '28px',
    },
  },
  formInput: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  formText: {
    width: '100%',
  },
  formContainer: {
    paddingTop: 28,
  },
});

export default styles;
