import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
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
    lat: 54.90238,
    lng: 23.93476,
  },
];

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    customerAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(name, email, city, street, house, zip, lat, lng) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
            city,
            street,
            house,
            zip,
            lat,
            lng,
          },
        };
      },
    },

    customerUpdated(state, action) {
      const {
        id,
        name,
        email,
        city,
        street,
        house,
        zip,
        lat,
        lng,
      } = action.payload;

      const existingCustomer = state.find((customer) => customer.id === id);

      // Is the check needed?
      if (existingCustomer) {
        existingCustomer.name = name;
        existingCustomer.email = email;
        existingCustomer.city = city;
        existingCustomer.street = street;
        existingCustomer.house = house;
        existingCustomer.zip = zip;
        existingCustomer.lat = lat;
        existingCustomer.lng = lng;
      }
    },

    customerRemoved(state, action) {
      const { id } = action.payload;
      const existingCustomer = state.find((customer) => customer.id === id);
      console.log('delete: ', existingCustomer);
    },
  },
});

export const {
  customerAdded,
  customerUpdated,
  customerRemoved,
} = customersSlice.actions;

export default customersSlice.reducer;
