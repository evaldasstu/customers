import { Button, Modal, Form, Col } from 'react-bootstrap';

function EditModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={false}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        {props.rowIndex === undefined ? (
          <Modal.Title>New customer</Modal.Title>
        ) : (
          <Modal.Title>Edit customer {props.rowIndex}</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Full name</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="house">
              <Form.Label>House number</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip code</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="coordinates">
            <Form.Label>Coordinates</Form.Label>
            <Form.Control disabled />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" onClick={props.handleClose}>
          Save customer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
