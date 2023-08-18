import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Button, TextField, Typography } from '@material-ui/core';

// MUI Icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { common } from 'redux/actions';

// Styling
import styles from './style';

const MobileEnquiryForm = ({ classes, closeProductEnquiry }) => {
  const dispatch = useDispatch();
  const {
    product: { productDetails },
    user: { account },
  } = useSelector((state) => state);

  const router = useRouter();

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleCloseEnquiryForm = useCallback(() => {
    closeProductEnquiry();
    setMessage('');
    setError('');
  }, [closeProductEnquiry]);

  useEffect(() => {
    return () => {
      handleCloseEnquiryForm();
    };
  }, [router.asPath, handleCloseEnquiryForm]);

  const handleChangeProductEnquiry = (event) => {
    event.persist();

    setMessage(event.target.value);
    setError(event.target.value.length === 0 ? 'Your question is required' : '');
  };

  const handleSubmitProductEnquiry = async () => {
    const payload = {
      productId: productDetails.id,
      msg: message,
      userId: account.id,
    };

    const res = await dispatch(common.sendProductEnquiry(payload));
    const { success } = res;

    if (success) {
      setMessage('');
      handleCloseEnquiryForm();
    } else {
      setError('Something is not right. Please try again.');
    }
  };

  return (
    <div className={classes.MobileEnquiryForm} elevation={3}>
      <Typography className={classes.enquiryText}>
        Request for more information about this item /
      </Typography>

      <Typography className={classes.enquiryText}>What are your concerns?</Typography>

      <TextField
        className={classes.enquiryFormTextField}
        error={!!error}
        id="product-enquiry"
        margin="normal"
        multiline
        rows="3"
        variant="outlined"
        value={message}
        onChange={handleChangeProductEnquiry}
      />

      {!!error && (
        <div className={classes.errorWrapper}>
          <ErrorOutlineIcon className={classes.errorIcon} />
          <Typography className={classes.errorText}>Your question is required</Typography>
        </div>
      )}

      <div className={classes.buttonWrapper}>
        <Button className={classes.cancelButton} onClick={handleCloseEnquiryForm}>
          Cancel
        </Button>

        <Button
          className={classes.submitButton}
          color="primary"
          disabled={message === ''}
          onClick={handleSubmitProductEnquiry}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(MobileEnquiryForm);
