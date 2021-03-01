import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

export const deleteCustomerApi = async customer => {
  const response = await axios.delete(`${API}/customers/${customer.id}`);
  return parseItem(response, 200);
};

export const updateCustomerApi = async customer => {
  const response = await axios.put(`${API}/customers/${customer.id}`, customer);
  return parseItem(response, 200);
};

export const addCustomerApi = async customer => {
  const response = await axios.post(`${API}/customers`, customer);
  return parseItem(response, 201);
};

export const loadCustomersApi = async () => {
  const response = await axios.get(`${API}/customers`);
  return parseList(response, 200);
};
