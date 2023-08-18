export const formRules = [
  {
    fieldName: "email",
    rule: "required",
    message: "Please provide your email",
  },
  {
    fieldName: "email",
    rule: "email",
    message: "Email must an @",
  },
  {
    fieldName: "password",
    rule: "required",
    message: "Please provide your password",
  },
  {
    fieldName: "password2",
    rule: "required",
    message: "Please Confirm your password",
  },
  {
    fieldName: "fname",
    rule: "required",
    message: "Please provide your First name",
  },
  {
    fieldName: "lname",
    rule: "required",
    message: "Please provide your Last name",
  },
  /* {
    fieldName: "username",
    rule: "required",
    message: "Please provide your Username",
  }, */
  /* {
    fieldName: "gender",
    rule: "required",
    message: "Please provide your Gender",
  }, */
  /* {
    fieldName: "dob",
    rule: "required",
    message: "Please provide your Date of birth",
  }, */
  {
    fieldName: "tel",
    rule: "required",
    message: "Please provide your Telephone",
  },
  {
    fieldName: 'tel',
    rule: 'phone',
    message: 'Invalid format.',
  },
  /* {
    fieldName: "add1",
    rule: "required",
    message: "Please provide your Address",
  }, */
  /* {
    fieldName: "country",
    rule: "required",
    message: "Please provide your Country",
  }, */
  /* {
    fieldName: "subscribed",
    rule: "checked",
    message: "Please subscribe to the newsletter",
  }, */
  /* {
    fieldName: "readPrivacyPolicy",
    rule: "checked",
    message: "Please read the privacy policy",
  }, */
];
