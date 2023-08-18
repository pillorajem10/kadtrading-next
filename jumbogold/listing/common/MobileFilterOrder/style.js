const styles = (theme) => ({
  mobileFilterOrder: {
    width: '100%',
    height: 40,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3px 8px',

    '&:hover': {
      borderColor: `rgba(0,0,0,0.6)`,
    },
  },
  mobileFilterOrderText: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.38)',
  },
  mobileFilterOrderIcon: {
    height: 14,
  },
  radio: {
    marginLeft: 'auto',
  },
  radioGroup: {
    maxWidth: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: '80vw',
  },
  radioLabel: {
    justifyContent: 'flex-end',
    width: '94%',
  },
});

export default styles;
