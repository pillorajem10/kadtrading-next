// utils
import { formatPayloadParams } from 'utils/formatter';
import { cleanObject } from 'utils/methods';

import { GET, POST } from '../request';

export async function fetchGemStoneByParams(params) {
  return GET(`/gemstone?${formatPayloadParams(params)}`);
}

/**
 * fetch gemstones by id
 * @param {*} productId
 */
 export async function fetchGemStoneDetailsById(productId) {
  return GET(`/gemstone/${productId}`);
}
