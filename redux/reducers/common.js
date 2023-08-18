// types
import * as actionTypes from '../types';

const initialState = {
  settings: {},
  showCartSideBar: false,
  savedUrl: '',
  currency: 'SGD',
  currencyRates: undefined,
  gst: 0.07,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SYSTEM_GST:
      return {
        ...state,
        gst: action.payload,
      };  
    case actionTypes.SET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };

    case actionTypes.SET_CURRENCY_RATES:
      return {
        ...state,
        currencyRates: action.payload,
      };

    case actionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };

    case actionTypes.TOGGLE_CART_SIDE_BAR:
      return {
        ...state,
        showCartSideBar: action.payload,
      };

    case actionTypes.SET_SAVED_URL:
      return {
        ...state,
        savedUrl: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
