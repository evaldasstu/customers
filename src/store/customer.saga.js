import { put, takeEvery, call, all } from 'redux-saga/effects';
import { LOAD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER, ADD_CUSTOMER } from './customer.actions';
import {
  addCustomerApi,
  deleteCustomerApi,
  loadCustomersApi,
  updateCustomerApi,
} from './customer.api';

// Our worker Saga: will perform the async increment task
export function* loadingCustomersAsync() {
  const data = yield call(loadCustomersApi);
  const customers = [...data];
  yield put({ type: LOAD_CUSTOMER, payload: customers });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadingCustomersAsync() {
  yield takeEvery(LOAD_CUSTOMER, loadingCustomersAsync);
}

export function* updatingCustomerAsync({ payload }) {
  const data = yield call(updateCustomerApi, payload);
  const updatedCustomer = data;
  yield put({ type: UPDATE_CUSTOMER, payload: updatedCustomer });
}

export function* watchUpdatingCustomerAsync() {
  yield takeEvery(UPDATE_CUSTOMER, updatingCustomerAsync);
}

export function* deletingCustomerAsync({ payload }) {
  yield call(deleteCustomerApi, payload);
  yield put({ type: DELETE_CUSTOMER, payload: null });
}

export function* watchDeletingCustomerAsync() {
  yield takeEvery(DELETE_CUSTOMER, deletingCustomerAsync);
}

export function* addingCustomerAsync({ payload }) {
  const data = yield call(addCustomerApi, payload);
  const addedCustomer = data;
  yield put({ type: ADD_CUSTOMER, payload: addedCustomer });
}

export function* watchAddingCustomerAsync() {
  yield takeEvery(ADD_CUSTOMER, addingCustomerAsync);
}

export function* customerSaga() {
  yield all([
    watchLoadingCustomersAsync(),
    watchUpdatingCustomerAsync(),
    watchDeletingCustomerAsync(),
    watchAddingCustomerAsync(),
  ]);
}
