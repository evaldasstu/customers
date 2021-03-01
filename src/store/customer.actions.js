export const LOAD_CUSTOMER = 'LOAD_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const ADD_CUSTOMER = '[ADD_CUSTOMER';
export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';

export const loadCustomersAction = () => ({ type: LOAD_CUSTOMER });

export const selectCustomerAction = (customer) => ({
  type: SELECT_CUSTOMER,
  payload: customer,
});

export const updateCustomerAction = (customer) => ({
  type: UPDATE_CUSTOMER,
  payload: customer,
});

export const deleteCustomerAction = (customer) => ({
  type: DELETE_CUSTOMER,
  payload: customer,
});

export const addCustomerAction = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});
