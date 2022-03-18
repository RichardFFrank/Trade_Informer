import React from "react";
import InvestmentTable from "./investment_table";
import PortfolioContextProvider from "../contexts/portfoliocontext";
import jwt_decode from "jwt-decode";



const Portfolio = () => {
    // on load, get current auth token
    
    let currAuthToken = localStorage.getItem("token");
    let logged_in_user = "";
    let decoded = "user";
    if (currAuthToken != null){
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