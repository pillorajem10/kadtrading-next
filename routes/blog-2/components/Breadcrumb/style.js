const styles = (theme) => ({
  breadcrumb: {
    margin: '47px 0 47px',

    [theme.breakpoints.only('xs')]: {
      margin: '32px 0',
    },
  },
  breadcrumbLink: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',
    textDecoration: 'none',
    textTransform: 'uppercase',

    [theme.breakpoints.only('xs')]: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  breadcrumbIcon: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',

    [theme.breakpoints.only('xs')]: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

export default styles;
