export const formRules = [
  {
    fieldName: 'email',
    rule: 'required',
    message: 'Please provide your email',
  },
  {
    fieldName: 'email',
    rule: 'email',
    message: "Something doesn't look right. Please check your email and try again",
  },
  {
    fieldName: 'phoneNumber',
    rule: 'required',
    message: 'Please provide your password',
  },
  {
    fieldName: 'phoneNumber',
    rule: 'phone',
    message: "Something doesn't look right. Please check your phone number and try again",
  },
  {
    fieldName: 'message',
    rule: 'required',
    message: 'Please provide your message',
  },
];
