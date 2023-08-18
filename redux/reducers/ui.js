// types
import * as actionTypes from '../types';

const initialState = {
  notifications: [],
  loading: false,
  threeDProductId: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENQUEUE_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            key: action.key,
            ...action.notification,
          },
        ],
      };

    case actionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          action.dismissAll || notification.key === action.key
            ? { ...notification, dismissed: true }
            : { ...notification },
        ),
      };

    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key,
        ),
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.UPDATE_THREE_D_PRODUCT_ID:
      return {
        ...state,
        threeDProductId: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
