// api
import {
  fetchMerchantDirectory,
  fetchMerchantProfileById,
  fetchMerchantsByParams,
} from 'services/api/merchant';

// types
import * as actionTypes from '../types';

// actions
import { errorHandlerNotification } from './ui';

/**
 * set merchant profile
 * @param {*} profile
 */
export const setMerchantProfile = (profile) => ({
  type: actionTypes.SET_MERCHANT_PROFILE,
  payload: profile,
});

/**
 * get diamond merchant profile
 * @param {*} merchant
 */
 export const getSellerProfile = (v) => (dispatch) => {
  try {
    // const res = await fetchMerchantProfileById(merchantId);
    // const { success, data, msg } = res;
    const { body, header } = v;

    const data = {
      ...body.seller,

    };

    if (header.error_code === 0) {
      dispatch(setMerchantProfile(data));
     } else {
      dispatch(errorHandlerNotification(header.error_message));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};


/**
 * get merchant profile by merchant id
 * @param {*} merchantId
 */
export const getMerchantProfileById = (merchantId) => async (dispatch) => {
  try {
    const res = await fetchMerchantProfileById(merchantId);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setMerchantProfile(data));
      dispatch({
        type: actionTypes.SET_DELIVERY_OPTIONS,
        payload: data.deliveryOptions,
      });

    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    console.log('[CATCH getMerchantProfileById] ', err);
    dispatch(errorHandlerNotification('Merchant profile not found.'));
  }
};

/**
 * get merchants by params
 * @param {*} params
 */
export const getMerchantsByParams = (params) => async (dispatch) => {
  try {
    const res = await fetchMerchantsByParams(params);
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
 * get merchant directory
 */
export const getMerchantDirectory = () => async (dispatch) => {
  try {
    const res = await fetchMerchantDirectory();
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};
