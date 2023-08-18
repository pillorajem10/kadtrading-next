// utils
import { formatPayloadParams } from 'utils/formatter';
import { cleanObject } from 'utils/methods';

import { GET, POST } from '../request';

export async function fetchDiamondsByParams(params) {
  return GET(`/product-api-v2/global?${formatPayloadParams(cleanObject(params))}`);
}

/**
 * fetch product details by product id
 * @param {*} productId
 */
 export async function fetchDiamondDetailsById(productId) {
  return GET(`/product-api-v2/global/${productId}`);
}
