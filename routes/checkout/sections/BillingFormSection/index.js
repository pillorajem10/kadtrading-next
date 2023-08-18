import React from 'react';

// components
import { HeaderName } from 'jumbogold/common';

// MUI stuff
import { withStyles, Typography, TextField, InputAdornment } from '@material-ui/core';

// Styling
import styles from './style';

const BillingFormSection = ({ classes, billingForm, billingFormError, setBillingForm }) => {
  return (
    <div className={classes.billingFormSection}>
      <HeaderName name="Billing Information" />

      {/* First Name */}
      <div className={classes.textFieldRow}>
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            name="firstName"
            label="First Name*"
            value={billingForm.firstName}
            onChange={setBillingForm}
            error={!!billingFormError.firstName}
          />
          {!!billingFormError.firstName && (
            <Typography className={classes.errorMessage}>{billingFormError.firstName}</Typography>
          )}
        </div>

        {/* Last Name */}
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            name="lastName"
            label="Last name*"
            value={billingForm.lastName}
            onChange={setBillingForm}
            error={!!billingFormError.lastName}
          />
          {!!billingFormError.lastName && (
            <Typography className={classes.errorMessage}>{billingFormError.lastName}</Typography>
          )}
        </div>
      </div>

      <div className={classes.textFieldRow}>
        {/* Address */}
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            name="address"
            label="Street #, Building Name *"
            value={billingForm.address}
            onChange={setBillingForm}
            error={!!billingFormError.address}
          />
          {!!billingFormError.address && (
            <Typography className={classes.errorMessage}>{billingFormError.address}</Typography>
          )}
        </div>

        <div className={classes.textFieldColumn}>
          {/* Unit */}

          <TextField
            size="small"
            className={classes.textField}
            name="unit"
            label="Floor / Unit / Suite / Apt*"
            value={billingForm.unit}
            onChange={setBillingForm}
            error={!!billingFormError.unit}
          />
          {!!billingFormError.unit && (
            <Typography className={classes.errorMessage}>{billingFormError.unit}</Typography>
          )}
        </div>
      </div>

      <div className={classes.textFieldRow}>
        {/* Postcode */}
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            type="number"
            name="postcode"
            label="Postal Code*"
            value={billingForm.postcode}
            onChange={setBillingForm}
            error={!!billingFormError.postcode}
          />
          {!!billingFormError.postcode && (
            <Typography className={classes.errorMessage}>{billingFormError.postcode}</Typography>
          )}
        </div>

        {/* Phone Number */}
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            name="phone"
            type="number"
            label="Phone Number*"
            value={billingForm.phone}
            onChange={setBillingForm}
            error={!!billingFormError.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{billingForm.countryCode}</InputAdornment>
              ),
            }}
          />
          {!!billingFormError.phone && (
            <Typography className={classes.errorMessage}>{billingFormError.phone}</Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(BillingFormSection);
