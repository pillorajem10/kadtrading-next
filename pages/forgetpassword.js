import React, { useState } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography, TextField, FormControl, Button } from '@material-ui/core';

// MUI Icons
import EmailIcon from 'mdi-react/EmailIcon';

// layout
import PatternLayout from 'layout/PatternLayout';

// Picture
import greenChecked from 'public/assets/icons/green-checked.png';

// Redux
import { useDispatch } from 'react-redux';
import { user, ui } from 'redux/actions';

// Styling
import styles from 'routes/forgetpassword/style';

const ForgetPassword = ({ classes }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSetEmail = (event) => {
    event.persist();

    setEmail(event.target.value);
  };

  const handleSendResetLink = async () => {
    if (email === '') {
      setIsError(true);
      dispatch(ui.errorNotification({ message: 'Please provide your email.' }));
    } else {
      const res = await dispatch(user.userForgetPassword({ email }));
      const { success } = res;

      if (success) {
        setIsError(false);
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <PatternLayout>
      <div className={classes.forgetPassword}>
        <Typography className={classes.headerOne}>Forget your password ?</Typography>
        <Typography className={classes.headerTwo}>
          Enter the email address associated with your account, and we’ll email you a link to rest
          your password
        </Typography>

        <div className={classes.formContainer}>
          <div className={classes.formInput}>
            <EmailIcon className={`${classes.icon} ${isError ? classes.iconError : ''}`} />
            <FormControl className={classes.formText}>
              <TextField
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={handleSetEmail}
                error={isError}
                required
              />
            </FormControl>
          </div>

          {isSuccess && (
            <div className={classes.alertContainer}>
              <img src={greenChecked} className={classes.checkedIcon} alt="" />
              <Typography>
                An email has been sent to the email address. Please follow the instruction in the
                email to reset your password. Click{' '}
                <Link href="/login">
                  <a>here</a>
                </Link>{' '}
                to go back to the Login page.
              </Typography>
            </div>
          )}

          <Button
            color="primary"
            variant="contained"
            className={classes.submitButton}
            onClick={handleSendResetLink}
          >
            SEND RESET LINK
          </Button>
        </div>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(ForgetPassword);
