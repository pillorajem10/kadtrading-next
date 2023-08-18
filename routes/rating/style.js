const styles = () => ({
  container: {
    padding: '20px 22px',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 17,

    '& img': {
      marginRight: 23,
    },

    '& p': {
      fontSize: 23.9,
      fontWeight: 500,
      lineHeight: 'normal',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  orderDetailsContainer: {
    padding: '0 0 26px',
  },
  companyName: {
    fontSize: 14.7,
    lineHeight: 1.36,
    letterSpacing: 0.25,
    color: '#000',
  },
  orderNumber: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.2,
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',

    '& > p': {
      fontSize: 12,
      lineHeight: 1.67,
      letterSpacing: 0.2,
      color: '#000000',
      marginRight: 10,
    },
  },
  status: {
    width: 80,
    height: 22,
    borderRadius: 21.5,
    backgroundColor: '#ffce53',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > p': {
      fontSize: 10,
      lineHeight: 1.6,
      letterSpacing: 0.5,
    },
  },
  ratingSectionContainer: {
    paddingTop: 28,
    borderBottom: '1px solid #e4e4e4',
  },
  ratingList: {
    marginBottom: 38,

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
      marginBottom: 12,
    },
  },
  imageSectionContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '13px',
    rowGap: '13px',
    margin: '32px 0 52px',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 13,
    border: 'solid 1px #dbdbdb',
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 13,
  },
  removePhotoIcon: {
    position: 'absolute',
    top: 35,
    right: 34,
  },
  imageUploader: {
    width: 100,
    height: 100,
    borderRadius: 13,
    border: 'solid 1px #dbdbdb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&  p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
  reviewSectionContainer: {
    paddingBottom: 20,
  },
  reviewLabel: {
    fontSize: 12,
    lineHeight: 1.67,
    letterSpacing: 0.2,
    color: '#989898',
    marginBottom: 15,
  },
  optionBarContainer: {
    backgroundColor: 'black',
    borderRadius: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    width: '100%',
    zIndex: 102,
    boxShadow: '0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 -2px 4px 0 rgba(0, 0, 0, 0.5)',
    padding: '25px 22px',
  },
  optionBarInnerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    alignItems: 'flex-start',
    flexDirection: 'column',    
  },
  anonymousContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    
    '& .MuiCheckbox-colorPrimary': {
      color: '#ffffff',
    },

    '& .MuiCheckbox-colorPrimary.Mui-checked': {
      color: '#000',
    },

    '& > p': {
      fontSize: 14.7,
      lineHeight: 1.36,
      letterSpacing: 0.25,
      color: '#ffffff',
    },
  },
  checkbox: {
    padding: 0,
    marginRight: 8,
  },
  submit: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.15,
    letterSpacing: 1.25,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default styles;
