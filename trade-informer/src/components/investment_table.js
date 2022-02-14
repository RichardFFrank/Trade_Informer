import React from 'react';
import Investment_Row from './investment_row';

function Investment_Table( { investments }) {
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
          return <Investment_Row key={investment.investment} investment={investment} />
        })
      }
      </tbody>
      </table>
      )
  }

export default Investment_Table;