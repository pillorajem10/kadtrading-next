// types
import * as actionTypes from '../types';

const productInitialState = {
  productDetails: {},
  isDiscount: false,
  isPercentDiscount: false,
  discountPercent: 0,
  variant: {},
  optionId: '',
  optionPrice: 0,
  optionOriginalPrice: 0,
  promotionDetails: [],
  reviewSummary: {},
};

const initialState = {
  categoryList: [],
  ...productInitialState,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };

    case actionTypes.CLEAR_PRODUCT:
      return {
        ...state,
        ...productInitialState,
      };

    case actionTypes.SET_PRODUCT_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.SET_PRODUCT_VARIANT:
      return {
        ...state,
        variant: {
          ...action.payload,
          price: +action.payload.price,
        },
        optionId: '',
        optionPrice: 0,
        optionOriginalPrice: 0,
      };

    case actionTypes.SET_PRODUCT_OPTION:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.SET_PRODUCT_PROMOTION_DETAILS:
      return {
        ...state,
        promotionDetails: action.payload,
      };

    case actionTypes.SET_PRODUCT_REVIEW_SUMMARY:
      return {
        ...state,
        reviewSummary: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
