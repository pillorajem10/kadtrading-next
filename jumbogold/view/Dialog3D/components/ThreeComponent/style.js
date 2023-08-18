const styles = (theme) => ({
  layout: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    // maxHeight: "100vh",
    overflow: 'hidden',
    padding: theme.spacing(2),
    width: '100%',
    position: 'relative',
    height: '100%',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 15.96,
    fontFamily: 'Apercu',
  },
  modelContainer: {
    textDecoration: 'none',
    transition: 'top 0.15s ease-in',
    position: 'absolute',
    top: '0%',
  },
  longLoad: {
    width: 280,
    height: 200,
    objectFit: 'contain',
  },
});

export default styles;
