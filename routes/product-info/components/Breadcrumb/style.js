const styles = (theme) => ({
  section: {
    padding: '37px 0 65px',
    height: 16,

    [theme.breakpoints.only('sm')]: {
      padding: '37px 0',
    },

    [theme.breakpoints.only('xs')]: {
      height: 'fit-content',
      padding: '20px 0',
    },
  },
  breadcrumbIcon: {
    color: 'rgba(0, 0, 0, 0.38)',
    fontSize: 12,
  },
  breadcrumbLink: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: '.3s',

    '&:hover': {
      color: '#000',
    },
  },
  breadcrumbText: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',
    textTransform: 'uppercase',
  },
});

export default styles;
