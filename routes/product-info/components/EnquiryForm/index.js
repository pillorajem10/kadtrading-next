import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Button, IconButton, Paper, TextField, Typography } from '@material-ui/core';

// MUI Icons
import CloseIcon from '@material-ui/icons/Close';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Reux
import { useSelector, useDispatch } from 'react-redux';
import { common } from 'redux/actions';

// Styling
import styles from './style';

const EnquiryForm = ({ classes, closeProductEnquiry }) => {
  const dispatch = useDispatch();
  const {
    product: { productDetails },
    user: { account },
  } = useSelector((state) => state);

  const router = useRouter();
  const { asPath } = router;

  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCloseEnquiryForm = () => {
    closeProductEnquiry();

    // clear all the state after 1 seconds
    setTimeout(() => {
      setMessage('');
      setIsSubmitted('');
      setError('');
    }, 1000);
  };

  useEffect(() => {
    return () => {
      closeProductEnquiry();
    };
  }, [asPath]);

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
      setIsSubmitted(true);

      // close enquiry form after 3 seconds
      setTimeout(() => {
        handleCloseEnquiryForm();
      }, 3000);
    } else {
      setIsSubmitted(false);
      setError('Something is not right. Please try again.');
    }
  };

  return isSubmitted ? (
    <Paper className={classes.submitLayout} elevation={3}>
      <div className={classes.submitInnerWrapper}>
        {/* Header */}
        <div className={classes.formHeader}>
          <div />
          {/* Close Button */}
          <IconButton
            aria-label="close enquiry"
            className={classes.closeIconButton}
            disableRipple
            onClick={handleCloseEnquiryForm}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* Submitted Message */}
        <Typography>Thank you! Your enquiry has been sent.</Typography>
        <Typography>Please be patient and we will be in touch soon!</Typography>
      </div>
    </Paper>
  ) : (
    <Paper
      className={error ? classes.errorEnquiryFormlayout : classes.enquiryFormlayout}
      elevation={3}
    >
      <div className={classes.enquiryFormInnerWrapper}>
        <div className={classes.formHeader}>
          {/* Header */}
          <div className={classes.formHeaderText}>
            <Typography className={classes.headerText}>
              Request for more information about this item /
            </Typography>

            <Typography className={classes.headerText}>What are your concerns?</Typography>
          </div>

          {/* Close Button */}
          <IconButton
            aria-label="close enquiry"
            className={classes.closeIconButton}
            disableRipple
            onClick={handleCloseEnquiryForm}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* Enquiry Form Text Field */}
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

        {/* Error Message */}
        {!!error && (
          <div className={classes.errorWrapper}>
            <ErrorOutlineIcon className={classes.errorIcon} />
            <Typography className={classes.errorText}>{error}</Typography>
          </div>
        )}

        {/* Button Group */}
        <div className={classes.buttonWrapper}>
          {/* Cancel Button */}
          <Button className={classes.cancelButton} onClick={handleCloseEnquiryForm}>
            Cancel
          </Button>

          {/* Submit Button */}
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
    </Paper>
  );
};

export default withStyles(styles)(EnquiryForm);
