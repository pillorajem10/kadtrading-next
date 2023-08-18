import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import PinInput from 'react-pin-input';

// MUI Stuff
import { Typography, withStyles, Button, Hidden } from '@material-ui/core';

// Layout
import PatternLayout from 'layout/PatternLayout';

// components
import Welcome from 'routes/activate/components/Welcome';

// Picture
import ohnoWizzo from 'public/assets/images/wizzo/ohno.png';
import wooWizzo from 'public/assets/images/wizzo/woo.png';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { user, transaction, common, ui } from 'redux/actions';

// Styling
import styles from 'routes/activate/style';

let timerInterval;

const Activate = ({ classes }) => {
  const dispatch = useDispatch();
  const { registerUser } = useSelector((state) => state.user);

  const [isError, setIsError] = useState(false);
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const startTimer = () => {
    let timer = 120;
    let minutes;
    let seconds;

    timerInterval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      setCountdown(`${minutes}:${seconds}`);

      timer -= 1;

      if (timer < 0) {
        setCountdown(null);
        clearInterval(timerInterval);
      }
    }, 1000);
  };

  useEffect(() => {
    if (Object.keys(registerUser).length === 0) {
      Router.push('/register/form');
    } else {
      startTimer();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [registerUser, dispatch]);

  const handleSetCode = (value) => setCode(value);

  const handleResendVerificationCode = async () => {
    const { email } = registerUser;

    const res = await dispatch(user.sendEmailVerification({ email }));
    const { success } = res;

    if (success) {
      startTimer();
    }
  };

  const handleSubscription = () => {
    const { email } = registerUser;

    const payload = { email, platform: '' };

    dispatch(common.sendSubscription(payload));
  };

  const handleMergeCart = async () => {
    const res = await dispatch(transaction.mergeTransactionCart());
    const { success } = res;

    if (success) {
      clearInterval(timerInterval);

      Router.push('/choosewizzo');
    }
  };

  const handleLogin = async () => {
    const { email, password } = registerUser;

    const payload = { email, password, platform: '', channel: '' };

    const res = await dispatch(user.useLogin(payload));
    const { success } = res;

    if (success) {
      handleMergeCart();
    }
  };

  const handleActivateAccount = async () => {
    if (code.length !== 6) {
      setIsError(true);

      dispatch(ui.errorNotification('Code is required'));
    } else {
      setIsError(false);

      const payload = {
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        email: registerUser.email,
        mobile: registerUser.mobile,
        countryCode: registerUser.countryCode,
        password: registerUser.password,
        platform: '',
        code,
      };

      const res = await dispatch(user.registerUser(payload));
      const { success } = res;

      if (success) {
        setShowWelcome(true);

        if (registerUser.subscribed) {
          handleSubscription();
        }

        handleLogin();
      }
    }
  };

  if (showWelcome)
    return (
      <PatternLayout>
        <Welcome />
      </PatternLayout>
    );

  return (
    <PatternLayout>
      <Typography className={classes.headerOne}>Enter Activation Code</Typography>
      <Typography className={classes.headerTwo}>
        An activation code has been sent to your email address <span>{registerUser?.email}</span>.
      </Typography>

      <div className={classes.activationContainer}>
        <Hidden xsDown>
          <img src={isError ? ohnoWizzo : wooWizzo} alt="" className={classes.wizzoImage} />
        </Hidden>

        <div className={classes.activationCodeContainer}>
          <Hidden xsDown>
            <PinInput
              length={6}
              focus
              type="numeric"
              onChange={handleSetCode}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0 15px',
              }}
              inputStyle={{
                width: 40,
                height: 56,
                borderRadius: 4,
                border: isError ? 'solid 2px #b00020' : 'solid 1px #757575',
                fontSize: 32.4,
                fontWeight: 500,
                letterWpacing: 0.25,
                color: 'rgba(0, 0, 0, 0.87)',
              }}
            />
          </Hidden>

          <Hidden smUp>
            <PinInput
              length={6}
              focus
              type="numeric"
              onChange={handleSetCode}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 180,
              }}
              inputStyle={{
                width: 32,
                height: 40,
                borderRadius: 4,
                border: isError ? 'solid 2px #b00020' : 'solid 1px #757575',
                fontSize: 16.8,
                lineHeight: 1.43,
                letterSpacing: 0.15,
                color: 'rgba(0, 0, 0, 0.87)',
              }}
            />
          </Hidden>

          <div className={classes.buttonGroup}>
            <Hidden xsDown>
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                  disabled={!!countdown}
                  onClick={handleResendVerificationCode}
                >
                  Resend code
                </Button>

                {countdown && (
                  <Typography className={classes.timerText}>Code expire in {countdown}</Typography>
                )}
              </div>
            </Hidden>

            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={handleActivateAccount}
            >
              Activate
            </Button>

            <Hidden smUp>
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                  disabled={!!countdown}
                  onClick={handleResendVerificationCode}
                >
                  Resend code
                </Button>

                {countdown && (
                  <Typography className={classes.timerText}>Code expire in {countdown}</Typography>
                )}
              </div>
            </Hidden>
          </div>
        </div>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(Activate);
