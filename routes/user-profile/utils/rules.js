export const formRules = [
  {
    fieldName: 'fname',
    rule: 'required',
    message: 'This field is required.',
  },
  {
    fieldName: 'lname',
    rule: 'required',
    message: 'This field is required.',
  },
   {
    fieldName: 'tel',
    rule: 'phone',
    message: 'Invalid format.',
  },
];

export const passwordRules = [
  {
    fieldName: 'password',
    rule: 'required',
    message: 'This field is required.',
  },
  {
    fieldName: 'newPassword',
    rule: 'password',
    message: 'Be at least 8 characters long, including a mix of letters and numbers',
  },
  {
    fieldName: 'confirmPassword',
    rule: 'required',
    message: 'This field is required',
  },
];
