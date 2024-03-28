// configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
  const middlewares = [thunk]; // Add any middleware you want to use, e.g., thunk
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
