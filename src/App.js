import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { CustomersGrid } from './features/customers/CustomersGrid';
import { CustomerForm } from './features/customers/CustomerForm';
import { DeleteDialog } from './features/customers/DeleteDialog';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [action, setAction] = useState(null);

  const onNewClicked = () => {
    setSelectedId(null);
    setAction('add');
  };

  const onEditClicked = (id) => {
    setSelectedId(id);
    setAction('update');
  };

  const onDeleteClicked = (id) => {
    setSelectedId(id);
    setAction('remove');
  };

  const onModalClosed = () => {
    setSelectedId(null);
    setAction(null);
  };

  return (
    <>
      <Container fluid="xl">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h1 className="mb-0">Customers</h1>

          <Button variant="primary" onClick={() => onNewClicked()}>
            New customer
          </Button>
        </div>

        <CustomersGrid
          onEditClicked={(id) => onEditClicked(id)}
          onDeleteClicked={(id) => onDeleteClicked(id)}
        />
      </Container>

      <CustomerForm
        {...{ action }}
        {...{ selectedId }}
        onModalClosed={() => {
          onModalClosed();
        }}
      />

      <DeleteDialog
        {...{ action }}
        {...{ selectedId }}
        onModalClosed={() => {
          onModalClosed();
        }}
      />
    </>
  );
}

export default App;
