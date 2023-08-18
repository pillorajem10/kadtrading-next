// utils
import { formatPayloadParams } from 'utils/formatter';

import { POST, GET, DELETE, PUT } from '../request';

/**
 * email verification
 * @param {*} payload
 */
export async function emailVerification(payload) {
  return POST('/account/code', payload);
}

/**
 * create user
 * @param {*} payload
 */
export async function createUser(payload) {
  return POST('/account', payload);
}

/**
 * update user
 * @param {*} payload
 */
export async function updateUser(payload) {
  const { _id, ...params } = payload;
  return PUT(`/account/${_id}`, { ...params });
}

/**
 * user login
 * @param {*} payload
 */
export async function login(payload) {
  return POST('/account/login', payload);
}

/**
 * user fb-login
 * @param {*} payload
 */
export async function fbLogin(payload) {
  return POST('/account/facebook-login', payload);
}

/**
 * user fb-login
 * @param {*} payload
 */
export async function googleLogin(payload) {
  return POST('/account/google-login', payload);
}

/**
 * update user role
 * @param {*} payload
 */
export async function updateUserRole(payload) {
  const { email, newRole } = payload;

  return PUT(`/account/users/${email}/roles`, { newRole });
}

/**
 * forget password
 * @param {*} payload
 */
export async function forgetPassword(payload) {
  return POST('/account/forgot', payload);
}

/**
 * create user
 * @param {*} payload
 */
export async function resetPassword(payload) {
  const { resetPassToken } = payload;
  return PUT(`/account/reset/${resetPassToken}`, payload);
}

/**
 * TODO: will be remove it, if we are not using it
 * check reset password token
 * @param {*} queryParams
 */
export async function checkResetPasswordToken(queryParams) {
  return GET(`/account/reset-password/validate?${queryParams}`);
}

/**
 * add favourite item
 * @param {*} payload
 */
export async function addFavourite(payload) {
  return POST('/account/favorites/items', payload);
}

/**
 * delete favourite item
 * @param {*} productId
 */
export async function deleteFavourite(productId) {
  return DELETE(`/account/favorites/items/${productId}`);
}

/**
 * fetch favourite items by params
 * @param {*} params
 */
export async function fetchFavouriteItemsByParams(params) {
  return GET(`/account/favorites/items?${formatPayloadParams(params)}`);
}

/**
 * fetch favourite groups
 * @param {*} params
 */
export async function fetchFavouriteGroups(params) {
  return GET(`/account/favorites/groups?${formatPayloadParams(params)}`);
}

/**
 * fetch favourite merchants by params
 * @param {*} params
 */
export async function fetchFavouriteMerchantsByParams(params) {
  return GET(`/account/favorites/merchants?${formatPayloadParams(params)}`);
}

/**
 * add favourite merchant by id
 * @param {*} payload
 */
export async function addFavouriteMerchantById(payload) {
  return POST('/account/favorites/merchants', payload);
}

/**
 * delete favourite merchant by id
 * @param {*} merchantId
 */
export async function deleteFavouriteMerchantById(merchantId) {
  return DELETE(`/account/favorites/merchants/${merchantId}`);
}
