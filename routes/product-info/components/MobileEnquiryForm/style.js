const styles = (theme) => ({
  MobileEnquiryForm: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 200,
    padding: 15,
  },
  enquiryText: {
    color: theme.palette.text.medium,
    fontSize: theme.typography.fontSize * 0.9,
    fontWeight: 500,
  },
  enquiryFormTextField: {
    fontSize: theme.typography.fontSize * 0.9,
  },
  errorWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  errorIcon: {
    color: 'red',
    marginRight: theme.spacing(1),
  },
  errorText: {
    color: 'red',
    fontSize: theme.typography.fontSize * 0.7,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    boxShadow: 'none',
    color: theme.palette.text.medium,
    fontSize: theme.typography.fontSize * 0.7,
    height: 36,
  },
  submitButton: {
    boxShadow: 'none',
    height: 36,
    width: 95,
  },
});

export default styles;
