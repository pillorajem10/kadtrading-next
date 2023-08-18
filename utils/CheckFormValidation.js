// Utils
import regExp from './regExp';

export const formValidationCheck = (rule, value) => {
  switch (rule) {
    case 'email':
      return regExp.isEmail(value);

    case 'postcode':
      return regExp.isPostCode(value);

    case 'phone':
      return regExp.isPhoneNumber(value);

    case 'required':
      return !regExp.isEmpty(value);

    case 'checked':
      return regExp.isChecked(value)

    case 'isChecked':
      return value;

    case 'password':
      return regExp.isAtLeast(value, 8) && regExp.hasLetter(value) && regExp.hasNumber(value);

    default:
      return null;
  }
};
