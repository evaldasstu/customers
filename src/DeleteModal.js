import { Button, Modal } from 'react-bootstrap';

function DeleteModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete customer{' '}
        <strong>{props.rowIndex}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={props.handleClose}>
          Delete customer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
