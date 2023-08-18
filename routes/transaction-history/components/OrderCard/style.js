const styles = () => ({
  orderCard: {
    border: '1px solid #f5f5f5',
    marginBottom: 35,
  },
  cardHeader: {
    padding: '2px 10px',
    backgroundColor: '#f7f7f7',
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.2,
    color: '#000000',
  },
  cardContent: {
    padding: 10,
    display: 'flex',
    width: '100%',

    '& > div': {
      width: '50%',
    },
  },
  orderText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 5,
  },
  orderNumber: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  totalText: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000000',
    marginBottom: 5,
  },
  totalPaid: {
    fontSize: 16.8,
    fontWeight: 'bold',
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});

export default styles;
