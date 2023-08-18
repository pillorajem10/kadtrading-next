// api
// import { fetchInhouseByParams } from 'services/api/inhouse';
  
// actions
import { errorHandlerNotification } from './ui';
  
// types
import * as actionTypes from '../types';
  
/**
 * clear build ring
 * @param {*} page
 */
export const clearBuildRing = (page) => ({
    type: actionTypes.CLEAR_BUILD_RING,
    payload: {},
});

/**
 * set setting
 * @param {*} page
 */
export const setBuildRingSetting = (v) => ({
    type: actionTypes.SET_BUILD_RING_SETTING,
    payload: v,
});

/**
 * set diamond
 * @param {*} page
 */
 export const setBuildRingDiamond = (v) => ({
    type: actionTypes.SET_BUILD_RING_DIAMOND,
    payload: v,
});
      