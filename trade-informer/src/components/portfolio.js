import React, { useContext, useEffect, useState } from "react";
import InvestmentTable from "./investment_table";
import PortfolioContextProvider, { PortfolioContext } from "../contexts/portfoliocontext";
import { Button, Form, Modal } from "react-bootstrap";
import { UserContext } from "../contexts/usercontext";
import jwt_decode from "jwt-decode";



const Portfolio = () => {

    // need function to validate token.
    let currAuthToken = localStorage.getItem("token");
    let logged_in_user = "";
    let decoded = "user";
    if (currAuthToken != ""){
        decoded = jwt_decode(currAuthToken);
        logged_in_user = decoded.user_id;
    }

    return (
        <div className="App">
            {logged_in_user ? (
                <>
                    <div className="row"><h1>Welcome {decoded.first_name}!</h1></div>
                    <div>
                        <PortfolioContextProvider jwt={decoded}>
                            <InvestmentTable currUser={decoded} />
                        </PortfolioContextProvider>
                    </div>
                    <div className="row">
                    </div>
                </>
            ) : (
                <>
                    <h1>Please Log In to use the Portfolio Page</h1>
                </>
            )}
        </div>
    )
}

export default Portfolio;