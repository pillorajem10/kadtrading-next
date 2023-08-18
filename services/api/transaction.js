// utils
import { formatPayloadParams } from 'utils/formatter';
import { cleanObject } from 'utils/methods';

import { PUT, GET, DELETE, POST } from '../request';

/**
 * get cart
 */
export async function getCart() {
  return GET('/transaction-api/cart');
}

/**
 * get latest cart
 */
export async function getLatestCart() {
  const params = { forceRefresh: true };
  return GET(`/transaction-api/cart?${formatPayloadParams(params)}`);
}

/**
 * update cart
 * @param {*} payload
 */
export async function updateCart(payload) {
  return PUT('/transaction-api/cart', payload);
}

/**
 * merge cart
 */
export async function mergeCart() {
  return PUT('/transaction-api/cart/merge');
}

/**
 * delete cart item by id
 * @param {*} id
 */
export async function deleteCartItemById(payload) {
  const { groupId, itemId } = payload;
  // return DELETE(`/transaction-api/cart/items/${variantId}/options/${optionId}`);
  return DELETE(`/transaction-api/cart/group/${groupId}/items/${itemId}`);
}

/**
 * apply transaction code
 * @param {*} payload
 */
export async function applyVoucher(payload) {
  return PUT('/transaction-api/cart/vouchers', payload);
}

/**
 * delete transaction code
 * @param {*} payload
 */
export async function deleteVoucher(payload) {
  return DELETE('/transaction-api/cart/vouchers', payload);
}

/**
 * apply delivery
 * @param {*} payload
 */
export async function applyDelivery(payload) {
  return PUT('/transaction-api/cart/delivery', payload);
}

/**
 * fetch delivery address
 */
export async function fetchDeliveryAddress() {
  return GET('/transaction-api/delivery-addresses');
}

/**
 * create delivery address
 * @param {*} payload
 */
export async function createDeliveryAddress(payload) {
  return POST('/transaction-api/delivery-addresses', payload);
}

/**
 * update delivery address by id
 * @param {*} payload
 */
export async function updateDeliveryAddressById(payload) {
  const { id, ...res } = payload;
  return PUT(`/transaction-api/delivery-addresses/${id}`, { ...res });
}

/**
 * transaction checkout
 * @param {*} payload
 */
export async function transactionStripeCheckout(payload) {
  return POST('/transaction-api/checkout/stripe', payload);
}

export async function transactionStripeGuestCheckout(payload) {
  return POST('/transaction-api/guest-checkout/stripe', payload);
}


/**
 * fetch transaction by params
 * @param {*} payload
 */
export async function fetchTransactionByParams(payload) {
  return GET(`/transaction-api/transactions?${formatPayloadParams(cleanObject(payload))}`);
}

/**
 * fetch transaction details
 * @param {*} payload
 */
export async function fetchTransactionDetails(payload) {
  const params = { showOrders: true, showAddresses: true };

  return GET(`/transaction-api/transactions/${payload}?${formatPayloadParams(params)}`);
}

export async function fetchTransactionBySessionId(payload) {
  return GET(`/transaction-api/transactions/session/${payload}`);
}