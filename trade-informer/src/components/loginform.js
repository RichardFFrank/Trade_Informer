import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/usercontext";

const LoginForm = () => {
    const { loginUser } = useContext(UserContext);

    const [currUser, setCurrUser] = useState({
        email: "", password: ""
    });

    const { email, password } = currUser;

    const onInputChange = (event) => {
        setCurrUser({ ...currUser, [event.target.name]: event.target.value })
    }

    const userSubmit = (event) => {
        event.preventDefault();
        loginUser(currUser.email, currUser.password);
    }

    return (
        <Form onSubmit={userSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={email}
                    onChange= {(event) => onInputChange(event)}
                    required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange= {(event) => onInputChange(event)}
                    required>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Log-in
            </Button>
        </Form>
    )
}

export default LoginForm;