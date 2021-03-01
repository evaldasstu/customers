import { combineReducers } from 'redux';
import { customersReducer, selectedCustomerReducer } from './customer.reducer';

export * from './customer.actions';
export * from './customer.reducer';

const store = combineReducers({
  customers: customersReducer,
  selectedCustomer: selectedCustomerReducer,
});

export default store;
