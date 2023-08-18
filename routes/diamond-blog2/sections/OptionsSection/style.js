const styles = (theme) => ({
  optionsSection: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'space-between',
    },
  },
  createdDate: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  shareIconButton: {
    margin: '0 12px',
    color: '#8a8a8a',
    fontSize: 20,
    cursor: 'pointer',
  },
  shareOptions: {
    marginLeft: 12,
  },
});

export default styles;
