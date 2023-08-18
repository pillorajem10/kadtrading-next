import Router from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

// api
import {
  login,
  emailVerification,
  createUser,
  updateUser,
  forgetPassword,
  updateUserRole,
  resetPassword,
  fbLogin,
  googleLogin
} from 'services/api/user';
import { postNewAvatar, postUpdateAvatar } from 'services/api/common';

// jwt decode
import jwtDecode from 'jwt-decode';

// actions
import * as actionsTypes from '../types';
import { errorHandlerNotification, successHandlerNotification } from './ui';

/**
 * set unauthenticated
 */
export const setUnAuthenticated = () => {
  Cookies.set('authenticated', false);
  axios.defaults.headers.common.Authorization = 'Bearer';

  return {
    type: actionsTypes.SET_UNAUTHENTICATED,
  };
};

/**
 * set authorization header
 * @param {*} token
 */
export const setAuthorizationHeader = (token) => {
  const bearerToken = `Bearer ${token}`;
  Cookies.set('token', token);
  axios.defaults.headers.common.Authorization = bearerToken;
};

/**
 * set user details
 * @param {*} userDetails
 */
export const setUserDetails = (userDetails) => {
  Cookies.set('account', JSON.stringify(userDetails));
  Cookies.set('authenticated', true);

  return {
    type: actionsTypes.SET_USER_DETAILS,
    payload: userDetails,
  };
};

/**
 * update user details
 * @param {*} payload
 */
export const updateUserDetails = (payload) => async (dispatch) => {
  try {
    const res = await updateUser(payload);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setUserDetails({ account: data }));
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * user login
 * @param {*} payload
 */
export const userLogin = (payload) => async (dispatch) => {
  try {
    const res = await login(payload);
    const { success, data, msg } = res;

    if (success) {
      const { token } = data;
      const account = jwtDecode(token);

      setAuthorizationHeader(token);
      dispatch(setUserDetails({account}));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.response.data.msg));
  }
};

/**
 * user fb login
 * @param {*} payload
 */
export const userFbLogin = (payload) => async (dispatch) => {
  try {
    const res = await fbLogin(payload);
    const { success, data, msg } = res;

    if (success) {
      const { token } = data;
      const account = jwtDecode(token);

      setAuthorizationHeader(token);
      dispatch(setUserDetails({account}));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.response.data.msg));
  }
};

/**
 * user google login
 * @param {*} payload
 */
export const userGoogleLogin = (payload) => async (dispatch) => {
  try {
    const res = await googleLogin(payload);
    const { success, data, msg } = res;

    if (success) {
      const { token } = data;
      const account = jwtDecode(token);

      setAuthorizationHeader(token);
      dispatch(setUserDetails({account}));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.response.data.msg));
  }
};

/**
 * register user
 * @param {*} payload
 */
export const registerUser = (payload) => async (dispatch) => {
  try {
    const res = await createUser(payload);
    const { success, data, msg } = res;

    if (success) {
      const { token } = data;
      const account = jwtDecode(token);

      setAuthorizationHeader(token);
      dispatch(setUserDetails({account}));

      return res;
    }

/*
    if (code === 10014) {
      return dispatch(errorHandlerNotification('Code already expired.'));
    }

    if (code === 10013) {
      return dispatch(errorHandlerNotification('Incorrect verification code.'));
    }
*/
    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.response.data.msg));
    // (err.message)
  }
};

/**
 * user logout
 */
export const userLogout = () => {
  Cookies.remove('token');
  Cookies.remove('account');

  Router.push('/logout');
};

/**
 * set request role details
 * @param {*} requestRole
 */
export const setRequestRoleDetails = (requestRole) => ({
  type: actionsTypes.SET_REQUEST_ROLE_DETAILS,
  payload: requestRole,
});

/**
 * update user role details
 * @param {*} payload
 */
export const updateUserRoleDetails = (payload) => async (dispatch) => {
  try {
    const res = await updateUserRole(payload);
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
 * set register user details
 * @param {*} registerUser
 */
export const setRegisterUserDetails = (registerUser) => ({
  type: actionsTypes.SET_REGISTER_USER_DETAILS,
  payload: registerUser,
});


/**
 * send email verification
 * @param {*} payload
 */
export const sendEmailVerification = (payload) => async (dispatch) => {
  try {
    const res = await emailVerification(payload);
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
 * new avatar
 * @param {*} payload
 */
export const newAvatar = (payload) => async (dispatch) => {
  try {
    const res = await postNewAvatar(payload);
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
 * update avatar
 * @param {*} payload
 */
export const updateAvatar = (payload) => async (dispatch) => {
  try {
    const res = await postUpdateAvatar(payload);
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
 * user forget password
 * @param {*} payload
 */
export const userForgetPassword = (payload) => async (dispatch) => {
  try {
    const res = await forgetPassword(payload);
    const { success, msg } = res;

    if (success) {
      dispatch(successHandlerNotification(msg));
    }
  } catch (err) {
    return dispatch(errorHandlerNotification(err.response.data.msg));
  }
};

/**
 * update user role details
 * @param {*} payload
 */
 export const resetUserPassword = (payload) => async (dispatch) => {
   try {
     const res = await resetPassword(payload);
     const { success, msg } = res;

     if (success) {
       dispatch(successHandlerNotification(msg));
     }

   } catch (err) {
     return dispatch(errorHandlerNotification(err.response.data.msg));
   }
 };
