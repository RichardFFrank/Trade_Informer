import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/usercontext";

const RegisterForm = () => {
    const { registerUser } = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        firstName: "", lastName: "", email: "", password: ""
    });

    const { firstName, lastName, email, password } = newUser;

    const onInputChange = (event) => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    const userSubmit = (event) => {
        event.preventDefault();
        registerUser(newUser.firstName, newUser.lastName, newUser.email, newUser.password);
        alert("User Created Successfully");
    }

    return (
        <Form onSubmit={userSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"
                    placeholder="Enter your first name."
                    name="firstName"
                    value={firstName}
                    onChange= {(event) => onInputChange(event)}
                    required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                    placeholder="Enter your last name."
                    name="lastName"
                    value={lastName}
                    onChange= {(event) => onInputChange(event)}
                    required>
                </Form.Control>
            </Form.Group>
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
                Register
            </Button>
        </Form>
    )
}

export default RegisterForm;