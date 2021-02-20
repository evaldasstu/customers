import React, { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Grid from './Grid';

function App() {
  const data = useMemo(
    () => [
      {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        city: 'Vilnius',
        street: 'Gedimino pr.',
        house: '7',
        zip: '12345',
        lat: '54.68926',
        lng: '25.27542',
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
        city: 'Kaunas',
        street: 'Kęstučio g.',
        house: '14',
        zip: '01234',
        lat: '54.90238',
        lng: '23.93476',
      },
      {
        name: 'Samantha Goldsmith-Longbottom',
        email: 'samantha@longemailindustries.com',
        city: 'San Antonio',
        street: 'Washington Blvd.',
        house: '140',
        zip: '24352',
        lat: '54.90238',
        lng: '23.93476',
      },
    ],
    []
  );

  return (
    <>
      <Container fluid="xl">
        <h1 className="my-5">Customers</h1>
        <Grid data={data} />
      </Container>
    </>
  );
}

export default App;
