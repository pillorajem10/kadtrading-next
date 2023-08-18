import React, { useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles,
  TextField,
  InputAdornment,
  FormControl,
  Typography,
  useMediaQuery,
  // MenuItem,
  // FormControlLabel,
  // Checkbox
} from '@material-ui/core';

// MUI Icons
// import EmailIcon from 'mdi-react/EmailIcon';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'redux/actions';

// Utils
import { formValidationCheck } from 'utils/CheckFormValidation';
import { formRules } from 'routes/register/utils/rules';
// import { countries } from 'routes/register/utils/countries';

// Recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// moment
// import moment from 'moment';

// Styling
import styles from './style.js';

const Form = ({ classes }) => {
  const mobileScreen = useMediaQuery("(max-width: 500px)");
  const dispatch = useDispatch();
  const { /* account, */ registerUser } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaErrMsg, setRecaptchaErrMsg] = useState(false);
  // const [subscribed, setSubscribed] = useState(false);
  // const [readPrivacyPolicy, setReadPrivacyPolicy] = useState(false);

  /// const monthNow = moment(Date.now()).format('MM' ,{ trim: false });
  /// const yearNow = moment(Date.now()).format('YYYY' ,{ trim: false });
  /// const dayNow = moment(Date.now()).format('DD' ,{ trim: false });

  /// const dateToday = `${yearNow}-${monthNow}-${dayNow}`;

  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    tel: '',
    // fax: '',
    password: '',
    password2: '',
    // postalcode: '',
    // add1: '',
    // add2: '',
    // unitNum: '',
    // city: '',
    // country: '',
    // dob: dateToday,
    // gender: '',
    profilePic: '',
    // recaptchaValue,
    // username: '',
    // subscribed,
    // readPrivacyPolicy,
  });

  /* const handleCheckboxForSub = () => {
    if (subscribed === true) {
      setSubscribed(false);
    } else {
      setSubscribed(true);
    }
  };

  const handleCheckboxForPrivacy = () => {
    if (readPrivacyPolicy === true) {
      setReadPrivacyPolicy(false);
    } else {
      setReadPrivacyPolicy(true);
    }
  }; */

  const handleRegister = async () => {
    const payload = {
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      tel: formValues.tel,
      // fax: formValues.fax,
      password: formValues.password,
      password2: formValues.password2,
      // postalcode: formValues.postalcode,
      // add1: formValues.add1,
      // add2: formValues.add2,
      // unitNum: formValues.unitNum,
      // city: formValues.city,
      // country: formValues.country,
      // dob: formValues.dob,
      // gender: formValues.gender,
      profilePic: 'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/account/defaultPic/1627493794133_jumbo_gold.jpg',
      recaptchaValue
      // username: formValues.username,
      // subscribed,
      // readPrivacyPolicy,
    };

    const response = await dispatch(user.registerUser(payload));
    if (response.success) {
      if (Object.keys(registerUser).length > 0) {
        Router.push('/user/profile');
      } else {
        Router.push('/user/profile');
      }
    }
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
      if(recaptchaValue !== null) {
        handleRegister();
      } else {
        setRecaptchaErrMsg(true);
      }
    }
  };

  const handleRecaptchaValue = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography className={classes.header}>Register</Typography>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.fname}
                helperText={errors.fname}
                placeholder="First Name"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    fname: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.lname}
                helperText={errors.lname}
                placeholder="Last Name"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    lname: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.email}
                helperText={errors.email}
                placeholder="E-mail"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    email: event.target.value,
                  }));
                }}
                type="email"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          {/*<div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.username}
                placeholder="Username"
                variant="outlined"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    username: event.target.value,
                  }));
                }}
                size="small"
              />
            </FormControl>
  </div>*/}
          {/*<div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.gender}
                placeholder="Gender"
                variant="outlined"
                size="small"
                select
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    gender: event.target.value,
                  }));
                }}
                defaultValue="Gender"
              >
                <MenuItem value="Gender">Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </FormControl>
  </div>*/}
          {/*<div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.dob}
                variant="outlined"
                type="date"
                label="Date of birth"
                defaultValue={dateToday}
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    dob: event.target.value,
                  }));
                }}
                size="small"
                className={classes.textField}
              />
            </FormControl>
  </div> */}
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.tel}
                helperText={errors.tel}
                placeholder="Mobile Phone"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    tel: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.password}
                helperText={errors.password}
                placeholder="Password"
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
                helperText={errors.password2}
                placeholder="Password Confirm"
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
          <div className={classes.btnContainer}>
            <div style={{marginBottom: "1rem"}}>
              { mobileScreen ? (
                  <ReCAPTCHA
                    onChange={handleRecaptchaValue}
                    size="compact"
                    sitekey="6LcpZ-wbAAAAALMBTUNVeD0Ck6y6YilI6g6bS-_h"
                  />
                ) :(
                  <ReCAPTCHA
                    onChange={handleRecaptchaValue}
                    size="normal"
                    sitekey="6LcpZ-wbAAAAALMBTUNVeD0Ck6y6YilI6g6bS-_h"
                  />
                )
              }
              {recaptchaErrMsg && <div className={classes.checkBoxErrMsg}>Please answer the recaptcha.</div>}
            </div>
            <button onClick={handleCheckRegForm} className={classes.btn}>PROCEED</button>
          </div>
        </div>
        {/* <div className={classes.form}>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.tel}
                placeholder="Mobile Phone"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    tel: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                placeholder="Fax"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    fax: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                error={!!errors.add1}
                placeholder="Address 1"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    add1: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                placeholder="Address 2"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    add2: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                placeholder="Postal Code"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    postalcode: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                placeholder="Unit No."
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    unitNum: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                placeholder="City"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    city: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                select
                error={!!errors.country}
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    country: event.target.value,
                  }));
                }}
                variant="outlined"
                size="small"
                defaultValue="Country"
              >
              <MenuItem value="Country">
                Country
              </MenuItem>
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField>
            </FormControl>
          </div>
        </div>
  <div className={classes.headerLine} /> */}
      </div>
      {/* <div className={classes.checkboxContainer} >
        <div>
          <FormControlLabel
            control={
              <Checkbox
                onClick={handleCheckboxForSub}
                checked={subscribed}
                color="primary"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    subscribed: event.target.checked
                  }));
                }}
              />
            }
            label="Subscribe me to the newsletter"
            labelPlacement="end"
          />
          <div className={classes.checkBoxErrMsg} >
            {errors.subscribed && <>{errors.subscribed}</>}
          </div>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                onClick={handleCheckboxForPrivacy}
                checked={readPrivacyPolicy}
                color="primary"
                onChange={(event) => {
                  event.persist();
                  setFormValues((currentValues) => ({
                    ...currentValues,
                    readPrivacyPolicy: event.target.checked
                  }));
                }}
              />
            }
            label="I have read and agree to the Privacy Policy"
            labelPlacement="end"
          />
          <div className={classes.checkBoxErrMsg} >
            {errors.readPrivacyPolicy && <>{errors.readPrivacyPolicy}</>}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default withStyles(styles)(Form);
