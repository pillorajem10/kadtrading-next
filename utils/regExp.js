/* eslint-disable no-useless-escape */

const hasLowerCase = (value) => /[a-z]/.test(value);

const hasUppercase = (value) => /[A-Z]/.test(value);

const hasNumber = (value) => /\d/.test(value);

const hasLetter = (value) => new RegExp('^(?=.*[a-zA-Z])').test(value);

const hasSpecialCharacter = (value) => /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

const isEmail = (value) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  );

const isAtLeast = (value, length) => value.length >= length;

const isPostCode = (value) => /^\d+$/.test(value) && value.length === 6;

const isPhoneNumber = (value) => /^\d+$/.test(value) && value.length === 8;

const isEmpty = (value) => value === null || value === undefined || value.trim() === '';

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

const isDefaultNumber = (value) => value === null || value === 0;

const isChecked = (value) => value === true;

export default {
  hasLowerCase,
  hasUppercase,
  hasNumber,
  hasLetter,
  hasSpecialCharacter,
  isEmail,
  isAtLeast,
  isPostCode,
  isPhoneNumber,
  isEmpty,
  isEmptyObject,
  isDefaultNumber,
  isChecked,
};
