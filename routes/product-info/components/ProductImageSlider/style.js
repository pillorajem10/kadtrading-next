const styles = (theme) => ({
  productImageList: {
    padding: 0,

    '& .slick-slide': {
      width: '100px !important',
      margin: '0 5px',
    },

    '& .slick-prev:before': {
      fontSize: 0,
    },

    '& .slick-prev:hover': {
      backgroundColor: '#ffffff',
    },

    '& .slick-next:before': {
      fontSize: 0,
    },

    '& .slick-next:hover': {
      backgroundColor: '#ffffff',
    },

    '& .slick-track': {
      margin: 0,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '7px 0 0',

      '& .slick-slide': {
        width: '68px !important',
        margin: '0 4px',
      },

      '& .slick-prev': {
        left: 0,
      },

      '& .slick-next': {
        right: 0,
      },
    },
  },
  productImageListIcon: {
    width: 37,
    height: 37,
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
    backgroundColor: '#fafafa',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    zIndex: 10,

    [theme.breakpoints.only('xs')]: {
      width: 28,
      height: 28,

      '& img': {
        height: 19,
      },
    },
  },
  selectedListItem: {
    height: 100,
    width: '100px !important',
    borderRadius: 5,
    border: 'solid 1px #000',
    padding: 10,
    position: 'relative',
    cursor: 'pointer',

    '& img': {
      width: '-webkit-fill-available',
    },

    '&:focus': {
      outline: 'none',
    },

    [theme.breakpoints.only('xs')]: {
      height: 68,
      width: '68px !important',
      padding: 7,
    },
  },
  listItem: {
    height: 100,
    width: '100px !important',
    borderRadius: 5,
    border: 'solid 1px transparent',
    padding: 10,
    position: 'relative',
    cursor: 'pointer',

    '& img': {
      width: '-webkit-fill-available',
    },

    '&:hover': {
      border: 'solid 1px #000',
    },

    '&:focus': {
      outline: 'none',
    },

    [theme.breakpoints.only('xs')]: {
      height: 68,
      width: '68px !important',
      padding: 7,
    },
  },
  playIcon: {
    position: 'absolute',
    top: 37,
    right: 0,
    left: 0,
    height: 24,

    [theme.breakpoints.only('xs')]: {
      top: 21,
    },
  },
});

export default styles;
