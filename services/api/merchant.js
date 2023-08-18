// utils
import { formatPayloadParams } from 'utils/formatter';

import { GET } from '../request';

/**
 * fetch merchant directory
 */
export async function fetchMerchantDirectory() {
  return GET('/product-api-v2/merchant-directory');
}

/**
 * fetch merchants by params
 * @param {*} params
 */
export async function fetchMerchantsByParams(params) {
  // return GET(`/product-api-v2/merchants?${formatPayloadParams(params)}`);
  return GET(`/merchants?${formatPayloadParams(params)}`);
}

/**
 * fetch merchant profile by merchant id
 * @param {*} merchantId
 */
export async function fetchMerchantProfileById(merchantId) {
  // return GET(`/product-api-v2/merchants/${merchantId}`);
  return GET(`/merchants/${merchantId}`);
}

/**
 * fetch product merchants by params
 * @param {*} productId
 */
