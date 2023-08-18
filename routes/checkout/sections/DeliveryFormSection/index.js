import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// components
import { HeaderName } from 'jumbogold/common';

// MUI stuff
import {
  withStyles,
  Typography,
  TextField,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

// Styling
import styles from './style';

const DeliveryFormSection = ({
  classes,
  deliveryForm,
  deliveryAddress,
  deliveryAddressIndex,
  selectDeliveryAddress,
  deliveryFormError,
  setDeliveryForm,
}) => {
  const {
    user: { authenticated },
  } = useSelector((state) => state);

  return (
    <div className={classes.deliveryFormSection}>
      <HeaderName name="Delivery Information" />

      {authenticated &&
        <div className={classes.textFieldRow}>
          {/* Delivery Address */}
          <div className={classes.textFieldColumn}>
            <InputLabel className={classes.saveAddressLabel}>Saved Addresses</InputLabel>
            <Select
              className={classes.textField}
              value={deliveryAddressIndex}
              onChange={selectDeliveryAddress}
              inputProps={{
                name: 'selectedAddress',
                id: 'saved-addresses',
              }}
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              }}
            >
              <MenuItem selected={deliveryAddressIndex === 0} key={0} value={0}>
                <em>None</em>
              </MenuItem>

              {deliveryAddress.slice(0, 5).map((address) => (
                <MenuItem
                  selected={deliveryAddressIndex === address.id}
                  key={address.id}
                  value={address.id}
                >
                  {`${address.firstName} ${address.lastName} - ${address.unit}, ${address.address}, ${address.postcode}`}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.textFieldColumn} />
        </div>    
      }

      {!authenticated &&
        <div className={classes.textFieldRow}>
          <div className={classes.textFieldColumn}>
            <TextField
              size="small"
              className={classes.textField}
              name="email"
              label="Email Address*"
              value={deliveryForm.email}
              onChange={setDeliveryForm}
              error={!!deliveryFormError.email}
            />
            {!!deliveryFormError.email && (
              <Typography className={classes.errorMessage}>{deliveryFormError.error}</Typography>
            )}
          </div>
        </div>      
      }      



      {/* First Name */}
      <div className={classes.textFieldRow}>
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            name="firstName"
            label="First Name*"
            value={deliveryForm.firstName}
            onChange={setDeliveryForm}
            error={!!deliveryFormError.firstName}
          />
          {!!deliveryFormError.firstName && (
            <Typography className={classes.errorMessage}>{deliveryFormError.firstName}</Typography>
          )}
        </div>

        {/* Last Name */}
        <div className={classes.textFieldColumn}>
          <TextField
            size="small"
            className={classes.textField}
            name="lastName"
            label="Last name*"
            value={deliveryForm.lastName}
            onChange={setDeliveryForm}
            error={!!deliveryFormError.lastName}
          />
          {!!deliveryFormError.lastName && (
            <Typography className={classes.errorMessage}>{deliveryFormError.lastName}</Typography>
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
            value={deliveryForm.address}
            onChange={setDeliveryForm}
            error={!!deliveryFormError.address}
          />
          {!!deliveryFormError.address && (
            <Typography className={classes.errorMessage}>{deliveryFormError.address}</Typography>
          )}
        </div>

        <div className={classes.textFieldColumn}>
          {/* Unit */}
          <TextField
            className={classes.textField}
            name="unit"
            label="Floor / Unit / Suite / Apt*"
            value={deliveryForm.unit}
            onChange={setDeliveryForm}
            error={!!deliveryFormError.unit}
          />
          {!!deliveryFormError.unit && (
            <Typography className={classes.errorMessage}>{deliveryFormError.unit}</Typography>
          )}
        </div>
      </div>

      <div className={classes.textFieldRow}>
        {/* Postcode */}
        <div className={classes.textFieldColumn}>
          <TextField
            className={classes.textField}
            type="number"
            name="postcode"
            label="Postal Code*"
            value={deliveryForm.postcode}
            onChange={setDeliveryForm}
            error={!!deliveryFormError.postcode}
          />
          {!!deliveryFormError.postcode && (
            <Typography className={classes.errorMessage}>{deliveryFormError.postcode}</Typography>
          )}
        </div>

        {/* Phone Number */}
        <div className={classes.textFieldColumn}>
          <TextField
            className={classes.textField}
            name="phone"
            type="number"
            label="Phone Number*"
            value={deliveryForm.phone}
            onChange={setDeliveryForm}
            error={!!deliveryFormError.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{deliveryForm.countryCode}</InputAdornment>
              ),
            }}
          />
          {!!deliveryFormError.phone && (
            <Typography className={classes.errorMessage}>{deliveryFormError.phone}</Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(DeliveryFormSection);
