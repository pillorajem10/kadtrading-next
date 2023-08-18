import React, { useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, TextField, FormControl, InputAdornment } from '@material-ui/core';

// MUI Icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

// Layout
import PatternLayout from 'layout/PatternLayout';

// Styling
import styles from 'routes/resetpassword/style';

// pics
import loginHeader from 'public/assets/jumbo/loginHeader.jpg';


// Redux
import { useDispatch } from 'react-redux';
import { user } from 'redux/actions';

// Utils
import { formValidationCheck } from 'utils/CheckFormValidation';
import { formRules } from 'routes/resetpassword/utils/rules';

const ResetPass = ({ classes, resetPassToken }) => {
  const dispatch = useDispatch();
  // const { authenticated, account } = useSelector((state) => state.user);

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [formValues, setFormValues] = useState({
    password: '',
    password2: ''
  });

  const handleResetPass = async () => {
    const payload = {
      resetPassToken: resetPassToken.data.token,
      password: formValues.password,
      password2: formValues.password2,
    };
    dispatch(user.resetUserPassword(payload));
    Router.push('/');
  };

  const handleCheckRegForm = () => {
    let formErrors = {};
    formRules.forEach((item) => {
      const valid = formValidationCheck(item.rule, formValues[item.fieldName]);

      if (!valid && formErrors[item.fieldName] === undefined) {
        formErrors = { ...formErrors, [item.fieldName]: item.message };
      }
    });

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      handleResetPass();
    }
  };

  return (
    <>
      <img className={classes.headerPic} src={loginHeader} alt="Header"/>
      <div className={classes.resetpass}>
        {/* Form container */}
        <div className={classes.formContainer}>
          <div className={classes.form}>
          <Typography className={classes.header}>Reset Password</Typography>
            <div className={classes.formInput}>
              <FormControl className={classes.formText}>
                <TextField
                  error={!!errors.password}
                  placeholder="Password"
                  helperText={errors.password}
                  onChange={(event) => {
                    event.persist();
                      setFormValues((currentValues) => ({
                        ...currentValues,
                      password: event.target.value,
                    }));
                  }}
                  variant="outlined"
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
                  size="small"
                />
              </FormControl>
            </div>
            <div className={classes.formInput}>
              <FormControl className={classes.formText}>
                <TextField
                  error={!!errors.password2}
                  placeholder="Password Confirm"
                  helperText={errors.password2}
                  onChange={(event) => {
                    event.persist();
                    setFormValues((currentValues) => ({
                      ...currentValues,
                      password2: event.target.value,
                    }));
                  }}
                  variant="outlined"
                  type={showPassword2 ? 'text' : 'password'}
                  InputProps={{
                    endAdornment:
                    <InputAdornment
                      position="end"
                      onClick={() =>
                        setShowPassword2((currentValues) => {
                          return !currentValues;
                        })
                      }
                    >
                      <IconButton>
                        {showPassword2 ? <VisibilityOff/> : <Visibility/>}
                      </IconButton>
                    </InputAdornment>,
                  }}
                  size="small"
                />
              </FormControl>
            </div>
            <div><button onClick={handleCheckRegForm} className={classes.btn}>PROCEED</button></div>
          </div>
        </div>
      </div>
    </>
  )
};

export const getServerSideProps = async (context) => {
  // const env = process.env.ENV_KEY;
  const env = process.env.NODE_ENV;

  let origin = '';
  switch (env) {
    case 'development':
      origin = 'http://127.0.0.1:3007';
      break;
    case 'production':
      origin = 'https://hapichair.com/api-v1';
      break;
    default:
      origin = 'https://hapichair.com/api-v1';
  }

  const res = await fetch(`${origin}/account/gettoken/${context.params.resetPassToken}`);
  const resetPassToken = await res.json();
  return {
    props: { resetPassToken }
  }
}


export default withStyles(styles)(ResetPass);
