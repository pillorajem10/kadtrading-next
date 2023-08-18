const styles = (theme) => ({
  variantIcon: {
    borderRadius: '50%',
    height: 16,
    width: 16,
  },
  variantIconUnit: {
    color: theme.palette.text.disabled,
    border: `2px solid ${theme.palette.text.hint}`,
    height: 24,
    marginLeft: theme.spacing(0.5),
    padding: 0,
    width: 24,
  },
  variantText: {
    fontSize: 15,
    fontWeight: 700,
    marginLeft: theme.spacing(0.5),
  },
  variantUnit: {
    alignItems: 'center',
    display: 'flex',
  },
});

export default styles;
