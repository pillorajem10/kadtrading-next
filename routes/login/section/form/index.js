import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

// MUI Stuff
import {
  withStyles,
  // Button,
  FormControl,
  // Input,
  InputAdornment,
  // InputLabel,
  // OutlinedInput,
  Typography,
  TextField
} from '@material-ui/core';

// MUI Icons
// import EmailIcon from 'mdi-react/EmailIcon';
// import EyeIcon from 'mdi-react/EyeIcon';
// import EyeOffIcon from 'mdi-react/EyeOffIcon';
// import LockIcon from 'mdi-react/LockIcon';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

// Redux
import { useDispatch } from 'react-redux';
import { user, /* transaction */ } from 'redux/actions';

// Styling
import styles from './style.js';

// Utils
import { formValidationCheck } from 'utils/CheckFormValidation';
import { formRules } from 'routes/login/utils/rules';

// pics
import faceBookIcon from 'public/assets/jumbo/facebook.svg';
import googleIcon from 'public/assets/jumbo/google.svg';


const LoginForm = ({ classes }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    const payload = {
      email: formValues.email,
      password: formValues.password,
    };

    const res = await dispatch(user.userLogin(payload));
    const { success } = res;

    if (success) {
      Router.push('/');
    }
  };

  const handleFacebookLogin = async (payload) => {
    // dispatch(user.fbLogin(payload))
    const res = await dispatch(user.userFbLogin(payload));
    const { success } = res;
    if(success) {
      Router.push('/user/profile');
    }
  }

  const handleGoogleLoginSuccess = async (response) => {
    const payload = {
      idToken: response.tokenId
    }
    const res = await dispatch(user.userGoogleLogin(payload));
    const { success } = res;
    if(success) {
      Router.push('/user/profile');
    }
  };

  const handleGoogleLoginFail = (payload) => {
    console.log('[GOOGLE FAILED] ', payload);
  };

  const handleCheckLoginForm = () => {
    let formErrors = {};

    formRules.forEach((item) => {
      const valid = formValidationCheck(item.rule, formValues[item.fieldName]);

      if (!valid && formErrors[item.fieldName] === undefined) {
        formErrors = { ...formErrors, [item.fieldName]: item.message };
      }
    });

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      handleLogin();
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleCheckLoginForm();
    }
  };
  
  return (
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <Typography className={classes.header}>Login</Typography>
        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField
              placeholder="Email"
              error={!!errors.email}
              variant="outlined"
              type="email"
              helperText={errors.email}
              onChange={(event) => {
                event.persist();
                setFormValues((currentValues) => ({
                  ...currentValues,
                  email: event.target.value,
                }));
              }}
              size="small"
            />
          </FormControl>
        </div>
        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField
              onKeyDown={handleKeyDown}
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment:
                <InputAdornment
                  position="end"
                  onClick={() =>
                    setShowPassword((currentValues) => {
                      return !currentValues;
                    })
                  }
                >
                  <IconButton>
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>,
              }}
              variant="outlined"
              onChange={(event) => {
                event.persist();
                setFormValues((currentValues) => ({
                  ...currentValues,
                  password: event.target.value,
                }));
              }}
              size="small"
            />
          </FormControl>
        </div>
        <div className={classes.linksContainer}>
          <div className={classes.links}>
            <Typography>
              Forgot your password? <Link href="/forgotpass"><a>Reset here</a></Link>
            </Typography>
          </div>
        </div>
        <button onClick={handleCheckLoginForm} className={classes.btn}>LOGIN</button>

        <div className={classes.btnSeparatorContainer}>
          <div className={classes.headerLine} />
          <Typography className={classes.separatorText}>OR</Typography>
          <div className={classes.headerLine} />
        </div>
        <FacebookLogin
          appId={process.env.NEXT_PUBLIC_CLIENT_FB_ID}
          autoLoad={false}
          render={renderProps => (
            <button onClick={renderProps.onClick} className={classes.fbBtn}>
              <img className={classes.fbIcon} src={faceBookIcon} alt="fb"/>
              <div className={classes.fbBtnText}>Sign In Facebook</div>
            </button>
          )}
          callback={handleFacebookLogin}
        />
        <GoogleLogin
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFail}
          render={renderProps => (
            <button onClick={renderProps.onClick} className={classes.gmailBtn}>
              <img className={classes.gmailIcon} src={googleIcon} alt="google"/>
              <div className={classes.fbBtnText}>Sign In Gmail</div>
            </button>
          )}
          cookiePolicy="single_host_origin"
        />,
      </div>
    </div>
  )
}

export default withStyles(styles)(LoginForm);
