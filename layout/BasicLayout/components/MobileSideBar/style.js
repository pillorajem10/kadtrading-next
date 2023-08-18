const styles = () => ({
  root: {
    height: '100%',
  },
  paper: {
    boxShadow: 'inset 0 1px 3px 3px rgba(238, 238, 238, 0.5)',
    backgroundColor: '#f3f3f3',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  closeIconContainer: {
    padding: '15px 19px 18px',
    background: '#fbfbfb',

    '& > img': {
      float: 'right',
    },
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 22px 40px',
    background: '#fbfbfb',
    marginBottom: 16,

    '& > svg': {
      marginRight: 28,
    },

    '& > p': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.09,
      letterSpacing: 1.25,
      color: '#000',
      textTransform: 'uppercase',
    },
  },
  loginUserContainer: {
    padding: '0 22px',
    background: '#fbfbfb',
    marginBottom: 16,
  },
  usernameContainer: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #f3f3f3',
    paddingBottom: 26,

    '& > svg': {
      marginRight: 28,
    },

    '& > p': {
      fontSize: 14.7,
      fontWeight: 500,
      lineHeight: 1.09,
      letterSpacing: 1.25,
      color: '#000',
      textTransform: 'uppercase',
    },
  },
  userLinkContainer: {
    paddingTop: 27,

    '& > div': {
      padding: '19px 16px 26px',
      marginBottom: 13,

      '& > p': {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 1.15,
        letterSpacing: 1.25,
        color: 'rgba(0, 0, 0, 0.6)',
        textTransform: 'uppercase',
      },
    },

    '& div:last-child': {
      '& > p': {
        color: '#000',
      },
    },
  },
  menuContainer: {
    padding: '15px 22px',
    background: '#fbfbfb',
    marginBottom: 16,

    '& > div': {
      padding: '31px 0',
      display: 'flex',
      alignItems: 'center',

      '& > img': {
        width: 32,
        marginRight: 15,
      },

      '& > p': {
        fontSize: 19.9,
        fontWeight: 500,
        letterSpacing: 0.25,
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },

    '& div:not(:last-child)': {
      borderBottom: '1px solid #f3f3f3',
    },
  },
  categoryContainer: {
    background: '#fbfbfb',
    marginBottom: 16,
  },
  categoryHeader: {
    padding: '32px 19px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > p': {
      fontSize: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  categoryInnerContainer: {
    display: 'flex',
    alignItems: 'start',
  },
  categoryListContainer: {
    width: 150,
    paddingTop: 15,
  },
  categoryListItem: {
    padding: '18px 18px 18px 21px',
    marginBottom: 4,

    '& > p': {
      fontSize: 14,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000000',
    },
  },
  categoryListActiveItem: {
    padding: '18px 18px 18px 21px',
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > p': {
      fontSize: 14,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000',
    },
  },
  activeDot: {
    width: 11,
    height: 11,
    borderRadius: 12,
    backgroundColor: '#000',
  },
  categoryChildListContainer: {
    width: 'calc(100% - 150px)',
    backgroundColor: '#ffffff',
    padding: '19px 10px 100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '15px',
    rowGap: '15px',

    '& > div': {
      borderRadius: 10,
      border: 'solid 1px #f3f3f3',
      padding: 18,

      '& > img': {
        width: '100%',
        marginBottom: 20,
      },

      '& > p': {
        fontSize: 11.8,
        lineHeight: 1.35,
        letterSpacing: 0.4,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
  linkList: {
    padding: '24px 21px 100px',
    background: '#fbfbfb',
    position: 'relative',
  },
  linkListHeader: {
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 48,
  },
  linkItem: {
    '& > p': {
      fontSize: 14,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    '&:not(:last-child)': {
      marginBottom: 35,
    },
  },
  wizzo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 209,
  },
});

export default styles;
