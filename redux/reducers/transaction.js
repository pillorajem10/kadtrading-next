import moment from 'moment';

// types
import * as actionTypes from '../types';

const initialState = {
  cart: {},
  /*
  cart: {
    itemCount: 1,
    promoTotal: 0,
    groups: [{
      merchantName: 'Jumbo Gold',
      gst: 7,
      items: [{
        id: '128484836',
        name: 'TEST PRODUCT',

      }]
    }]
  },

  Pick up: price with markup, gst 
  Local insured delivery: price with markup, gst, flat rate shipping
  Export to overseas: price with markup, flat rate shipping  
  */
  deliveryOptions: undefined,
  filter: {
    pageSize: 30,
    startTime: moment()
      .subtract(6, 'days')
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .format('x'),
    endTime: moment()
      .add(1, 'day')
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .format('x'),
  },
  duration: '7 Days',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TRANSACTION_CART:      
      return {
        ...state,
        cart: action.payload,
      };

    case actionTypes.SET_DELIVERY_OPTIONS:
      return {
        ...state,
        deliveryOptions: action.payload,
      };

    case actionTypes.SET_TRANSACTION_FILTER_DURATION:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload.filter,
        },
        duration: action.payload.duration,
      };

    case actionTypes.UPDATE_TRANSACTION_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
