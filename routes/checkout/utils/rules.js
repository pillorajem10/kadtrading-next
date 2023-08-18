export const formRules = [
  {
    fieldName: 'firstName',
    rule: 'required',
    message: 'The field is required',
  },
  {
    fieldName: 'lastName',
    rule: 'required',
    message: 'The field is required',
  },
  {
    fieldName: 'phone',
    rule: 'required',
    message: 'The field is required',
  },
  {
    fieldName: 'phone',
    rule: 'phone',
    message: 'Invalid format',
  },
  {
    fieldName: 'address',
    rule: 'required',
    message: 'The field is required',
  },
  {
    fieldName: 'unit',
    rule: 'required',
    message: 'The field is required',
  },
  {
    fieldName: 'postcode',
    rule: 'required',
    message: 'The field is required',
  },
  {
    fieldName: 'postcode',
    rule: 'postcode',
    message: 'Invalid format',
  },
  {
    fieldName: 'email',
    rule: 'email',
    message: 'Invalid format',
  },
];
