import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import axios from 'axios';

const useMapboxApi = ({customer}) => {
  const [house, setHouse] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [zip, setZip] = useState(null);

  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [isError, setIsError] = useState(false);

  // Limit API requests when typing into address fields
  const [debouncedAddress] = useDebounce(address, 500);

  useEffect(() => {
    if (customer) {
      setHouse(customer.house);
      setStreet(customer.street);
      setCity(customer.city);
      setZip(customer.zip);
    }
  }, [customer]);

  // Reassemble address on form input change
  useEffect(() => {
    let assemble = '';
    if (house) {
      assemble = ' ' + house;
    }
    if (street) {
      assemble = assemble.concat(' ' + street);
    }
    if (zip) {
      assemble = assemble.concat(' ' + zip);
    }
    if (city) {
      assemble = assemble.concat(' ' + city);
    }

    // Don't query API if street and/or city values are missing or very short
    if ((street && street.length > 2) || (city && city.length > 2)) {
      setAddress(assemble.slice(1, assemble.length));
    } else {
      setCoordinates(null);
    }
  }, [house, street, city, zip]);

  useEffect(() => {
    let fetchData;
    let url;
    if (debouncedAddress) {
      url =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        debouncedAddress +
        '.json?limit=1&access_token=' +
        process.env.REACT_APP_CUSTOMERS_MAPBOX_TOKEN;

      fetchData = async () => {
        try {
          setCoordinates(null);
          setIsError(false);
          const response = await axios(url);
          setCoordinates([
            response.data.features[0].center[1].toPrecision(7),
            response.data.features[0].center[0].toPrecision(7),
          ]);
        } catch (error) {
          setIsError(true);
        }
      };
      fetchData();
    }
  }, [customer.lat, debouncedAddress]);

  return [{ coordinates, isError }];
};

export default useMapboxApi;
