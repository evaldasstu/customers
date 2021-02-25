import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { customerAdded, customerUpdated } from './customersSlice';

export const CustomerForm = (props) => {
  const customer = useSelector((state) =>
    state.customers.find((customer) => customer.id === props.selectedId)
  );

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [zip, setZip] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const [coordinates, setCoordinates] = useState('');
  const [validated, setValidated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen && customer) {
      setName(customer.name);
      setEmail(customer.email);
      setCity(customer.city);
      setStreet(customer.street);
      setHouse(customer.house);
      setZip(customer.zip);
      setLat(customer.lat);
      setLng(customer.lng);
    }
  }, [modalOpen, customer]);

  const clearForm = () => {
    setName('');
    setEmail('');
    setCity('');
    setStreet('');
    setHouse('');
    setZip('');
    setLat('');
    setLng('');
  };

  useEffect(() => {
    setCoordinates(lat ? `${lat}, ${lng}` : '');
  }, [lat, lng]);

  useEffect(() => {
    setModalOpen(props.action === 'add' || props.action === 'update');
  }, [props]);

  // Focus on input when modal is visible
  const firstInput = useRef();
  useEffect(() => {
    if (modalOpen) {
      firstInput.current.focus();
    }
  }, [modalOpen]);

  const onModalClosed = () => {
    setValidated(false);
    clearForm();
    props.onModalClosed();
  };

  const onSubmit = (e) => {
    // Native HTML5 form validation based on
    // https://react-bootstrap.github.io/components/forms/#forms-validation-native

    setValidated(true);
    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      // Add a new customer to the store
      if (props.action === 'add') {
        dispatch(
          customerAdded(name, email, city, street, house, zip, lat, lng)
        );
      } else {
        // Update existing customer
        dispatch(
          customerUpdated({
            id: props.selectedId,
            name,
            email,
            city,
            street,
            house,
            zip,
            lat,
            lng,
          })
        );
      }
      onModalClosed();
    }
  };

  return (
    <Modal
      show={modalOpen}
      onHide={() => onModalClosed()}
      animation={false}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        {props.action === 'add' ? (
          <Modal.Title>New customer</Modal.Title>
        ) : (
          <Modal.Title>Edit customer</Modal.Title>
        )}
      </Modal.Header>

      <Form noValidate {...{ validated }} {...{ onSubmit }}>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>
              Full name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={firstInput}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter the customer name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Invalid email format.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="house">
              <Form.Label>House number</Form.Label>
              <Form.Control
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="coordinates">
            <Form.Label>Coordinates</Form.Label>
            <Form.Control value={coordinates} disabled />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onModalClosed}>
            Cancel
          </Button>

          <Button variant="primary" type="submit">
            Save customer
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
