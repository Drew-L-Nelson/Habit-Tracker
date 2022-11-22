import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteButtonModal(props) {

  return (
    <Modal {...props} centered>

      <Modal.Header closeButton style={{ backgroundColor: '#323232' }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'whitesmoke' }}>
          ❗Please Confirm
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: '#323232' }}>
        <p style={{ color: 'whitesmoke' }}>
          Are you sure you want to delete this habit?
        </p>
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor: '#323232' }}>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="info" onClick={props.onHide}>Confirm</Button>
      </Modal.Footer>
      
    </Modal>
  );
}
