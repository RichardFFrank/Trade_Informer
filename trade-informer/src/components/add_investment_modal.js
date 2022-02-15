import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PortfolioContextProvider from "../contexts/portfoliocontext";
import Addform from "./addform";

export default function AddInvestmentModal() {
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
          <PortfolioContextProvider>
          <Addform />
          </PortfolioContextProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
