import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteButtonModal(props) {

  return (
    <Modal {...props} centered>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ❗Please Confirm
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Are you sure you want to delete this habit?
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Confirm</Button>
      </Modal.Footer>
      
    </Modal>
  );
}
