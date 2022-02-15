import React from "react";
import InvestmentTable from "./investment_table";
import AddInvestmentModal from "./add_investment_modal";
import PortfolioContextProvider from "../contexts/portfoliocontext";




const Portfolio = () => {


    return (
        <div className="App">
            <div className="row"><h1>Welcome User!</h1></div>
            <div>
                <PortfolioContextProvider>
                <InvestmentTable/>
                </PortfolioContextProvider>
            </div>
            <div className="row">
                <PortfolioContextProvider>
                <AddInvestmentModal />
                </PortfolioContextProvider>
            </div>
        </div>
    );
}

export default Portfolio;