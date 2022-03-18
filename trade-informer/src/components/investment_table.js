import React, { useState, useContext, useEffect } from 'react';
import PortfolioContextProvider, { PortfolioContext } from "../contexts/portfoliocontext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Addform from "./addform";
import InvestmentRow from './investment_row';

const InvestmentTable = ( {currUser} ) => {

  const { investments,  } = useContext(PortfolioContext);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let investSum = 0;

  investments.map((investment) => {
    investSum += (investment.price_paid * investment.quantity);
    return 0
  })

  let currencyFormat = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD'
  });

  let formattedSum = currencyFormat.format(investSum);

  return (
    <>
      <h2>The total amount you have invested so far is: {formattedSum}</h2>
      <Table striped bordered hover>
        <thead>
          <tr key="header">
            <th scope="col">Stock</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price_Paid</th>
            <th scope="col">Latest_Value</th>
            <th scope="col">%_Change</th>
            <th colSpan={2} scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            investments.map(investment => {
              let props = [{investment:investment},
                {user:currUser}]
              return (
                <tr key={investment._id}>
                  <InvestmentRow investment={props}></InvestmentRow>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShow}>
        Add Investment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please complete the fields below to add investments.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PortfolioContextProvider jwt={currUser}>
          <Addform currUser={currUser}/>
          </PortfolioContextProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InvestmentTable;