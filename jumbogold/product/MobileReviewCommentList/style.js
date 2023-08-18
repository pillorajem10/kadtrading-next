const styles = () => ({
  container: {
    padding: '20px 0',
    borderBottom: '1px solid #e4e4e4',
  },
  userInfoContainer: {
    display: 'flex',
    marginBottom: 8,
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  commentBy: {
    fontSize: 14.7,
    fontWeight: 'bold',
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  variantName: {
    fontSize: 14.7,
    lineHeight: 1.64,
    color: '#9e9e9e',
  },
  comment: {
    fontSize: 14.7,
    fontWeight: 500,
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 16,
  },
  imageList: {
    display: 'flex',
    marginBottom: 20,

    '& img': {
      height: 62,
      width: 62,

      '&:not(:last-child)': {
        marginRight: 15,
      },
    },
  },
  createTime: {
    fontSize: 14.7,
    lineHeight: 1.64,
    color: '#9e9e9e',
  },
});

export default styles;
