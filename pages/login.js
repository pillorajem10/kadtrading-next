import React from 'react';
import Router from 'next/router';

// MUI Stuff
import {
  withStyles,
  // Button,
  // FormControl,
  // Input,
  // InputAdornment,
  // InputLabel,
  // OutlinedInput,
  Typography,
  // TextField
} from '@material-ui/core';


// Layout
import PatternLayout from 'layout/PatternLayout';

// Redux
import { useSelector } from 'react-redux';
// import { user, /* transaction */ } from 'redux/actions';

// Styling
import styles from 'routes/login/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';

// login form
import LoginForm from 'routes/login/section/form';

// Register form
import RegisterForm from 'routes/register/section/form';

const Login = ({ classes }) => {
  const { authenticated } = useSelector((state) => state.user);

  /*
    const handleMergeCart = async () => {
      const res = await dispatch(transaction.mergeTransactionCart());
      const { success } = res;

      if (success) {
        if (savedUrl) {
          Router.push(savedUrl);
        } else {
          Router.push('/');
        }
      }
    };
 */

  /*
    const handleSetRequestRoleDetails = () => {
      const payload = { email: formValues.email, password: formValues.password };

      dispatch(user.setRequestRoleDetails(payload));

      Router.push('/');
    };
 */

  if (authenticated) Router.push('/');

  return (
    <>
{/*
      <Typography className={classes.header}>Welcome back!</Typography>

      <div className={classes.formContainer}>
        <div className={classes.form}>

          <div className={classes.formInput}>
            <EmailIcon className={`${classes.icon} ${errors.email ? classes.iconError : ''}`} />
            <FormControl className={classes.formText}>
              <InputLabel error={!!errors.email}>Email</InputLabel>
              <Input
                error={!!errors.email}
                type="email"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    email: event.target.value,
                  }));
                }}
              />
            </FormControl>
          </div>


          {!!errors.email && <Typography className={classes.errorText}>{errors.email}</Typography>}


          <div className={classes.formInput}>
            <LockIcon className={`${classes.icon} ${errors.password ? classes.iconError : ''}`} />
            <FormControl className={classes.formText}>
              <InputLabel error={!!errors.password}>Password</InputLabel>
              <Input
                error={!!errors.password}
                type={showPassword ? 'text' : 'password'}
                onKeyPress={(event) => {
                  if (event.charCode === 13) handleCheckLoginForm();
                }}
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    password: event.target.value,
                  }));
                }}
                endAdornment={
                  <InputAdornment
                    position="end"
                    onClick={() =>
                      setShowPassword((currentValues) => {
                        return !currentValues;
                      })
                    }
                  >
                    {showPassword ? (
                      <EyeIcon className={classes.iconButton} />
                    ) : (
                      <EyeOffIcon className={classes.iconButton} />
                    )}
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>


          {!!errors.password && (
            <Typography className={classes.errorText}>{errors.password}</Typography>
          )}


          <Link href="/forgetpassword">
            <a className={classes.forgotPassword}>Forgot password?</a>
          </Link>


          <Button
            className={classes.loginButton}
            color="primary"
            onClick={handleCheckLoginForm}
            variant="contained"
          >
            Log In
          </Button>


          <Link href="/register">
            <a className={classes.registerLink}>Do not have an account? Sign up now!</a>
          </Link>
        </div>
      </div> */}
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      {/* <Typography className={classes.header}>Login</Typography> */}

      <div className={classes.forms}>
        {/* Login form */}
        <LoginForm/>
        {/* Register Form */}
        <RegisterForm/>
      </div>
    </>
  );
};

export default withStyles(styles)(Login);
