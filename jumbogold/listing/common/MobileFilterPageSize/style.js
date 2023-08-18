const styles = (theme) => ({
  mobilefilterPageSize: {
    width: 60,
    height: 40,
    borderRadius: 3,
    border: 'solid 1px #e4e4e4',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3px 8px',
    marginLeft: 12,

    '&:hover': {
      borderColor: `${theme.palette.text.disabled} !important`,
    },
  },
  mobileFilterPageSizeText: {
    fontSize: 15.9,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.38)',
  },
  mobileFilterPageSizeIcon: {
    height: 14,
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
  radio: {
    marginLeft: 'auto',
  },
});

export default styles;
