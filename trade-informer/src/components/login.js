import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LoginForm from "./loginform";
import RegisterForm from "./registerform"

function Login() {
    const [loginForm, setLoginForm] = useState(false);
    const openLogin = () => setLoginForm(true);
    const closeLogin = () => setLoginForm(false);

    const [registerForm, setRegisterForm] = useState(false);
    const openRegisterForm = () => setRegisterForm(true);
    const closeRegisterForm = () => setRegisterForm(false);

    return (
        <div className="App">
            <h1>Welcome!</h1>
            <p>
            Please click the button below to log-in to your account. If you don't have an account yet, please click the "Register" button below to create an account.
            </p>
            <Button variant="primary" onClick={openLogin}>Log-in</Button>
            <Button variant="info" onClick={openRegisterForm}>Register</Button>
            <Modal show={loginForm} onHide={closeLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Enter Your Username and Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <LoginForm/>
                </Modal.Body>
            </Modal>

            <Modal show={registerForm} onHide={closeRegisterForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Complete the fields below to register.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <RegisterForm/>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default Login;