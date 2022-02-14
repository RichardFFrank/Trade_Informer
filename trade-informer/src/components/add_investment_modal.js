import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function Add_Investment_Modal() {
    // investment modal based of of react bootstrap modal component.

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Investment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please complete the fields below to add investments.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="investment_name">
                    <Form.Label>Investment Name</Form.Label>
                        <Form.Control type="text" placeholder="Please enter the name of your investment."></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="investment_quantity">
                    <Form.Label>Investment Quantity</Form.Label>
                        <Form.Control type="number" placeholder="How much did you buy?"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="investment_price_paid">
                    <Form.Label>What was the price when you bought it?</Form.Label>
                        <Form.Control type="number" placeholder="Enter the average cost basis of your investment."></Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
        {/* <Button variant="primary">Add Investment</Button> */}