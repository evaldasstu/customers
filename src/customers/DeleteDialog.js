import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const DeleteDialog = ({
  customerToDelete,
  action,
  onDeleteConfirmed,
  onModalClosed,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(action === 'delete');
  }, [action]);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDeleteConfirmed();
  };

  return (
    <Modal show={modalOpen} onHide={onModalClosed} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete customer</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Are you sure you want to delete customer{' '}
        <strong>{customerToDelete ? customerToDelete.name : ''}</strong>?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onModalClosed}>
          Cancel
        </Button>

        <Form {...{ onSubmit }}>
          <Button variant="danger" type="submit">
            Delete customer
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDialog;
