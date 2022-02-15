import { createContext, useState } from "react"
import { useEffect } from "react";
import portfolioService from "../services/portfolio";
import axios from "axios";

export const PortfolioContext = createContext()

const PortfolioContextProvider = (props) => {
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

const addInvestment = (investment, quantity, price_paid, user) => {
    const newInvestment = {investment:investment, quantity:Number(quantity), price_paid:Number(price_paid), user:user}

    console.log(newInvestment);
    axios.post(`http://127.0.0.1:3002/portfolio/add`, newInvestment)
    .then(response => {
        setInvestments([...investments, {investment, quantity, price_paid, user}])
    })
    .catch(error => {
        console.log(error);
    });
}


    return (
        <PortfolioContext.Provider value={{investments, addInvestment}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioContextProvider;