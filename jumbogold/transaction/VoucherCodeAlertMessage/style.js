const styles = () => ({
  itemEnter: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  itemEnterActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 300ms, transform 300ms',
  },
  itemExit: {
    opacity: 1,
  },
  itemExitActive: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 300ms, transform 300ms',
  },
  invalidVoucherCodeStatus: {
    width: '100%',
    marginBottom: 15,
  },
});

export default styles;
