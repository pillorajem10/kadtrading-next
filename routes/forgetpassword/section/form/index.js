import React, { useState } from 'react';
// import Router from 'next/router';

// MUI Stuff
import { withStyles,
  TextField,
  FormControl,
  Typography
} from '@material-ui/core';


// Redux
import { useDispatch } from 'react-redux';
import { user } from 'redux/actions';

// Utils
import { formValidationCheck } from 'utils/CheckFormValidation';
import { formRules } from 'routes/forgetpassword/utils/rules';

// Styling
import styles from './style.js';

const Form = ({ classes }) => {
  const dispatch = useDispatch();
  // const { /* account, */ registerUser } = useSelector((state) => state.user);

  const [errors, setErrors] = useState({});

  const [formValues, setFormValues] = useState({
    email: '',
  });

  const handleForgetPass = async () => {
    const payload = {
      email: formValues.email,
    };

    dispatch(user.userForgetPassword(payload));
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
      handleForgetPass();
    }
  };

  return (
    <>
      {/* Form container */}
      <div className={classes.forgotPass}>
        <div className={classes.formContainer}>
          <div className={classes.form}>
            <Typography className={classes.header}>Forgot Password</Typography>
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
            <button onClick={handleCheckRegForm} className={classes.btn}>PROCEED</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Form);
