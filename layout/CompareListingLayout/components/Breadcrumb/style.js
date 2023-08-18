const styles = (theme) => ({
  breadcrumb: {
    padding: '34px 0 38px',

    [theme.breakpoints.only('xs')]: {
      padding: '20px 0 30px',
    },
  },
  breadcrumbIcon: {
    color: theme.palette.text.disabled,
    fontSize: '12px !important',
  },
  breadcrumbText: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',
    textTransform: 'uppercase',
  },
  breadcrumbLink: {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.5s ease-in-out',

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});

export default styles;
