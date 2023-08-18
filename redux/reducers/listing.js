// utils
import { requirePropFactory } from '@material-ui/core';
import { createUser } from 'services/api/user';
import { listingFilterCount } from 'utils/calculator';
import { filterTagList } from 'utils/listing';

// types
import * as actionTypes from '../types';

const initialState = {
  filter: {},
  filterCount: 0,
  params: {},
  tagList: {},
  page: 0,
  search: {
    keyword: '',
    count: 0,
  },
  onSaleList: [],
  featuredProductList: [],
  featuredGlobalList: [],
  featuredInHouseList: [],
  featuredSettingList: [],
  featuredGemStoneList: [],
  merchantRecommendList: [],
  categoryRecommendList: [],
  productComparisonList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_LISTING:
      const { productComparisonList, ...restListingState } = initialState;

      return {
        ...restListingState,
        productComparisonList: state.productComparisonList
      };

    case actionTypes.SET_LISTING_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case actionTypes.SET_LISTING_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case actionTypes.SET_LISTING_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case actionTypes.SET_LISTING_PARAMS: {
      const filterParams = { ...action.payload };
      const filterCount = listingFilterCount(filterParams);
      const tagList = filterTagList(filterParams);

      return {
        ...state,
        params: { ...action.payload },
        filterCount,
        tagList,
      };
    }

    case actionTypes.SET_ON_SALE_LIST:
      return {
        ...state,
        onSaleList: action.payload,
      };

    case actionTypes.SET_FEATURED_PRODUCT_LIST:
      return {
        ...state,
        featuredProductList: action.payload,
      };

    case actionTypes.SET_FEATURED_GLOBAL_LIST:
      return {
        ...state,
        featuredGlobalList: action.payload,
      };

    case actionTypes.SET_FEATURED_INHOUSE_LIST:
      return {
        ...state,
        featuredInHouseList: action.payload,
      };

    case actionTypes.SET_FEATURED_SETTING_LIST:
      return {
        ...state,
        featuredSettingList: action.payload,
      };

    case actionTypes.SET_FEATURED_GEMSTONE_LIST:
      return {
          ...state,
          featuredGemStoneList: action.payload,
        };      

    case actionTypes.SET_MERCHANT_RECOMMEND_LIST:
      return {
        ...state,
        merchantRecommendList: action.payload,
      };

    case actionTypes.SET_CATEGORY_RECOMMEND_LIST:
      return {
        ...state,
        categoryRecommendList: action.payload,
      };

    case actionTypes.SET_COMPARE_LISTING:
      return {
        ...state,
        productComparisonList: action.payload,
      };

    case actionTypes.ADD_TO_COMPARE_LIST:
      return {
        ...state,
        productComparisonList: [ ...state.productComparisonList, action.payload],
      };

    case actionTypes.REMOVE_TO_COMPARE_LIST:
      return {
        ...state,
        productComparisonList: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
