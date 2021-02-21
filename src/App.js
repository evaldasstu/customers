import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Grid from './Grid';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

function App() {
  const [rowIndex, setRowIndex] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEdit = (rowIndex) => {
    setRowIndex(rowIndex);
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDelete = (rowIndex) => {
    setRowIndex(rowIndex);
    setShowDeleteModal(true);
  };

  return (
    <>
      <Container fluid="xl">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h1 className="mb-0">Customers</h1>
          <Button variant="primary" onClick={() => handleEdit()}>
            New customer
          </Button>
        </div>
        <Grid
          handleEdit={(rowIndex) => handleEdit(rowIndex)}
          handleDelete={(rowIndex) => handleDelete(rowIndex)}
        />
      </Container>

      <EditModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        rowIndex={rowIndex}
      />

      <DeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        rowIndex={rowIndex}
      />
    </>
  );
}

export default App;
