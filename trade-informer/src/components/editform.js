import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PortfolioContext } from "../contexts/portfoliocontext";
import { useContext, useState } from "react";

const Editform = ( {editInvestment}) => {

    const id = editInvestment._id;

    const [investment, setInvestment] = useState(editInvestment.investment);
    const [quantity, setQuantity] = useState(editInvestment.quantity);
    const [price_paid, setPrice_Paid] = useState(editInvestment.price_paid);
    const [user, setUser] = useState("richard.f.frank@gmail.com")

    const { updateInvestment } = useContext(PortfolioContext)

    const updatedInvestment = {investment, quantity, price_paid, user}

    const handleSubmit = (event) => {
        event.preventDefault();
        updateInvestment(id, updatedInvestment);
    }



    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="investment_name">
            <Form.Label>Investment Name</Form.Label>
                <Form.Control type="text" placeholder="Please enter the name of your investment." name="investment"  value={investment} onChange={(event) => setInvestment(event.target.value)} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="investment_quantity">
            <Form.Label>Investment Quantity</Form.Label>
                <Form.Control type="number" placeholder="How much did you buy?"name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="investment_price_paid">
            <Form.Label>What was the price when you bought it?</Form.Label>
                <Form.Control type="number" placeholder="Enter the average cost basis of your investment." name="price_paid" value={price_paid} onChange={(event) => setPrice_Paid(event.target.value)} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="investment_price_paid" hidden>
            <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter the average cost basis of your investment." name="email"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Edit Investment
        </Button>
        </Form>

    )
}

export default Editform;