// types
import * as actionTypes from '../types';

const initialState = {
  authenticated: false,
  token: '',
  account: {},
  registerUser: {},
  requestRole: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_UNAUTHENTICATED:
      return initialState;

    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        ...action.payload,
        authenticated: true,
      };

    case actionTypes.SET_REGISTER_USER_DETAILS:
      return {
        ...state,
        registerUser: action.payload,
      };

    case actionTypes.SET_REQUEST_ROLE_DETAILS:
      return {
        ...state,
        requestRole: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
