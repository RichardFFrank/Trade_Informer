import React, { useState, useContext, useEffect } from 'react';
import { PortfolioContext } from "../contexts/portfoliocontext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Editform from './editform';
import researchService from '../services/researchService';



function InvestmentRow(props) {

    const { deleteInvestment } = useContext(PortfolioContext);

    const [editmodal, setEditModal] = useState(false);
    const showEdit = () => setEditModal(true);
    const closeEdit = () => setEditModal(false);

    const [alert, setAlert] = useState(false);
    const alertShow = () => setAlert(true);
    const alertClose = () => setAlert(false);

    const [stockPriceData, setStockPriceData] = useState("");

    const investment = props.investment[0].investment;

    const getStockPriceData = (ticker) => {
        researchService.getStockPriceData(ticker)
            .then(response => {
                setStockPriceData(response.data)
            })
            .catch(error => {
                console.log(error);
                setStockPriceData("Unable to Find")
            })
    }

    useEffect(() => {
        getStockPriceData(investment.investment)
    }, []);
    
    const deleteFunction = (investment_id) => {
        deleteInvestment(investment_id);
        alertClose();
    }

    const percentageChange = (original, current) => {
        return (((current / original) - 1) * 100).toFixed(2)

    }


    return (
        <>
            <td hidden>{investment._id}</td>
            <td>{investment.investment}</td>
            <td>{investment.quantity}</td>
            <td>{investment.price_paid}</td>
            <td>{stockPriceData.close}</td>
            <td>{percentageChange(investment.price_paid, stockPriceData.close)}%</td>
            <td><Button variant="warning" onClick={showEdit}>edit</Button></td>
            <td><Button className={``} onClick={alertShow} variant="danger">delete</Button></td>

            <Modal show={alert} onHide={alertClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete {investment.investment}?</Modal.Title>
                </Modal.Header>
                <Button onClick={() => deleteFunction(investment._id)}>Yes</Button>
                <br></br>
                <Button onClick={alertClose}>No</Button>
            </Modal>

            <Modal show={editmodal} onHide={closeEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Please complete the fields below to edit investments.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Editform editInvestment={props} />
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