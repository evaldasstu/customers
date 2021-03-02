import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteDialog = ({
  customerToDelete,
  action,
  onDeleteConfirmed,
  onModalClosed,
}) => {

  return (
    <Modal show={action === 'delete'} onHide={onModalClosed} animation={false} centered>
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

          <Button variant="danger" onClick={onDeleteConfirmed}>
            Delete customer
          </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDialog;
