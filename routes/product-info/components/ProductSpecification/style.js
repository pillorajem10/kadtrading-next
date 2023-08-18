const styles = (theme) => ({
  giaBox: {
    cursor: 'pointer',
    border: '1px solid black',
    margin: '0 auto',
    height: '5rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: -18,
    right: 21,
    background: '#fff',
    padding: 10,
    boxShadow: '0 1px 4px 0 #8e8d8d',

    [theme.breakpoints.only('sm')]: {
      top: -28,
      right: -8,
    },
    [theme.breakpoints.only('xs')]: {
      top: -28,
      right: -8,
    },
  },
  giaImage: {
    width: 90,
    height: 25,
  },
  productSpecification: {
    columnCount: 2,

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '20px',
      width: '100%',
    },
  },
  gridProductSpecification: {
    padding: '25px 8px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: '25px',

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '20px',
      width: '100%',
    },
  },
  specificationContainer: {
    padding: 12,
    display: 'inline-block',
    width: '100%',
    marginBottom: 25,

    position: 'relative',
  },
  gridSpecificContainer: {
    padding: '12px',
    width: '100%',
  },
  specificationHeader: {
    padding: 10,
    backgroundColor: '#f6f6f6',
    marginBottom: 17,

    '& > p': {
      fontSize: 14.7,
      fontWeight: 600,
      lineHeight: 1.09,
      letterSpacing: 1.25,
      color: 'rgba(0, 0, 0, 0.87)',

      [theme.breakpoints.only('sm')]: {
        fontSize: 12,
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: 12,
      },      
    },
  },
  attributeWrapper: {
    padding: '7px 15px',
    display: 'flex',
    width: '100%',

    '&:not(:last-child)': {
      borderBottom: '1px solid #e4e4e4',
    },    
  },
  attributeName: {
    width: '30%',
    fontSize: 14.7,
    fontWeight: 600,
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',

    [theme.breakpoints.only('xs')]: {
      marginRight: 0,
      flex: 2,
      width: 'unset',
      fontSize: 12,
    },
  },
  attributeValue: {
    width: '70%',
    fontSize: 14.7,
    lineHeight: 1.64,
    color: 'rgba(0, 0, 0, 0.87)',
    paddingLeft: 10,

    [theme.breakpoints.only('xs')]: {
      width: 'unset',
      fontSize: 12,
    },
  },
});

export default styles;
