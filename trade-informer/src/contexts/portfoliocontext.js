import { createContext, useState, useEffect } from "react";
import portfolioService from "../services/portfolio";

export const PortfolioContext = createContext()

const PortfolioContextProvider = (props) => {
    // user react hooks to create state variables.
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        portfolioService.find(props.jwt.user_id)
            .then(response => {
                setInvestments([].concat(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }, [investments]);


const addInvestment = (investment, quantity, price_paid, user_id) => {
    const newInvestment = { investment:investment, quantity:Number(quantity), price_paid:Number(price_paid), user:user_id}
    setInvestments([...investments, newInvestment]);
    console.log(newInvestment);
    portfolioService.addInvestment(newInvestment)
    .then(response => {
        console.log("Investment Added")
    })
    .catch(error => {
        console.log(error);
    });
}

const updateInvestment = (id, updatedInvestment) => {
    // map all investments and set the employee as the updated employee.
    const toUpdate = updatedInvestment;
    console.log(toUpdate);
    portfolioService.updateInvestment(id, toUpdate)
    // axios.post(`http://127.0.0.1:3002/portfolio/update/${id}`, toUpdate)
        .then(    
            setInvestments(investments.map((investment) => investment._id === id ? updatedInvestment : investment))
        )
        .catch(error => {
            console.log("Error: "+error);
        })
}

const deleteInvestment = (id) => {
    portfolioService.deleteInvestment(id)
        .then(
            setInvestments(investments.filter(investment => investment._id !== id))
        )
        .catch(error => {
            console.log("Error:" +error)
        });
}


    return (
        <PortfolioContext.Provider value={{investments, addInvestment, deleteInvestment, updateInvestment}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioContextProvider;