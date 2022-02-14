import React from 'react';
import Button from "react-bootstrap/Button";

function Investment_Row( {investment }) {
  return (
    <tr>
        <td>{investment.investment}</td>
        <td>{investment.quantity}</td>
        <td>{investment.price_paid}</td>
        <td>Placeholder</td>
        <td>Placeholder</td>
        <td>Placeholder</td>
        <td><Button variant="warning">edit</Button>{''}</td> 
        <td><Button variant="danger">delete</Button></td>
    </tr>
  )
}

export default Investment_Row