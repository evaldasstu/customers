import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import useMapboxApi from './useMapboxApi';

const CustomerForm = ({
  selectedCustomer,
  action,
  onSaveConfirmed,
  onModalClosed,
}) => {
  const [customer, setCustomer] = useState(selectedCustomer);
  const [validated, setValidated] = useState(false);
  const [{ coordinates, isError }] = useMapboxApi({ customer });

  useEffect(() => {
    setCustomer(selectedCustomer);
  }, [selectedCustomer]);

  useEffect(() => {
    const injectCoordinates = customer;
    if (coordinates) {
      injectCoordinates.lat = coordinates[0];
      injectCoordinates.lng = coordinates[1];
    }
    setCustomer(injectCoordinates);
  }, [customer, coordinates]);

  const onHide = () => {
    onModalClosed();
    setValidated(false);
  };

  // Set focus to first form field on opening
  const firstInput = useRef();
  useEffect(() => {
    if (action === 'add' || action === 'update') {
      firstInput.current.focus();
    }
  }, [action]);

  // Make Bootstrap work with native HTML5 form validation
  const onSubmit = (e) => {
    setValidated(true);
    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      onSaveConfirmed(customer);
      onModalClosed();
      e.preventDefault();
      setValidated(false);
    }
  };

  return (
    <Modal
      show={action === 'add' || action === 'update'}
      animation={false}
      backdrop="static"
      {...{ onHide }}
      centered
    >
      <Modal.Header closeButton>
        {action === 'add' ? (
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
              value={customer.name || ''}
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value });
              }}
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
              value={customer.email || ''}
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Invalid email format.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={customer.city || ''}
                onChange={(e) =>
                  setCustomer({ ...customer, city: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control
                value={customer.street || ''}
                onChange={(e) =>
                  setCustomer({ ...customer, street: e.target.value })
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="house">
              <Form.Label>House number</Form.Label>
              <Form.Control
                value={customer.house || ''}
                onChange={(e) =>
                  setCustomer({ ...customer, house: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                value={customer.zip || ''}
                onChange={(e) =>
                  setCustomer({ ...customer, zip: e.target.value })
                }
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="coordinates">
            <Form.Label>Predicted location</Form.Label>
            <Form.Control
              value={coordinates ? `${coordinates[0]}, ${coordinates[1]}` : ''}
              placeholder={isError ? 'Could not fetch coordinates (check README for more info)' : ''}
              disabled
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
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

export default CustomerForm;
