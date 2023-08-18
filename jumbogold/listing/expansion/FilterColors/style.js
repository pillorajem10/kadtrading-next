const styles = (theme) => ({
  layout: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',
  },
  headerWrapper: {
    height: 64,
    padding: '10px 13px 10px 0',
  },
  headerText: {
    fontSize: 19.9,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  expandIcon: {
    width: theme.spacing(2),
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    rowGap: '27px',
    padding: '25px 0 50px',
  },
  colorWrapper: {
    position: 'relative',
    height: 51,
    width: 51,
  },
  colorCode: {
    height: 51,
    width: 51,
    borderRadius: 5,
    cursor: 'pointer',
  },
  colorIcon: {
    height: 51,
    width: 51,
    cursor: 'pointer',
  },
  colorCheckIcon: {
    position: 'absolute',
    right: 12,
    top: 16,
    height: 19,
  },
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.2)',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    color: '#9d9d9d',
    position: 'relative',
    textTransform: 'uppercase',
  },
  tooltipArrow: {
    color: theme.palette.secondary.main,
  },
});

export default styles;
