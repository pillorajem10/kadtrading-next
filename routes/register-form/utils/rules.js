export const formRules = [
  {
    fieldName: 'firstName',
    rule: 'required',
    message: 'This field is required.',
  },
  {
    fieldName: 'lastName',
    rule: 'required',
    message: 'This field is required.',
  },
  {
    fieldName: 'email',
    rule: 'email',
    message: 'Invalid email address.',
  },
  {
    fieldName: 'phoneNumber',
    rule: 'phone',
    message: 'Invalid format.',
  },
  {
    fieldName: 'password',
    rule: 'password',
    message: 'Be at least 8 characters long, including a mix of letters and numbers',
  },
];
