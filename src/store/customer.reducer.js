import {
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  SELECT_CUSTOMER,
  LOAD_CUSTOMER,
  DELETE_CUSTOMER,

} from './customer.actions';

export const customersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case LOAD_CUSTOMER:
      return { ...state };

    case UPDATE_CUSTOMER:
      return modifyCustomerState(state, action.payload);

    case DELETE_CUSTOMER: {
      return {
        ...state,
        data: state.data.filter((c) => c !== action.payload),
      };
    }

    case ADD_CUSTOMER: {
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };
    }

    default:
      return state;
  }
};

const modifyCustomerState = (customerState, customerChanges) => {
  return {
    ...customerState,
    data: customerState.data.map((c) => {
      if (c.id === customerChanges.id) {
        return { ...c, ...customerChanges };
      } else {
        return c;
      }
    }),
  };
};

let initialSelectedCustomer = null;

export const selectedCustomerReducer = (
  state = initialSelectedCustomer,
  action
) => {
  switch (action.type) {
    case SELECT_CUSTOMER:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
