// api
import {
  addFavourite,
  deleteFavourite,
  fetchFavouriteMerchantsByParams,
  fetchFavouriteGroups,
  fetchFavouriteItemsByParams,
  addFavouriteMerchantById,
  deleteFavouriteMerchantById,
} from 'services/api/user';

// types
import * as actionTypes from '../types';

// actions
import { getMerchantProfileById } from './merchant';
import { errorHandlerNotification } from './ui';

/**
 * toggle favourite modal
 * @param {*} showFavouriteModal
 */
export const toggleFavouriteModal = (showFavouriteModal) => ({
  type: actionTypes.TOGGLE_FAVOURITE_MODAL,
  payload: showFavouriteModal,
});

/**
 * add favourite item
 * @param {*} payload
 */
export const addFavouriteItem = (payload) => async (dispatch) => {
  try {
    const res = await addFavourite(payload);
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
 * remove favourite item
 * @param {*} productId
 */
export const removeFavouriteItem = (productId) => async (dispatch) => {
  try {
    const res = await deleteFavourite(productId);
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
 * set total favourite item
 * @param {*} totalFavouriteItem
 */
export const setTotalFavouriteItem = (totalFavouriteItem) => ({
  type: actionTypes.SET_TOTAL_FAVOURITE_ITEM,
  payload: totalFavouriteItem,
});

/**
 * get favourite items
 * @param {*} payload
 */
export const getFavouriteItems = (params = { pageSize: 30, pageIndex: 1 }) => async (dispatch) => {
  try {
    const res = await fetchFavouriteItemsByParams(params);
    const { success, msg } = res;

    if (success) {
      dispatch(setTotalFavouriteItem(res.data.totalDocs));
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * get favourite items by group id
 * @param {*} groupId
 */
export const getFavouriteItemsByGroupId = (groupId) => async (dispatch) => {
  const params = { groupId };

  try {
    const res = await fetchFavouriteItemsByParams(params);
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
 * get favourite groups
 * @param {*} payload
 */
export const getFavouriteGroups = (params) => async (dispatch) => {
  try {
    const res = await fetchFavouriteGroups(params);
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
 * get favourite merchants
 * @param {*} params
 */
export const getFavouriteMerchants = (params) => async (dispatch) => {
  try {
    const res = await fetchFavouriteMerchantsByParams(params);
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
 * add favourite merchant
 * @param {*} merchantId
 */
export const addFavouriteMerchant = (payload) => async (dispatch) => {
  try {
    const res = await addFavouriteMerchantById(payload);
    const { success, msg } = res;

    if (success) {
      const { merchantId } = payload;

      dispatch(getMerchantProfileById(merchantId));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * remove favourite merchant
 * @param {*} merchantId
 */
export const removeFavouriteMerchant = (merchantId) => async (dispatch) => {
  try {
    const res = await deleteFavouriteMerchantById(merchantId);
    const { success, msg } = res;

    if (success) {
      dispatch(getMerchantProfileById(merchantId));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};
