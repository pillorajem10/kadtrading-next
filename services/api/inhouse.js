// utils
import { formatPayloadParams } from 'utils/formatter';
import { cleanObject } from 'utils/methods';

import { GET, POST } from '../request';

///////////////////////////
export async function fetchInhouseByParams(params) {
  return GET(`/inhouse-diamond?${formatPayloadParams(params)}`);
}

/**
 * fetch product details by product id
 * @param {*} productId
 */
 export async function fetchInHouseDetailsById(productId) {
  return GET(`/inhouse-diamond/${productId}`);
}
//////////////////////////

/**
 * post product enquiry
 * @param {*} payload
 */
export async function postProductEnquiry(payload) {
  return POST('/product-api-v2/emails/product-inquiry', payload);
}

/**
 * fetch product settings
 */
export async function fetchProductSettings() {
  return GET('/product-api-v2/settings');
}

/**
 * fetch  elastic search keyword
 * @param {*} keyword
 */
export async function fetchElasticSearchKeyword(keyword) {
  const params = { keyword, highlight: true };

  return GET(`/product-api-v2/elastic?${formatPayloadParams(params)}`);
}

/**
 * fetch keyword suggestion
 * @param {*} keyword
 */
export async function fetchKeywordSuggestion(keyword) {
  return GET(`/product-api-v2/analytics/suggestions?keyword=${keyword}`);
}

/**
 * fetch product category by params
 * @param {*} productId
 */
export async function fetchProductCategoryByParams(params) {
  return GET(`/product-api-v2/categories?${formatPayloadParams(params)}`);
}

/**
 * fetch products by params
 * @param {*} productId
 */
export async function fetchProductsByParams(params) {
  return GET(`/product-api-v2/products?${formatPayloadParams(cleanObject(params))}`);
}

/**
 * fetch merchant recommends product by product id
 * @param {*} productId
 */
export async function fetchMerchantRecommendProducts(productId) {
  return GET(`/product-api-v2/products/${productId}/recommendations?scope=MERCHANT`);
}

/**
 * fetch category recommend products by product id
 * @param {*} productId
 */
export async function fetchCategoryRecommendProducts(productId) {
  return GET(`/product-api-v2/products/${productId}/recommendations?scope=ALL`);
}

/**
 * fetch product briefs
 * @param {*} payload
 */
export async function fetchProductBriefs(payload) {
  const params = { productIds: payload, showVariants: true, showOptions: true };

  return GET(`/product-api-v2/product-briefs?${formatPayloadParams(params)}`);
}

/**
 * fetch random product
 */
export async function fetchRandomProduct() {
  return GET('/product-api-v2/products/random?total=12');
}

/**
 * fetch product promotion details by product id
 * @param {*} productId
 */
export async function fetchProductPromotionDetailsById(productId) {
  return GET(`/transaction-api/promotions/product/${productId}`);
}

/**
 * fetch batch product promotion summary
 * @param {*} params
 */
export async function fetchBatchProductPromotionSummary(params) {
  return GET(`/transaction-api/promotions/summary?productIds=${params}`);
}

/**
 * fetch category filter by params
 * @param {*} id
 */
export async function fetchListingFilterByParams(params) {
  return GET(`/product-api-v2/filters?${formatPayloadParams(params)}`);
}

/**
 * fetch delivery options by params
 * @param {*} params
 */
export async function fetchDeliveryOptionsByParams(params) {
  return GET(`/product-api-v2/delivery-options?${formatPayloadParams(params)}`);
}
