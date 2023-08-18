import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

let store;

const middleware =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunkMiddleware))
    : applyMiddleware(thunkMiddleware);

function initStore(initialState) {
  return createStore(reducers, initialState, middleware);
}

export const initializeStore = (preloadedState) => {
  let reduxStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    reduxStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return reduxStore;
  // Create the store once in the client
  if (!store) store = reduxStore;

  return reduxStore;
};

export function useStore(initialState) {
  const reduxStore = useMemo(() => initializeStore(initialState), [initialState]);
  return reduxStore;
}
