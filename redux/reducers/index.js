import { combineReducers } from 'redux';

import uiReducer from './ui';
import commonReducer from './common';
import userReducer from './user';
import productReducer from './product';
import listingReducer from './listing';
import merchantReducer from './merchant';
import transactionReducer from './transaction';
import favouriteReducer from './favourite';
import buildRingReducer from './buildring';

const reducers = combineReducers({
  ui: uiReducer,
  common: commonReducer,
  user: userReducer,
  product: productReducer,
  listing: listingReducer,
  merchant: merchantReducer,
  favourite: favouriteReducer,
  transaction: transactionReducer,
  buildring: buildRingReducer,
});

export default reducers;
