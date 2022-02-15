import React from 'react';
import InvestmentRow from './investment_row';
import { useContext } from "react";
import PortfolioContextProvider, { PortfolioContext } from "../contexts/portfoliocontext";

function InvestmentTable() {
  const {investments} = useContext(PortfolioContext);

  console.log(investments);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope="col">Stock</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price_Paid</th>
          <th scope="col">Latest_Value</th>
          <th scope="col">%_Change</th>
          <th scope="col">Daily_Trend</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
        investments.map(investment => {
          
          return (
              <InvestmentRow key={investment._id} investment={investment} />
          )
        })
      }
      </tbody>
      </table>
      )
  }

export default InvestmentTable;