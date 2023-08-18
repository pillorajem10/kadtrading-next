// utils
import { listingFilterCount } from 'utils/calculator';
import { filterTagList } from 'utils/listing';

// types
import * as actionTypes from '../types';

const initialState = {
  setting: undefined,
  diamond: undefined,
  final: {
      setting: undefined,
      diamond: undefined,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_BUILD_RING:
      return initialState;
    case actionTypes.SET_BUILD_RING_SETTING:
      return {
        ...state,
        setting: action.payload,
      };

    case actionTypes.SET_BUILD_RING_DIAMOND:
      return {
        ...state,
        diamond: action.payload,
      };

    case actionTypes.SET_BUILD_RING_FINAL:
      return {
        ...state,
        final: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
