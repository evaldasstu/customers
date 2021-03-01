import {
  SELECT_CUSTOMER,
  LOAD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  ADD_CUSTOMER,
} from './customer.actions';

let initState = {
  data: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      city: 'Vilnius',
      street: 'Gedimino pr.',
      house: '7',
      zip: '12345',
      lat: 54.68926,
      lng: 25.27542,
    },
    {
      id: 123,
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      city: 'Kaunas',
      street: 'Kęstučio g.',
      house: '14',
      zip: '01234',
      lat: 54.90238,
      lng: 23.93476,
    },
    {
      id: 345,
      name: 'Samantha Goldsmith-Longbottom',
      email: 'samantha@longemailindustries.com',
      city: 'San Antonio',
      street: 'Washington Blvd.',
      house: '140',
      zip: '24352',
      // lat: 54.90238,
      // lng: 23.93476,
    },
  ],
};

export const customersReducer = (state = initState, action) => {
  // export const customersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case LOAD_CUSTOMER:
      return { ...state };

    case UPDATE_CUSTOMER:
      return modifyCustomerState(state, action.payload);

    case DELETE_CUSTOMER: {
      return {
        ...state,
        data: state.data.filter((h) => h !== action.payload),
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
