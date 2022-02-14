import React, { useState, useEffect } from "react";
import portfolioService from "../services/portfolio";
import Investment_Table from "./investment_table";
import Add_Investment_Modal from "./add_investment_modal";
import { Link } from "react-router-dom";
import { find } from "../services/portfolio";



const Portfolio = props => {
    // user react hooks to create state variables.
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        retrieveInvestments();
    }, []);

    const retrieveInvestments = () => {
        portfolioService.getAll()
            .then(response => {
                console.log(response.data);
                setInvestments([].concat(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <div className="row"><h1>Welcome User!</h1></div>
            <div>
                <Investment_Table investments={investments} />
            </div>
            <div className="row">
                <Add_Investment_Modal />
            </div>
        </div>
    );
}

export default Portfolio;