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
                setInvestments([].concat(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };

const addInvestment = (investment, quantity, price_paid, email) => {
    const newInvestment = { investment:investment, quantity:Number(quantity), price_paid:Number(price_paid), user:email}
    axios.post(`http://127.0.0.1:3002/portfolio/add`, newInvestment)
    .then(response => {
        setInvestments([...investments, {newInvestment}])
    })
    .catch(error => {
        console.log(error);
    });
}

const deleteInvestment = (id) => {
    axios.delete(`http://127.0.0.1:3002/portfolio/${id}`)
        .then(
            setInvestments(investments.filter(investment => investment._id !== id))
        )
        .catch(error => {
            console.log("Error:" +error)
        });
}

const updateInvestment = (id, updatedInvestment) => {
    // map all investments and set the employee as the updated employee.
    const toUpdate = updatedInvestment;
    console.log(toUpdate);
    axios.post(`http://127.0.0.1:3002/portfolio/update/${id}`, toUpdate)
        .then(    
            setInvestments(investments.map((investment) => investment._id === id ? updatedInvestment : investment))
        )
        .catch(error => {
            console.log("Error: "+error);
        })
}

    return (
        <PortfolioContext.Provider value={{investments, addInvestment, deleteInvestment, updateInvestment}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioContextProvider;