const styles = (theme) => ({
  stickyContainer: {
    position: 'sticky',
    top: 120,
    height: 'fit-content',
  },
  alphaWrapper: {
    margin: '8px 0',

    [theme.breakpoints.only('xs')]: {
      margin: '5px 0',
    },
  },
  normalAlpha: {
    color: 'rgba(0, 0, 0, 0.08)',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
  },
  activeAlpha: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    color: 'rgba(0, 0, 0, 0.38)',
    cursor: 'pointer',
    transition: 'color 0.2s ease-in -out',

    '&:hover': {
      color: '#000',
    },
  },
});

export default styles;
