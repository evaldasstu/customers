import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Container, Button } from 'react-bootstrap';
import Grid from './grid/Grid';
import CustomerForm from './CustomerForm';
import DeleteDialog from './DeleteDialog';
import useCustomers from './useCustomers';

function Customers() {
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [action, setAction] = useState(null);

  const {
    addCustomer,
    deleteCustomer,
    getCustomers,
    customers,
    selectCustomer,
    selectedCustomer,
    updateCustomer,
  } = useCustomers();

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const onNewCustomerClicked = () => {
    selectCustomer({});
    setAction('add');
  };

  const onEditClicked = (customer) => {
    selectCustomer(customer);
    setAction('update');
  };

  const onDeleteClicked = (customer) => {
    setCustomerToDelete(customer);
    setAction('delete');
  };

  function onSaveConfirmed(customer) {
    if (action === 'add') {
      // Generate unique pseudo id
      // Should be done by API in a real world scenario
      customer.id = nanoid();
      addCustomer(customer);
    } else {
      updateCustomer(customer);
    }
    onModalClosed();
  }

  const onDeleteConfirmed = () => {
    deleteCustomer(customerToDelete);
    onModalClosed();
  };

  const onModalClosed = () => {
    getCustomers();
    selectCustomer(null);
    setCustomerToDelete(null);
    setAction(null);
  };

  return (
    <Container fluid="xl">
      <div className="d-flex justify-content-between align-items-center my-5">
        <h1 className="mb-0">Customers</h1>
        <Button variant="primary" onClick={onNewCustomerClicked}>
          New customer
        </Button>
      </div>

      <Grid
        {...{ customers }}
        {...{ onEditClicked }}
        {...{ onDeleteClicked }}
      />

      <DeleteDialog
        {...{ customerToDelete }}
        {...{ action }}
        {...{ onDeleteConfirmed }}
        {...{ onModalClosed }}
      />

      {selectedCustomer && (
        <CustomerForm
          {...{ selectedCustomer }}
          {...{ action }}
          {...{ onSaveConfirmed }}
          {...{ onModalClosed }}
        />
      )}
    </Container>
  );
}

export default Customers;
