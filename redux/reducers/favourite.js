// types
import * as actionTypes from '../types';

const initialState = {
  showFavouriteModal: false,
  totalFavouriteItem: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVOURITE_MODAL:
      return {
        ...state,
        showFavouriteModal: action.payload,
      };

    case actionTypes.SET_TOTAL_FAVOURITE_ITEM:
      return {
        ...state,
        totalFavouriteItem: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
