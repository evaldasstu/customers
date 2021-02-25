import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { customerRemoved } from './customersSlice';

export const DeleteDialog = (props) => {
  const customer = useSelector((state) =>
    state.customers.find((customer) => customer.id === props.selectedId)
  );

  const [name, setName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(props.action === 'remove');
  }, [props]);

  useEffect(() => {
    if (customer) {
      setName(customer.name);
    }
  }, [customer]);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      customerRemoved({
        id: props.selectedId,
      })
    );
    props.onModalClosed();
  };

  return (
    <Modal
      show={modalOpen}
      onHide={() => props.onModalClosed()}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete customer</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Are you sure you want to delete customer <strong>{name}</strong>?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onModalClosed()}>
          Cancel
        </Button>

        <Button variant="danger" onClick={() => onSubmit()}>
          Delete customer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
