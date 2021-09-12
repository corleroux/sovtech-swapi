import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { PEOPLE_FEATURE_KEY, peopleReducer } from '@sovtech-swapi/data-access';

const store = configureStore({
  reducer: { [PEOPLE_FEATURE_KEY]: peopleReducer },
  // Additional middleware can be passed to this array
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
