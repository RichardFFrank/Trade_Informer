import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import researchService from '../services/researchService';

function SearchBar() {
    const [search, setSearch] = useState("");

    const [summary, setSummary] = useState("");
    const [ticker, setTicker] = useState("");
    const [stockPriceData, setStockPriceData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getCompanySummary(search);
    }

    const getCompanySummary = (company) => {
        // use teammates micro service to obtain company summary.
        researchService.getCompanyInfo(company)
            .then(response => {
                setSummary(response.data);
            })
            // once the summary promise is returned, get the Ticker
            .then(researchService.getStockNames(company)
                .then(value => {
                    setTicker(value.data[0]['symbol']);
                    // once the ticker promise is returned, get the stock price information.
                    researchService.getStockPriceData(value.data[0]['symbol'])
                        .then(response => {
                            console.log(response.data);
                            setStockPriceData(response.data);
                            console.log("3");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
            )
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            {/* https://stackoverflow.com/questions/12858979/put-input-submit-on-same-line-as-input-box/12859038 */}
                            <Form.Control type="text" placeholder="Search for an investment to research." name="search" value={search} onChange={(event) => setSearch(event.target.value)}></Form.Control>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                {summary && ticker ?
                    <div>
                        <Card>
                            <Card.Title className="text-center">
                                Results for Company: {search}
                            </Card.Title>
                            <Card.Subtitle className="text-center">
                                Ticker Symbol: {ticker}
                            </Card.Subtitle>
                            <Card.Body>
                                <h2>Summary: </h2>
                                {summary}
                            </Card.Body>
                        </Card>
                    </div> 
                : 
                <div></div>
                }
            </Row>
            <Row> </Row>
            <Row>
                <Col>
                    {stockPriceData ? 
                    <div>
                        <Card>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Open</th>
                                        <th>Close</th>
                                        <th>Daily Low</th>
                                        <th>Daily High</th>
                                        <th>Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{stockPriceData['from']}</td>
                                        <td>{stockPriceData['open']}</td>
                                        <td>{stockPriceData['close']}</td>
                                        <td>{stockPriceData['low']}</td>
                                        <td>{stockPriceData['high']}</td>
                                        <td>{stockPriceData['volume']}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div> 
                    : 
                    <div></div>}
                </Col>
            </Row>
        </>
    )
}

export default SearchBar