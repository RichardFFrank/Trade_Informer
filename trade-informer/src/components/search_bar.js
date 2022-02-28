import React from 'react';
import { createContext, useState, useEffect } from 'react';

import Data from "../MOCK_DATA.json";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import researchService from '../services/researchService';


function SearchBar() {
    const [search, setSearch] = useState("");

    const [summary, setSummary] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
        getCompanySummary(search);
    }

    const getCompanySummary = (company) => {
        researchService.getCompanyInfo(company)
            .then(response => {
                setSummary(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }

    return (
        <>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="investment_name">
                            {/* https://stackoverflow.com/questions/12858979/put-input-submit-on-same-line-as-input-box/12859038 */}
                            <Form.Control type="text" placeholder="Search for an investment to research." name="search" value={search} onChange={(event) => setSearch(event.target.value)}></Form.Control>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                        </Form.Group>
                    </Form>
                </Col><Col>
                </Col>
                <div>{summary}</div>
            </Row>
        </>
    )
}

export default SearchBar