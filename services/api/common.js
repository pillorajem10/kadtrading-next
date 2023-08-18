// utils
import { formatPayloadParams } from 'utils/formatter';

import { GET, POST, POST_FORM_DATA } from '../request';


/**
 * fetch conv rates
 */
 export async function fetchCurrencyRates() {
  return GET(`/calcv/rates`);
}
//////////////////////////


/**
 * post contact us
 * @param {*} payload
 */
export async function postContactUs(payload) {
  return POST('/common-api/emails/contact-us', payload);
}

/**
 * post subscription
 * @param {*} payload
 */
export async function postSubscription(payload) {
  return POST('/common-api/subscriptions', payload);
}

/**
 * post new avatar
 * @param {*} payload
 */
export async function postNewAvatar(payload) {
  const params = { container: 'account', prefix: 'tests' };
  return POST_FORM_DATA(`/common-api/files?${formatPayloadParams(params)}`, { data: payload });
}

/**
 * post update avatar
 * @param {*} payload
 */
export async function postUpdateAvatar(payload) {
  const { profilePic, file } = payload;
  const params = { container: 'account', prefix: 'tests', /*url: profilePic*/ };
  return POST_FORM_DATA(`/common-api/files/replace?${formatPayloadParams(params)}`, {
    data: file,
  });
}

/**
 * post review picture
 * @param {*} payload
 */
export async function postReviewPicture(payload) {
  const { params, data } = payload;
  return POST_FORM_DATA(`/common-api/files?${formatPayloadParams(params)}`, { data });
}
