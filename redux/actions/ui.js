// types
import * as actionTypes from '../types';

/**
 * success notification
 * @param {*} notification
 */
export const successNotification = (notification) => ({
  type: actionTypes.ENQUEUE_NOTIFICATION,
  notification: {
    ...notification,
    key: new Date().getTime() + Math.random(),
    options: {
      variant: 'success',
    },
  },
});

/**
 * error notification
 * @param {*} notification
 */
export const errorNotification = (notification) => ({
  type: actionTypes.ENQUEUE_NOTIFICATION,
  notification: {
    ...notification,
    key: new Date().getTime() + Math.random(),
    options: {
      variant: 'error',
    },
  },
});

/**
 * handle error notification
 * @param {*} message
 */
export const errorHandlerNotification = (message) => (dispatch) => {
  if (!message) {
    console.log('[errorHandlerNotification] ', message);
  }
  
  if (message && message.indexOf('status code 400') > -1) {
    console.log('[errorHandlerNotification] ', message);
  }

  dispatch(errorNotification({ message }));
  return { success: false };
};

/**
 * handle error notification
 * @param {*} message
 */
export const successHandlerNotification = (message) => (dispatch) => {
  dispatch(successNotification({ message }));

  return { success: true };
};

/**
 * close notification
 * @param {*} key
 */
export const closeNotification = (key) => ({
  type: actionTypes.CLOSE_NOTIFICATION,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

/**
 * remove notification
 * @param {*} key
 */
export const removeNotification = (key) => ({
  type: actionTypes.REMOVE_NOTIFICATION,
  key,
});

/**
 * set loading
 */
export const setLoading = () => ({
  type: actionTypes.SET_LOADING,
});

/**
 * clear loading
 */
export const clearLoading = () => ({
  type: actionTypes.CLEAR_LOADING,
});

/**
 * set 3d product id
 * @param {*} threeDProductID
 */
export const updateThreeDProductId = (threeDProductID) => ({
  type: actionTypes.UPDATE_THREE_D_PRODUCT_ID,
  payload: threeDProductID,
});
