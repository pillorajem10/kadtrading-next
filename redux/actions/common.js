// api
import { fetchCurrencyRates, postContactUs, postSubscription } from 'services/api/common';
import { fetchProductSettings, postProductEnquiry } from 'services/api/product';

// types
import * as actionTypes from '../types';

// actions
import { errorHandlerNotification, successNotification } from './ui';

/**
 * set settings
 * @param {*} settings
 */
export const setSettings = (settings) => ({
  type: actionTypes.SET_SETTINGS,
  payload: settings,
});

/**
 * set currency rates
 */
 export const setCurrencyRates = (v) => async (dispatch) => {  
  dispatch({
    type: actionTypes.SET_CURRENCY_RATES,
    payload: v,
  });
};

/**
 * set system currency
 */
 export const setSystemCurrency = (v) => async (dispatch) => {
  localStorage.setItem('currency', v);
  
  dispatch({
    type: actionTypes.SET_CURRENCY,
    payload: v,
  });
};

/**
 * set system gst
 */
 export const setSystemGst = (v) => async (dispatch) => {
  localStorage.setItem('gst', v);
  dispatch({
    type: actionTypes.SET_SYSTEM_GST,
    payload: v,
  });
};

/**
 * get currency rates
 */
 export const getCurrencyRates = () => async (dispatch) => {
  try {
    const res = await fetchCurrencyRates();
    const { data, success, msg } = res;

    if (success) {
      dispatch(setCurrencyRates(JSON.parse(data[0].rates)));
      dispatch(setSystemGst(+data[0].gst));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    console.log('[CATCH getCurrencyRates] ', err)
    dispatch(errorHandlerNotification('Currency rates not available.'));
  }
};




/**
 * get settings
 */
export const getSettings = () => async (dispatch) => {
  try {
    const res = await fetchProductSettings();
    const { data, success, msg } = res;

    if (success) {
      dispatch(setSettings(data));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * toggle cart side bar
 * @param {*} showCartSidebar
 */
export const toggleCartSideBar = (showCartSidebar) => ({
  type: actionTypes.TOGGLE_CART_SIDE_BAR,
  payload: showCartSidebar,
});

/**
 * set url
 * @param {*} savedUrl
 */
export const setSavedURL = (savedUrl) => ({
  type: actionTypes.SET_SAVED_URL,
  payload: savedUrl,
});

/**
 * send contact us
 * @param {*} payload
 */
export const sendContactUs = (payload) => async (dispatch) => {
  try {
    const res = await postContactUs(payload);
    const { success, msg } = res;

    if (success) {
      dispatch(successNotification({ message: 'Send successfully.' }));
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * send subscription
 * @param {*} payload
 */
export const sendSubscription = (payload) => async (dispatch) => {
  try {
    const res = await postSubscription(payload);
    const { success, msg } = res;

    if (success) {
      dispatch(successNotification({ message: 'You are now subscribed.' }));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * send product enquiry
 * @param {*} payload
 */
export const sendProductEnquiry = (payload) => async (dispatch) => {
  try {
    const res = await postProductEnquiry(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};
