import React, { useState, useContext } from 'react';
import PortfolioContextProvider, { PortfolioContext } from "../contexts/portfoliocontext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Editform from './editform';


function InvestmentRow(props) {

    const { deleteInvestment } = useContext(PortfolioContext);

    const [editmodal, setEditModal] = useState(false);
    const showEdit = () => setEditModal(true);
    const closeEdit = () => setEditModal(false);

    const [alert, setAlert] = useState(false);
    const alertShow = () => setAlert(true);
    const alertClose = () => setAlert(false);

    const del = (investment_id) => {
        deleteInvestment(investment_id);
        alertClose();
    }

    const investment = props.investment[0].investment;
    const user = props.investment[1].user;


    return (
        <>
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
                    {/* <PortfolioContextProvider jwt={user}> */}
                        <Editform editInvestment={props} />
                    {/* </PortfolioContextProvider> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeEdit}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InvestmentRow;