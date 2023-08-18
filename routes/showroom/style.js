const styles = (theme) => ({
  showroomContainer: {
    height: '105vh',
  },
  showroomModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    lineHeight: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
  },
  modalImage: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attribContainer: {
    lineHeight: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    padding: '0px 10px',
    display: 'flex',
  },
  attribLabel: {
    width: 120,
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 16,
    marginBottom: 1,
    [theme.breakpoints.only('xs')]: {
      fontSize: 12.2,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 14.2,
    },
  },
  attribValue: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    marginBottom: 1,
    [theme.breakpoints.only('xs')]: {
      fontSize: 12.2,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 14.2,
    },
  },
  productImage: {
    margin: 'auto',
    height: 300,
    width: 300,
    [theme.breakpoints.only('xs')]: {
      height: 180,
      width: 180,
    },
    [theme.breakpoints.only('sm')]: {
      height: 190,
      width: 190,
    },
    [theme.breakpoints.only('md')]: {
      height: 200,
      width: 200,
    },
  },
  shopNow: {
    cursor: 'pointer',
    margin: 'auto',
    height: 35,
    width: 50,
    [theme.breakpoints.only('xs')]: {
      height: 35,
      width: 45,
    },
    [theme.breakpoints.only('sm')]: {
      height: 35,
      width: 45,
    },
  },
  dimension: {
    color: '#000000',
    fontWeight: '200',
    fontSize: 20,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 16.2,
    },
  },
  productTitle: {
    width: '100%',
    color: '#000',
    fontWeight: 200,
    fontSize: 20, // 25.16,
    flex: 2,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 16.2,
    },
  },
  marginWide: {
    display: 'flex',
    margin: 10,
  },
  iFrame: {
    overflow: 'scroll',
  },
  layoutx: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    width: 480,
    height: '80%',
    background: '#fff',
    padding: 20,
    position: 'relative',
    borderRadius: 10,
    [theme.breakpoints.only('xs')]: {
      width: '88%',
      overflow: 'scroll',
    },
    [theme.breakpoints.only('sm')]: {
      width: '58%',
      overflow: 'scroll',
    },
    [theme.breakpoints.only('md')]: {
      width: '43%',
      height: '90%',
      overflow: 'scroll',
    },
  },
});

export default styles;
