const styles = (theme) => ({
  container: {
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',

    [theme.breakpoints.only('md')]: {
      padding: '0 15px',
      maxWidth: 960,
    },

    [theme.breakpoints.only('sm')]: {
      padding: '0 15px',
      maxWidth: 720,
    },

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: '0 22px',
    },
  },
  faqListSection: {
    padding: '76px 0 150px',

    [theme.breakpoints.only('xs')]: {
      padding: '50px 0',
    },
  },
  faqListWrapper: {
    display: 'flex',
  },
  stickyNav: {
    width: 256,
    padding: '10px 17px',
    borderRadius: 10,
    backgroundColor: '#faf9f9',
    marginRight: 50,
    height: 'fit-content',
    position: 'sticky',
    top: 80,
  },
  stickyNavItem: {
    padding: '21px 0',
    cursor: 'pointer',

    '&:not(:last-child)': {
      borderBottom: '1px solid #ededed',
    },

    '&:hover p': {
      fontWeight: 700,
    },
  },
  nav: {
    fontSize: 14,
    lineHeight: 1.72,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  faqList: {
    width: 'calc(100% - 306px)',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  faq: {
    marginBottom: 120,
  },
  faqTitle: {
    margin: '26px 0 0',
    fontSize: 23.9,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      margin: 0,
      marginLeft: 19,
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000000',
      marginTop: 2,
    },
  },
  faqSubtitle: {
    fontSize: 16.8,
    fontWeight: 'bold',
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: '#ffce00',
    textTransform: 'uppercase',
    margin: '45px 0 38px',

    [theme.breakpoints.only('xs')]: {
      padding: '0 19px',
    },
  },
  listWrapper: {
    marginBottom: 38,

    '& a': {
      fontSize: 14,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000',
    },
  },
  listQuestion: {
    display: 'flex',

    '& p': {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000000',
    },

    '& p:first-child': {
      marginRight: 8,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 19px',
    },
  },
  listAnswer: {
    display: 'flex',

    '& p': {
      fontSize: 14,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000000',
    },

    '& p:first-child': {
      marginRight: 8,
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0 19px',
    },
  },
  onboardingWrapper: {
    margin: '15px 82px',

    '& p': {
      fontSize: 14,
      lineHeight: 1.72,
      letterSpacing: 0.25,
      color: '#000000',
    },

    '& img': {
      margin: 11,
    },

    [theme.breakpoints.only('sm')]: {
      '& img': {
        width: '100%',
      },
    },

    [theme.breakpoints.only('xs')]: {
      margin: 0,

      '& p': {
        padding: '0 42px',
      },

      '& p:first-child': {
        marginTop: 20,
      },

      '& img': {
        width: '100%',
        margin: 0,
        marginTop: 20,
      },
    },
  },
  expanded: {
    color: '#000000',
    margin: '0 !important',
  },
  headerWrapper: {
    backgroundColor: '#ffffff',
    padding: '0 19px',
  },
  contentWrapper: {
    backgroundColor: '#faf9f9',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  selectedExpandIcon: {
    marginRight: 16,
    transform: 'rotateX(180deg)',
  },
  expandIcon: {
    marginRight: 16,
  },
});

export default styles;
