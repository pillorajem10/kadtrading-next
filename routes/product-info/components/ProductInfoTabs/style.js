const styles = (theme) => ({
  tabsWrapper: {
    position: 'relative',

    ' & > .MuiTabs-root': {
      minHeight: '100%',
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    },
  },
  tabIndicator: {
    backgroundColor: 'transparent',
  },
  tabRoot: {
    color: '#9d9d9d',
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 1.78,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    transition: 'all ease-in-out .3s',
    padding: 10,
    minHeight: 37,
    minWidth: 130,

    '&$tabSelected': {
      fontSize: 9,
      fontweight: 'bold',
      lineHeight: 1.78,
      letterspacing: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: '#f6f6f6',
    },

    '&:focus': {
      color: 'rgba(0, 0, 0, 0.87)',
    },

    [theme.breakpoints.only('sm')]: {
      minWidth: 90,
    },

    [theme.breakpoints.only('xs')]: {
      minWidth: 70,
    },
  },
  tabSelected: {},
  tabContainer: {
    height: 153,
    overflowY: 'hidden',
    paddingBottom: 9,
    paddingTop: 9,
  },
  descriptionWrapper: {
    margin: '22px 12px 43px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    height: 'calc(153px - 65px)',

    '& > p': {
      fontSize: 12,
      lineHeight: 1.5,
      letterSpacing: 0.39,
      color: 'rgba(0, 0, 0, 0.8)',
    },

    [theme.breakpoints.only('xs')]: {
      margin: '18px 10px',
      height: 90,
    },
  },
  deliveryOptionsHeader: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.text.hint}`,
    backgroundColor: '#f6f6f6',
    padding: 9,
  },
  deliveryOptionsHeaderText: {
    fontSize: 14.7,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    flex: 1,
  },
  deliveryOptionsWrapper: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.text.hint}`,
    padding: 9,
  },
  deliveryOptionsName: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
    flex: 1,
  },
  deliveryOptionsAmount: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
  },
  deliveryOptionsDays: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
  },
  attributesContainer: {
    height: 153,
    overflow: 'hidden',

    [theme.breakpoints.only('xs')]: {
      height: 162,
    },
  },
  attributesWrapper: {
    display: 'flex',
    padding: '2px 20px',

    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.text.hint}`,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '2px 10px',
    },
  },
  attributesName: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 2,
    color: 'rgba(0, 0, 0, 0.87)',
    flex: 1,

    [theme.breakpoints.only('xs')]: {
      flex: 2,
    },    
  },
  
  attributesValue: {
    fontSize: 12,
    lineHeight: 2,
    color: 'rgba(0, 0, 0, 0.87)',
    flex: 3,

    [theme.breakpoints.only('sm')]: {
      flex: 2,
    },
  },
  moreInfoButton: {
    width: 90,
    height: 38,
    borderRadius: 30,
    border: '1px solid #e4e4e4',
    position: 'absolute',
    bottom: 3,
    right: 0,
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 'normal',
    letterSpacing: 0.08,
    color: '#212121',
  },
});

export default styles;
