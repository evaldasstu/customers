import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import customersStore from './store';
import { loadState, saveState } from './localStorage';
import Customers from './customers/Customers';

// loadState and saveState persists data in local storage
const persistedState = loadState();
const store = createStore(customersStore, persistedState);
store.subscribe(() => {
  saveState({
    customers: store.getState().customers,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Customers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
