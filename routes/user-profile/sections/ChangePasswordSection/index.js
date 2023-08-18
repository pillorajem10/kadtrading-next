import React from 'react';

// MUI Stuff
import { withStyles, FormControl, TextField, Typography, InputAdornment } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

import regExp from 'utils/regExp';

// Styling
import styles from './style';

const ChangePasswordSection = ({
  classes,
  passwordForm,
  passwordErrors,
  setPasswordForm,
  strongPassword,
}) => {
  const { authenticated } = useSelector((state) => state.user);

  const handleNewPasswordErrorMessage = () => {
    let errorMessage = '';

    if (passwordErrors.confirmPassword) errorMessage = ' ';

    if (passwordErrors.newPassword) errorMessage = passwordErrors.newPassword;

    return errorMessage;
  };

  if (!authenticated) return null;

  return (
    <div className={classes.section}>
      <div className={classes.formInput}>
        <FormControl className={classes.formText}>
          <TextField
            type="password"
            label="Current password"
            name="password"
            value={passwordForm.password}
            onChange={setPasswordForm}
            error={!!passwordErrors.password}
            helperText={passwordErrors.password}
            required
          />
        </FormControl>
      </div>

      <div className={classes.passwordContainer}>
        <div>
          <div className={classes.formInput}>
            <FormControl className={classes.formText}>
              <TextField
                type="password"
                label="Password"
                name="newPassword"
                value={passwordForm.newPassword}
                onChange={setPasswordForm}
                error={!!passwordErrors.newPassword}
                helperText={handleNewPasswordErrorMessage()}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {!regExp.isEmpty(passwordForm.newPassword) && (
                        <div className={classes.strengthIndicatorContainer}>
                          <div
                            className={classes.dot}
                            style={{
                              backgroundColor: !strongPassword ? '#F44336' : '#A2D37B',
                            }}
                          />
                          <Typography
                            className={classes.strengthText}
                            style={{ color: !strongPassword ? '#F44336' : '#A2D37B' }}
                          >
                            {!strongPassword ? 'WEAK' : 'STRONG'}
                          </Typography>
                        </div>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>

          <div className={classes.passwordRulesContainer}>
            <Typography
              style={{
                color: regExp.isAtLeast(passwordForm.newPassword, 8)
                  ? 'rgba(75, 170, 0, 0.6)'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              - Your password has to be at least 8 characters long
            </Typography>
            <Typography
              style={{
                color: regExp.hasLetter(passwordForm.newPassword)
                  ? 'rgba(75, 170, 0, 0.6)'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              - Contain at least one letter
            </Typography>
            <Typography
              style={{
                color: regExp.hasNumber(passwordForm.newPassword)
                  ? 'rgba(75, 170, 0, 0.6)'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              - Contain at least one number
            </Typography>
          </div>
        </div>

        <div className={classes.formInput}>
          <FormControl className={classes.formText}>
            <TextField
              type="password"
              label="Confirm password"
              name="confirmPassword"
              value={passwordForm.confirmPassword}
              onChange={setPasswordForm}
              error={!!passwordErrors.confirmPassword}
              helperText={passwordErrors.confirmPassword}
              required
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ChangePasswordSection);
