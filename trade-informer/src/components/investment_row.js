import React from 'react';
import Button from "react-bootstrap/Button";
import { PortfolioContext } from '../contexts/portfoliocontext';
import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Editform from './editform';
import PortfolioContextProvider from '../contexts/portfoliocontext';

function InvestmentRow({ investment }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { deleteInvestment } = useContext(PortfolioContext);

  return (
    <tr>
      <td hidden>{investment._id}</td>
      <td>{investment.investment}</td>
      <td>{investment.quantity}</td>
      <td>{investment.price_paid}</td>
      <td>Placeholder</td>
      <td>Placeholder</td>
      <td>Placeholder</td>
      <td><Button variant="warning" onClick={handleShow}>edit</Button>{''}</td>
      <td><Button onClick={() => deleteInvestment(investment._id)} variant="danger">delete</Button></td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please complete the fields below to edit investments.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PortfolioContextProvider>
            <Editform editInvestment={investment} />
          </PortfolioContextProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  )
}

export default InvestmentRow