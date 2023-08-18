// types
import * as actionTypes from '../types';

const initialState = {
  profile: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MERCHANT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
