import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PortfolioContext } from "../contexts/portfoliocontext";
import { useContext, useState } from "react";

const Addform = () => {
    const { addInvestment } = useContext(PortfolioContext)

    const [newInvestment, setNewInvestment] = useState({
        investment:"", quantity:"", price_paid:"", email:"richard.f.frank@gmail.com"
    });

    const onInputChange = (event) => {
        setNewInvestment({...newInvestment, [event.target.name]: event.target.value})
    }

    const {investment, quantity, price_paid, email } = newInvestment;
     
    const handleSubmit = (event) => {
        event.preventDefault();
        addInvestment(investment, quantity, price_paid, email);
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="investment_name">
            <Form.Label>Investment Name</Form.Label>
                <Form.Control type="text" placeholder="Please enter the name of your investment." name="investment" value={investment} onChange= { (event) => onInputChange(event)} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="investment_quantity">
            <Form.Label>Investment Quantity</Form.Label>
                <Form.Control type="number" placeholder="How much did you buy?"name="quantity" value={quantity} onChange= { (event) => onInputChange(event)} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="investment_price_paid">
            <Form.Label>What was the price when you bought it?</Form.Label>
                <Form.Control type="number" placeholder="Enter the average cost basis of your investment." name="price_paid" value={price_paid} onChange= { (event) => onInputChange(event)} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="investment_price_paid" hidden>
            <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter the average cost basis of your investment." name="email" value="richard.f.frank@gmail.com" onChange= { (event) => onInputChange(event)} required></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Investment
        </Button>
        </Form>

    )
}

export default Addform;