import React from 'react';

// MUI Stuff
import { withStyles, FormControl, TextField, InputAdornment } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const UserInfoSection = ({ classes, formValues, formErrors, setForm }) => {
  const { authenticated, account } = useSelector((state) => state.user);

  const handleFirstNameErrorMessage = () => {
    let errorMessage = '';

    if (formErrors.lname) errorMessage = ' ';

    if (formErrors.fname) errorMessage = formErrors.fname;

    return errorMessage;
  };

  const handleLastNameErrorMessage = () => {
    let errorMessage = '';

    if (formErrors.fname) errorMessage = ' ';

    if (formErrors.lname) errorMessage = formErrors.lname;

    return errorMessage;
  };

  if (!authenticated) return null;

  return (
    <div className={classes.section}>
      <div className={classes.nameContainer}>
        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField
              label="First name"
              name="fname"
              value={formValues.fname}
              onChange={setForm}
              error={!!formErrors.fname}
              helperText={handleFirstNameErrorMessage()}
              required
            />
          </FormControl>
        </div>

        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField
              label="Last name"
              name="lname"
              value={formValues.lname}
              onChange={setForm}
              error={!!formErrors.lname}
              helperText={handleLastNameErrorMessage()}
              required
            />
          </FormControl>
        </div>
      </div>

      <div className={classes.nameContainer}>
        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField label="Email" value={account.email} disabled/>
          </FormControl>
        </div>

        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField
              label="Mobile number"
              name="tel"
              value={formValues.tel}
              onChange={setForm}
              error={!!formErrors.tel}
              helperText={formErrors.tel}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{account.countryCode}</InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(UserInfoSection);
