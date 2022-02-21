import React, { useState, useContext, useEffect } from 'react';
import PortfolioContextProvider, { PortfolioContext } from "../contexts/portfoliocontext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Editform from './editform';
import Addform from "./addform";

const InvestmentTable = ( {currUser} ) => {

  const { investments } = useContext(PortfolioContext);
  const { deleteInvestment, retrieveInvestments } = useContext(PortfolioContext);
  // useEffect(() => {
  //   retrieveInvestments(currUser._id);
  // }, [investments])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editmodal, setEditModal] = useState(false);
  const showEdit = () => setEditModal(true);
  const closeEdit = () => setEditModal(false);

  const [alert, setAlert] = useState(false);
  const alertShow = () => setAlert(true);
  const alertClose = () => setAlert(false);

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


  const del = (investment_id) => {
    deleteInvestment(investment_id);
    alertClose();
  }


  return (
    <>
      <h2>The total amount you have invested so far is: {formattedSum}</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Stock</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price_Paid</th>
            <th scope="col">Latest_Value</th>
            <th scope="col">%_Change</th>
            <th scope="col">Daily_Trend</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            investments.map(investment => {
              let props = {
                investment:investment,
                user:currUser
              }
              return (

                <tr key={ investment._id}>
                  <td hidden>{investment._id}</td>
                  <td>{investment.investment}</td>
                  <td>{investment.quantity}</td>
                  <td>{investment.price_paid}</td>
                  <td>Placeholder</td>
                  <td>Placeholder</td>
                  <td>Placeholder</td>
                  <td><Button variant="warning" onClick={showEdit}>edit</Button></td>
                  <td><Button className={``} onClick={alertShow} variant="danger">delete</Button></td>

                  <Modal show={alert} onHide={alertClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Are you sure you want to delete {investment.investment}?</Modal.Title>
                    </Modal.Header>
                    <Button onClick={() => del(investment._id)}>Yes</Button>
                    <Button onClick={alertClose}>No</Button>
                  </Modal>

                  <Modal show={editmodal} onHide={closeEdit}>
                    <Modal.Header closeButton>
                      <Modal.Title>Please complete the fields below to edit investments.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <PortfolioContextProvider jwt={currUser}>
                        <Editform editInvestment={props} />
                      </PortfolioContextProvider>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={closeEdit}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              )
            })
          }
        </tbody>
      </table>
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