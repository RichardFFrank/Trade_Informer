import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserContext from "../contexts/usercontext";
import UserContextProvider from "../contexts/usercontext";
import { Modal } from "react-bootstrap";
import LoginForm from "./loginform";

function Login() {

    // const {user, loginUser} = useContext(UserContext);
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
                    <Modal.Title>Please Enter Your Username and Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {/* <LoginForm/> */}
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default Login;