import React from "react";
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux'
import App from './app'
import './style.scss'
import { Data } from './Data'

import * as reducers from './store';

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)