import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addCustomerAction,
  deleteCustomerAction,
  loadCustomersAction,
  selectCustomerAction,
  updateCustomerAction
} from '../store';

function useCustomers() {
  const dispatch = useDispatch();

  return {
    // Selectors
    customers: useSelector(state => state.customers.data),
    selectedCustomer: useSelector(state => state.selectedCustomer),

    // Dispatchers
    addCustomer: customer => dispatch(addCustomerAction(customer)),
    deleteCustomer: customer => dispatch(deleteCustomerAction(customer)),
    getCustomers: useCallback(() => dispatch(loadCustomersAction()), [dispatch]),
    selectCustomer: customer => dispatch(selectCustomerAction(customer)),
    updateCustomer: customer => dispatch(updateCustomerAction(customer))
  };
}

export default useCustomers;
