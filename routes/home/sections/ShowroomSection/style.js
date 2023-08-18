const styles = (theme) => ({
  section: {
    padding: '70px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.only('xs')]: {
      padding: '25px 0',
    },
  },
  headerContainer: {
    textAlign: 'center',
    paddingBottom: 62,

    [theme.breakpoints.only('xs')]: {
      paddingBottom: 21,
    },
  },
  header: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87),',

    [theme.breakpoints.only('xs')]: {
      fontSize: 19.9,
      lineHeight: 'normal',
      textAlign: 'center',
    },
  },
  showroomGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '10px',
    rowGap: '10px',

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      columnGap: '0px',
      rowGap: '10px',
    },
  },
  showroomContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  showroomOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: 'linear-gradient(to bottom, rgba(202, 202, 202, 0), #000000)',
    zIndex: 1,
  },
});

export default styles;
