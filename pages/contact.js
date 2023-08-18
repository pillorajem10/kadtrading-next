import React, { useState } from 'react';
import Cookies from 'js-cookie';

// MUI Stuff
import { withStyles, Typography, Divider, Button, TextField } from '@material-ui/core';

// layout
import PatternLayout from 'layout/PatternLayout';

// components
import Breadcrumb from 'routes/contact/components/Breadcrumb';

// Utils
import { formValidationCheck } from 'utils/CheckFormValidation';
import { formRules } from 'routes/contact/utils/rules';

// Redux
import { useDispatch } from 'react-redux';
import { common } from 'redux/actions';

// Styling
import styles from 'routes/contact/style';

const Contact = ({ classes }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleSetForm = (event) => {
    event.persist();

    const { value, name } = event.target;

    setForm((currentValues) => {
      return { ...currentValues, [name]: value };
    });

    const filterFormRules = formRules.find((item) => item.fieldName === name);
    const valid = formValidationCheck(filterFormRules.rule, value);

    if (!valid) {
      setErrors((currentValues) => {
        return {
          ...currentValues,
          [filterFormRules.fieldName]: filterFormRules.message,
        };
      });
    } else {
      const errorMessage = errors;

      if (errorMessage[filterFormRules.fieldName]) {
        delete errorMessage[filterFormRules.fieldName];
      }

      setErrors(errorMessage);
    }
  };

  const handleSubmitContactForm = () => {
    let formErrors = {};

    formRules.forEach((item) => {
      const valid = formValidationCheck(item.rule, form[item.fieldName]);

      if (!valid && formErrors[item.fieldName] === undefined) {
        formErrors = { ...formErrors, [item.fieldName]: item.message };
      }
    });

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const { email, phoneNumber, message } = form;
      const account = Cookies.get('account');
      let userName = 'Anonymous';

      if (account) {
        const parseAccount = JSON.parse(account);
        const { firstName, lastName } = parseAccount;
        userName = `${firstName} ${lastName}`;
      }

      const payload = { userName, userEmail: email, phone: phoneNumber, message };

      dispatch(common.sendContactUs(payload)).then((res) => {
        const { success } = res;

        if (success) {
          setForm({
            email: '',
            phoneNumber: '',
            message: '',
          });
        }
      });
    }
  };

  return (
    <PatternLayout>
      <Breadcrumb />

      <Typography className={classes.header}>Contact us</Typography>

      <Divider className={classes.divider} />

      <div className={classes.contactFormContainer}>
        <Typography className={classes.subHeader}>
          We&apos;re here to answer any and all questions you may have! Whether they&apos;re about
          our products or you just wanna say hi, just get in touch with us through the form below.
          Or, you can drop us an email at{' '}
          <a href="mailto:jumbojew@gmail.com">jumbojew@gmail.com</a>. We&apos;ll get back you as
          soon as humanly possible.
        </Typography>

        <Typography className={classes.remark}>
          For customers not currently in Singapore, feel free to drop us an email. We will get back
          to you in no time!
        </Typography>

        <div className={classes.upperRow}>
          <TextField
            type="email"
            label="Email"
            name="email"
            value={form.email}
            onChange={handleSetForm}
            required
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Phone number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleSetForm}
            required
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </div>

        <div className={classes.bottomRow}>
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleSetForm}
            required
            error={!!errors.message}
            helperText={errors.message}
          />
        </div>

        <Button
          color="primary"
          variant="contained"
          className={classes.submitButton}
          onClick={handleSubmitContactForm}
        >
          SUBMIT
        </Button>
      </div>
    </PatternLayout>
  );
};

export default withStyles(styles)(Contact);
