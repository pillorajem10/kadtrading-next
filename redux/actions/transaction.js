// api
import {
  getCart,
  getLatestCart,
  updateCart,
  mergeCart,
  deleteCartItemById,
  applyVoucher,
  deleteVoucher,
  applyDelivery,
  fetchDeliveryAddress,
  createDeliveryAddress,
  updateDeliveryAddressById,
  transactionStripeCheckout,
  transactionStripeGuestCheckout,
  fetchTransactionByParams,
  fetchTransactionDetails,
  fetchTransactionBySessionId,
} from 'services/api/transaction';

import { fetchDeliveryOptionsByParams } from 'services/api/product';

// types
import * as actionTypes from '../types';

// actions
import { errorHandlerNotification } from './ui';

/**
 * set transaction cart
 * @param {*} transactionCart
 */
export const setTransactionCart = (transactionCart) => async (dispatch) => {
    return dispatch({
      type: actionTypes.SET_TRANSACTION_CART,
      payload: transactionCart,
    });
};

/**
 * get transaction cart
 */
export const getTransactionCart = () => async (dispatch) => {
  try {
    const res = await getCart();
    const { success, msg } = res;

    if (success) {
      const data = {
        ...res.data,
        _id: undefined,
        id: res.data._id,
      };
      dispatch(setTransactionCart(data));

      return { ...res, data };
    }
    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * get latest transaction cart
 */
export const getLatestTransactionCart = () => async (dispatch) => {
  try {
    const res = await getLatestCart();
    const { success, msg } = res;

    if (success) {
      const data = {
        ...res.data,
        _id: undefined,
        id: res.data._id,
      };
      dispatch(setTransactionCart(data));

      return { ...res, data };
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * update transaction cart
 * @param {*} payload
 */
export const updateTransactionCart = (payload) => async (dispatch) => {
  try {
    const res = await updateCart(payload);
    const { success, msg } = res;
    
    if (success) {
      const data = {
        ...res.data,
        id: res.data._id,
      };      
      dispatch(setTransactionCart(data));
      return { ...res, data };
    }
    return dispatch(errorHandlerNotification(msg));

  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        return dispatch(errorHandlerNotification(`${e.response.data}: You need to be logged in.`));
      } else {
        return { success: false, data: 502 };
      }
    }
  }
};

/**
 * merge transaction cart
 */
export const mergeTransactionCart = () => async (dispatch) => {
  try {
    const res = await mergeCart();
    const { success, data, msg } = res;

    if (success) {
      dispatch(setTransactionCart(data));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * delete transaction cart item by id
 * @param {*} payload
 */
export const deleteTransactionCartItemById = (payload) => async (dispatch) => {
  try {
    const res = await deleteCartItemById(payload);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setTransactionCart(data));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * apply voucher code
 * @param {*} payload
 */
export const applyVoucherCode = (payload) => async (dispatch) => {
  try {
    const res = await applyVoucher(payload);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setTransactionCart(data));
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * delete voucher code
 * @param {*} payload
 */
export const deleteVoucherCode = (payload) => async (dispatch) => {
  try {
    const res = await deleteVoucher(payload);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setTransactionCart(data));
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * set delivery options
 * @param {*} deliveryOptions
 */
export const setDeliveryOptions = (v) => ({
  type: actionTypes.SET_DELIVERY_OPTIONS,
  payload: v,
});

/**
 * get delivery options by params
 * @param {*} params
 */
export const getDeliveryOptionsByParams = (params) => async (dispatch) => {
  try {
    const res = await fetchDeliveryOptionsByParams(params);
    const { success, data, msg } = res;
    if (success) {
      dispatch(setDeliveryOptions(data));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * apply delivery option
 * @param {*} payload
 */
export const applyDeliveryOption = (payload) => async (dispatch) => {
  try {
    const res = await applyDelivery(payload);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setTransactionCart(data));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * get delivery address
 */
export const getDeliveryAddress = () => async (dispatch) => {
  try {
    const res = await fetchDeliveryAddress();
    const { success, msg } = res;

    if (success) {
      return {
        success,
        data: res.data.docs.map(a => ({ ...a, id: a._id })),
      };
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * add delivery address
 * @param {*} payload
 */
export const addDeliveryAddress = (payload) => async (dispatch) => {
  try {
    const res = await createDeliveryAddress(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * update delivery address
 * @param {*} payload
 */
export const updateDeliveryAddress = (payload) => async (dispatch) => {
  try {
    const res = await updateDeliveryAddressById(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};





/**
 * transaction checkout
 * @param {*} payload
 */
 export const transactionGuestCheckout = (payload) => async (dispatch) => {
  try {
    const res = await transactionStripeGuestCheckout(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * transaction checkout
 * @param {*} payload
 */
export const transactionCheckout = (payload) => async (dispatch) => {
  try {
    const res = await transactionStripeCheckout(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * get transaction by params
 * @param {*} payload
 */
export const getTransactionByParams = (payload) => async (dispatch) => {
  try {
    const res = await fetchTransactionByParams(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};



export const getTransactionBySessionId = (payload) => async (dispatch) => {
  try {
    const res = await fetchTransactionBySessionId(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 *
 * @param {*} payload
 */
export const getTransactionDetails = (payload) => async (dispatch) => {
  try {
    const res = await fetchTransactionDetails(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * set transaction filter duration
 * @param {*} filter
 */
export const setTransactionFilterDuration = (filter) => ({
  type: actionTypes.SET_TRANSACTION_FILTER_DURATION,
  payload: filter,
});

/**
 * update transaction filter
 * @param {*} filter
 */
export const updateTransactionFilter = (filter) => ({
  type: actionTypes.UPDATE_TRANSACTION_FILTER,
  payload: filter,
});
