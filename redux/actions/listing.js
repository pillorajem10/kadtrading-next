// api
import {
  fetchDiamondsByParams,
} from 'services/api/rapnet';

import {
  fetchListingFilterByParams,
  fetchElasticSearchKeyword,
  fetchKeywordSuggestion,
  fetchProductsByParams,
  fetchCategoryRecommendProducts,
  fetchMerchantRecommendProducts,
} from 'services/api/product';

import {
  fetchInhouseByParams
} from 'services/api/inhouse';

import {
  fetchGemStoneByParams
} from 'services/api/gemstone';


// actions
import { errorHandlerNotification } from './ui';

// types
import * as actionTypes from '../types';

export const addToCompareList = (params) => ({
  type: actionTypes.ADD_TO_COMPARE_LIST,
  payload: params,
});

export const removeToCompareList = (list, params) => ({
  type: actionTypes.REMOVE_TO_COMPARE_LIST,
  payload: list.filter(product => product.id !== params.id),
});

/**
 * get elastic search keyword
 * @param {*} payload
 */
export const getElasticSearchKeyword = (payload) => async (dispatch) => {
  try {
    const res = await fetchElasticSearchKeyword(payload);
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
 * get product keyword suggestion
 * @param {*} keyword
 */
export const getProductKeywordSuggestion = (keyword) => async (dispatch) => {
  try {
    const res = await fetchKeywordSuggestion(keyword);
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
 * clear listing
 */
export const clearListing = () => ({
  type: actionTypes.CLEAR_LISTING,
});

/**
 * set listing page
 * @param {*} page
 */
export const setListingPage = (page) => ({
  type: actionTypes.SET_LISTING_PAGE,
  payload: page,
});








const fetchProduct = (params) => async (dispatch) => {
  try {
    const res = await fetchProductsByParams(params);
    console.log('[fetchProduct] ', res);
    const { success, msg } = res;

    if (!success)  return { success, data: undefined };

    if (success) {
      const data = res.data.docs
      .filter(v => v.status !== 'UNPUBLISHED')
      .map(v => {
        return {
          ...v,
          type: 'product',
          represent: 'setting',
          gst: false,
          id: v._id,
          image: v.variants[0].images[0].url ?? '',
        }
      });

      return {
        success: true,
        data,
        page: {
          pageIndex: params.pageIndex,
          pageSize: res.data.limit,
          totalItem: res.data.totalDocs,
        }
      };
    }
  } catch (err) {
    console.log('[CATCH fetchProduct] ', err);
    return { success: false, data: undefined };
  }
};






const fetchRapNet = (params) => async (dispatch) => {
  try {
    const mutatedParams = {
      ...params,
      labs: params.labs ? decodeURIComponent(params.labs).split(',') : undefined,
      shapes: params.shapes ? decodeURIComponent(params.shapes).split(',') : undefined,
    }
  
    const res = await fetchDiamondsByParams(mutatedParams);
    console.log('[fetchRapNet] ', res);
    const { body, header } = res.data.response;
  
    /*
    response:
      body:
        diamonds: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        search_results:
          diamonds_returned: 20
          sort_direction: "ASC"
          sorted_by: "PRICE"
          total_diamonds_found: 17833
      header:
        error_code: 0
        error_message: ''
    */
    if (header.error_code !== 0) {
      return { success, data: undefined };
      dispatch(errorHandlerNotification(header.error_message));  
    }
    
    if (header.error_code === 0) {
      const data = body.diamonds.map(v => {
        return {
          ...v,
          type: 'diamond',
          represent: 'globald',
          gst: false,
          id: v.diamond_id,
          retailPrice: v.sgdPrice,
          price: 0,
          name: `${v.size}ct., ${v.shape}, ${v.color}, ${v.clarity} Diamond`,
        }
      })
      return {
        success: true,
        data,
        page: {
          pageIndex: params.pageIndex,
          pageSize: body.search_results.diamonds_returned,
          totalItem: body.search_results.total_diamonds_found,
        }
      };
    }
  } catch (err) {
    console.log('[CATCH fetchRapNet] ', err);
    return { success: false, data: undefined };
  }
};







const fetchGemStone = (params) => async (dispatch) => {
  try {
    const res = await fetchGemStoneByParams(params);
    console.log('[fetchGemStone] ', res);
    const { success, data } = res;
  
    if (!success) return { success, data: undefined };
    if (success) {
      const mutatedData = data.docs.map(v => {
        const c = {
          ...v,
          type: 'gemstone',
          represent: 'inhouse',
          gst: true,
          id: v._id,
        };
  
        return {
          ...c,
          retailPrice: params.currency === 'SGD' ? c.sgdPrice : c.usdPrice,
          price: 0,
          name: `${c.weight}ct., ${c.shape}, ${c.primaryColour}, ${c.variety}`,
        }
      });
  
      return {
        success: true,
        data: mutatedData,
        page: {
          pageIndex: params.pageIndex,
          pageSize: data.limit,
          totalItem: data.totalDocs,
        }
      };
    }
  } catch (err) {
    console.log('[CATCH fetchGemStone] ', err);
    return { success: false, data: undefined };    
  }
};





const fetchInHouse = (params) => async (dispatch) => {
  try {
    const res = await fetchInhouseByParams(params);
    console.log('[fetchInHouse] ', res);
    const { success, data } = res;
  
    if (!success) return { success, data: undefined };
  
    if (success) {
      const mutatedData = data.docs.map(v => {
        const c = {
          ...v,
          type: 'diamond',
          represent: 'inhouse',
          gst: false,
          id: v._id,
        };
  
        return {
          ...c,
          retailPrice: c.sgdPrice,
          price: undefined,
          name: `${c.weight}ct., ${c.shape}, ${c.color}, ${c.clarity} Diamond`,
        }
      });
  
      return {
        success: true,
        data: mutatedData,
        page: {
          pageIndex: params.pageIndex,
          pageSize: data.limit,
          totalItem: data.totalDocs,
        }
      };
    }
  } catch (err) {
    console.log('[CATCH fetchInHouse] ', err);
    return { success: false, data: undefined };
  }
};



/**
 * get products by params
 * @param {*} params
 */
export const getProductsByParams = (params) => {
  try {
    // fetchProductsByParams
    if (params.type) {
      if (params.type === 'globald') {
        console.log('[getProductsByParams fetchRapNet] ', params);        
        // const { type, ...restObj } = params;
        return fetchRapNet(params);
      }
      if (params.type === 'inhouse') {
        console.log('[getProductsByParams fetchInHouse] ', params);        
        const { type, ...restObj } = params;
        return fetchInHouse(restObj);
      }
      if (params.type === 'product') {
        const { type, ...restObj } = params;
        console.log('[getProductsByParams fetchProduct] ', params, restObj);
        return fetchProduct(restObj);
      }
      if (params.type === 'gemstone') {
        console.log('[getProductsByParams fetchGemStone] ', params);        
        const { type, ...restObj } = params;
        return fetchGemStone(restObj);
      }
    }
  } catch (err) {
    console.log('[CATCH getProductsByParams] ', params, err);        
    return { success: false, data: undefined };
  }
};














/**
 * set listing search
 * @param {*} search
 */
export const setListingSearch = (search) => ({
  type: actionTypes.SET_LISTING_SEARCH,
  payload: search,
});

/**
 * set listing filter
 * @param {*} filter
 */
export const setListingFilter = (filter) => ({
  type: actionTypes.SET_LISTING_FILTER,
  payload: filter,
});

/**
 * get category filter list by id
 * @param {*} params
 */
export const getListingFilterByParams = (params) => async (dispatch) => {
  try {
    const res = await fetchListingFilterByParams(params);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setListingFilter(data));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * set listing params
 * @param {*} params
 */
export const setListingParams = (params) => ({
  type: actionTypes.SET_LISTING_PARAMS,
  payload: params,
});

/**
 * get category recommend products
 * @param {*} productId
 */
export const getCategoryRecommendProducts = (productId) => async (dispatch) => {
  try {
    const res = await fetchCategoryRecommendProducts(productId);
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
 * get merchant recommend products
 * @param {*} productId
 */
export const getMerchantRecommendProducts = (productId) => async (dispatch) => {
  try {
    const res = await fetchMerchantRecommendProducts(productId);
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
 * set on sale list
 * @param {*} onSaleList
 */
export const setOnSaleList = (onSaleList) => ({
  type: actionTypes.SET_ON_SALE_LIST,
  payload: onSaleList,
});

/**
 * set featured product list
 * @param {*} featuredProductList
 */
export const setFeaturedProductList = (list, type) => (dispatch) => {
  if (type === 'globald') {
    dispatch({
      type: actionTypes.SET_FEATURED_GLOBAL_LIST,
      payload: list,
    });
  }

  if (type === 'inhouse') {
    dispatch({
      type: actionTypes.SET_FEATURED_INHOUSE_LIST,
      payload: list,
    });
  }

  if (type === 'product') {
    dispatch({
      type: actionTypes.SET_FEATURED_SETTING_LIST,
      payload: list,
    });
  }

  if (type === 'gemstone') {
    dispatch({
      type: actionTypes.SET_FEATURED_GEMSTONE_LIST,
      payload: list,
    });
  }
};

/**
 * set merchant recommend list
 * @param {*} merchantRecommendList
 */
export const setMerchantRecommendList = (merchantRecommendList) => ({
  type: actionTypes.SET_MERCHANT_RECOMMEND_LIST,
  payload: merchantRecommendList,
});

/**
 * set category recommend list
 * @param {*} categoryRecommendList
 */
export const setCategoryRecommenList = (categoryRecommendList) => ({
  type: actionTypes.SET_CATEGORY_RECOMMEND_LIST,
  payload: categoryRecommendList,
});
