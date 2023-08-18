const styles = () => ({
  commentList: {
    padding: '20px 12px',
    display: 'flex',
    borderBottom: '1px solid #e4e4e4',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  commentBy: {
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  variantName: {
    marginTop: 12,
    fontSize: 14.7,
    lineHeight: 1.64,
    color: '#9e9e9e',
  },
  comment: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  imageList: {
    margin: '32px 0 20px',
    display: 'flex',
  },
  selectImageContainer: {
    height: 62,
    width: 62,
    cursor: 'pointer',
    position: 'relative',
    zIndex: 2,

    '&:not(:last-child)': {
      marginRight: 15,
    },
  },
  imageTooltip: {
    position: 'absolute',
    zIndex: 1,
    top: -3,
    left: -3,
  },
  image: {
    height: 62,
    width: 62,
    position: 'relative',
    zIndex: 2,
  },
  imageContainer: {
    height: 62,
    width: 62,
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginRight: 15,
    },
  },
  imageViewer: {
    height: 312,
    width: 312,

    '& img': {
      height: '100%',
      width: '100%',
    },
  },
  createTime: {
    marginTop: 20,
    fontSize: 14.7,
    lineHeight: 1.64,
    color: '#9e9e9e',
  },
});

export default styles;
