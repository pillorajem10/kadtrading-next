// utils
import { calculateOptionPrice } from 'utils/calculator';

// api
import {
  fetchDiamondDetailsById,
} from 'services/api/rapnet';

import {
  fetchProductCategoryByParams,
  fetchProductDetailsById,
  fetchProductPromotionDetailsById,
  fetchProductReviewByParams,
  fetchProductReviewSummary,
  postProductReview,
  fetchProductReviewStatus,
  fetchProductBriefs,
  fetchBatchProductPromotionSummary,
} from 'services/api/product';

import {
  fetchGemStoneDetailsById
} from 'services/api/gemstone';

import {
  fetchInHouseDetailsById
} from 'services/api/inhouse';

import { postReviewPicture } from 'services/api/common';

// types
import * as actionTypes from '../types';

// actions
import { errorHandlerNotification } from './ui';

/**
 * set product category list
 * @param {*} productCategoryList
 */
export const setProductCategoryList = (categoryList) => ({
  type: actionTypes.SET_PRODUCT_CATEGORY_LIST,
  payload: categoryList,
});

/**
 * get level 1 product category
 */
export const getLevelOneProductCategory = () => async (dispatch) => {
  try {

    const params = { pageIndex: 1, pageSize: 50, level: 1 };
    const res = await fetchProductCategoryByParams(params);
    const { success, data, msg } = res;
    const mutated = data.docs.map(c => {
      return {
        ...c,
        id: c._id,
      }
    });
    if (success) {
      const params1 = { pageIndex: 1, pageSize: 50, level: 3 };
      const res1 = await fetchProductCategoryByParams(params1);


      const m1 = mutated.map(c1 => {
        return {
          ...c1,
          id: c1._id,
          categories: c1.categories.map(d1 => {
            return {
              ...d1,
              id: d1._id,
              categories: d1.categories.map(e1 => {
                const cat = res1.data.docs.find(f1 => f1._id === e1);
                return  {
                  ...cat,
                  id: cat._id,
                }
              })
            }
          }),
        }
      });

      const filteredCategoryList = m1.filter((item) => item.categories.length > 0);
      dispatch(setProductCategoryList(filteredCategoryList));

    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    console.log('[CATCH getLevelOneProductCategory] ', err);
    dispatch(errorHandlerNotification('Missing product level 1 categories.'));
  }
};

/**
 * get product category by batch id
 * @param {*} params
 */
export const getProductCategoryByBatchId = (params) => async (dispatch) => {
  try {
    const res = await fetchProductCategoryByParams(params);
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
 * get product category by id
 * @param {*} categoryId
 */
export const getProductCategoryById = (categoryId) => async (dispatch) => {
  try {

    const params = { categoryIds: categoryId };
    const res = await fetchProductCategoryByParams(params);
    const { success, data, msg } = res;

    if (success) {
      return data.docs.map(v => {
        return {
          ...v,
          id: v._id,
          categories: v.categories.map(v => {
            return {
              ...v,
              id: v._id,
            }
          }),
        }
      });
    }
    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * clear product state
 */
export const clearProduct = () => ({
  type: actionTypes.CLEAR_PRODUCT,
});

/**
 * set product variant
 * @param {*} variant
 */
export const setProductVariant = (variant) => ({
  type: actionTypes.SET_PRODUCT_VARIANT,
  payload: variant,
});

/**
 * set product details
 * @param {*} productDetails
 */
export const setProductDetails = (productDetails) => ({
  type: actionTypes.SET_PRODUCT_DETAILS,
  payload: productDetails,
});


/**
 * get setting details by product id
 * @param {*} productId
 */
 export const getSettingDetailsById = (productId) => async (dispatch) => {
  try {
    const res = await fetchProductDetailsById(productId);
    const { success, msg } = res;

    if (success) {
      const v = res.data;
      const { price, retailPrice, variants } = v;
      const data = {
        ...v,
        type: 'product',
        represent: 'setting',
        id: v._id,
        gst: false,
        image: v.variants[0].images[0].url ?? '',
      };

      // sort hero variant to be the first one
      const sortVariant = [...variants].sort((a, b) => b.hero - a.hero);
      const productDetails = { ...data, variants: sortVariant };

      // get hero variant
      const heroVariant = variants.find((item) => item.hero);

      // check product have discount or not
      const isDiscount = price !== retailPrice;

      // check if percent discount or dollar discount
      const isPercentDiscount = false; // percentOff !== null;

      // check discount percentage
      const discountPercent = isPercentDiscount
        ? percentOff
        : ((1 - retailPrice / price) * 100).toFixed(0);

      // calculate variant price
      const variantPrice = +calculateOptionPrice(
        heroVariant.price,
        isDiscount,
        isPercentDiscount,
        discountPercent,
      );

      dispatch(
        setProductDetails({ productDetails, isDiscount, isPercentDiscount, discountPercent }),
      );

      dispatch(setProductVariant({ ...heroVariant, variantPrice }));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};








/**
 * get gemstone details by product id
 * @param {*} productId
 */
 export const getGemStoneDetailsById = (productId) => async (dispatch) => {
  try {
    const res = await fetchGemStoneDetailsById(productId);
    const { success, msg } = res;
    const currency = localStorage.getItem('currency');

    if (success) {
      const v = res.data;
      const mutated = {
        ...v,
        type: 'gemstone',
        represent: 'inhouse',
        gst: true,
        id: v._id,
      };

      const { sgdPrice, shape, weight, primaryColour, variety,
      } = mutated;

      const data = {
        ...mutated,
        retailPrice: sgdPrice,
        price: 0,
        name: `${weight}ct., ${shape}, ${primaryColour}, ${variety}`,
      };

      // sort hero variant to be the first one
      const sortVariant = []; // [...variants].sort((a, b) => b.hero - a.hero);

      const productDetails = { ...data, variants: [] };

      // get hero variant
      // const heroVariant = variants.find((item) => item.hero);

      // check product have discount or not
      const isDiscount = false; // originalPrice !== price;

      // check is percent discount or dollar discount
      const isPercentDiscount = false; // percentOff !== null;

      // check discount percentage
      const discountPercent = 0;
      /*
      isPercentDiscount
        ? percentOff
        : ((1 - price / originalPrice) * 100).toFixed(0);
      */
      // calculate variant price
      const variantPrice = 0;
      /*
      calculateOptionPrice(
        heroVariant.price,
        isDiscount,
        isPercentDiscount,
        discountPercent,
      );
      */

      dispatch(
        setProductDetails({ productDetails, isDiscount, isPercentDiscount, discountPercent }),
      );
      // dispatch(setProductVariant({ ...heroVariant, variantPrice }));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};













/**
 * get inhouse details by product id
 * @param {*} productId
 */
 export const getInhouseDetailsById = (productId) => async (dispatch) => {
  try {
    const res = await fetchInHouseDetailsById(productId);
    const { success, msg } = res;
    const currency = localStorage.getItem('currency');

    if (success) {
      const v = res.data;
      const mutated = {
        ...v,
        type: 'diamond',
        represent: 'inhouse',
        gst: false,
        id: v._id,
      };

      const { sgdPrice, usdPrice,
        shape, weight, color, clarity,
      } = mutated;

      const data = {
        ...mutated,
        id: mutated.id,
        retailPrice: sgdPrice,
        price: 0,
        name: `${weight}ct., ${shape}, ${color}, ${clarity} Diamond`,
        // 'https://jumbo-gold-bucket.s3.us-east-2.amazonaws.com/misc/videos/69f0d9d9-4fd7-407b-9012-ca44dd1e42b7_jumbo_gold.mp4',        
      };

      // sort hero variant to be the first one
      const sortVariant = []; // [...variants].sort((a, b) => b.hero - a.hero);

      const productDetails = { ...data, variants: [] };

      // get hero variant
      // const heroVariant = variants.find((item) => item.hero);

      // check product have discount or not
      const isDiscount = false; // originalPrice !== price;

      // check is percent discount or dollar discount
      const isPercentDiscount = false; // percentOff !== null;

      // check discount percentage
      const discountPercent = 0;
      /*
      isPercentDiscount
        ? percentOff
        : ((1 - price / originalPrice) * 100).toFixed(0);
      */
      // calculate variant price
      const variantPrice = 0;
      /*
      calculateOptionPrice(
        heroVariant.price,
        isDiscount,
        isPercentDiscount,
        discountPercent,
      );
      */

      dispatch(
        setProductDetails({ productDetails, isDiscount, isPercentDiscount, discountPercent }),
      );
      // dispatch(setProductVariant({ ...heroVariant, variantPrice }));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};












/**
 * get product details by product id
 * @param {*} productId
 */
export const getProductDetailsById = (productId) => async (dispatch) => {
  try {
    const res = await fetchDiamondDetailsById(productId);
    const { header, body } = res.data.response;

    if (header.error_code === 0) {
      const { diamond, seller } = body;
      const { diamond_id, sgdPrice,
        imagefile_url, shape, size, color, clarity, cut, video_url,
      } = diamond;
      // const { variants, percentOff, price, originalPrice } = seller;

      const data = {
        ...diamond,
        type: 'diamond',
        represent: 'globald',
        gst: false,
        id: diamond_id,
        retailPrice: sgdPrice,
        price: 0,
        name: `${size}ct., ${shape}, ${color}, ${clarity} Diamond`,
      };

      // sort hero variant to be the first one
      const sortVariant = []; // [...variants].sort((a, b) => b.hero - a.hero);

      const productDetails = { ...data, variants: [] };

      // get hero variant
      // const heroVariant = variants.find((item) => item.hero);

      // check product have discount or not
      const isDiscount = false; // originalPrice !== price;

      // check is percent discount or dollar discount
      const isPercentDiscount = false; // percentOff !== null;

      // check discount percentage
      const discountPercent = 0;
      /*
      isPercentDiscount
        ? percentOff
        : ((1 - price / originalPrice) * 100).toFixed(0);
      */
      // calculate variant price
      const variantPrice = 0;
      /*
      calculateOptionPrice(
        heroVariant.price,
        isDiscount,
        isPercentDiscount,
        discountPercent,
      );
      */

      dispatch(
        setProductDetails({ productDetails, isDiscount, isPercentDiscount, discountPercent }),
      );
      // dispatch(setProductVariant({ ...heroVariant, variantPrice }));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * set product option
 * @param {*} productOption
 */
export const setProductOption = (productOption) => ({
  type: actionTypes.SET_PRODUCT_OPTION,
  payload: productOption,
});

/**
 * get product briefs
 * @param {*} payload
 */
export const getProductBriefs = (payload) => async (dispatch) => {
  try {
    const res = await fetchProductBriefs(payload);
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
 * set product promotion details
 * @param {*} productPromotionDetails
 */
export const setProductPromotionDetails = (promotionDetails) => ({
  type: actionTypes.SET_PRODUCT_PROMOTION_DETAILS,
  payload: promotionDetails,
});

/**
 * get product promotion details by product id
 * @param {*} productId
 */
export const getProductPromotionDetailsById = (productId) => async (dispatch) => {
  try {
    const res = await fetchProductPromotionDetailsById(productId);
    const { data, success, msg } = res;

    if (success) {
      dispatch(setProductPromotionDetails(data));

      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * get batch product promotion summary
 * @param {*} payload
 */
export const getBatchProductPromotionSummary = (payload) => async (dispatch) => {
  try {
    const res = await fetchBatchProductPromotionSummary(payload);
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
 * set product review summary
 * @param {*} productReviewSummary
 */
export const setProductReviewSummary = (reviewSummary) => ({
  type: actionTypes.SET_PRODUCT_REVIEW_SUMMARY,
  payload: reviewSummary,
});

/**
 * get product review summary
 * @param {*} productId
 */
export const getProductReviewSummary = (productId) => async (dispatch) => {
  try {
    const res = await fetchProductReviewSummary(productId);
    const { success, data, msg } = res;

    if (success) {
      dispatch(setProductReviewSummary(data));
    } else {
      dispatch(errorHandlerNotification(msg));
    }
  } catch (err) {
    dispatch(errorHandlerNotification(err.message));
  }
};

/**
 * get product reviews by params
 * @param {*} params
 */
export const getProductReviewsByParams = (params) => async (dispatch) => {
  try {
    const res = await fetchProductReviewByParams(params);
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
 * create product review
 * @param {*} payload
 */
export const createProductReview = (payload) => async (dispatch) => {
  try {
    const res = await postProductReview(payload);
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
 * get product reviews status
 * @param {*} params
 */
export const getProductReviewStatus = (params) => async (dispatch) => {
  try {
    // const res = await fetchProductReviewStatus(params);
    const res = await fetchProductReviewByParams(params);
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
 * update review picture
 * @param {*} payload
 */
export const uploadReviewPicture = (payload) => async (dispatch) => {
  try {
    const res = await postReviewPicture(payload);
    const { success, msg } = res;

    if (success) {
      return res;
    }

    return dispatch(errorHandlerNotification(msg));
  } catch (err) {
    return dispatch(errorHandlerNotification(err.message));
  }
};
