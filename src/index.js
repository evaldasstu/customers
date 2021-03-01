import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Customers from './customers/Customers';
import customersStore from './store';

const store = createStore(customersStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Customers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
