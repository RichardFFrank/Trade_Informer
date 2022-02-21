import React from 'react';
import Data from "../MOCK_DATA.json";
import Card from "react-bootstrap/Card";
import { useState } from 'react';



function SearchBar() {
    const [search, setSearch] = useState("")

    return (
        <>
            <form>
                <div className='form-group'>
                    <input type="text" className='form-control' id="search" aria-describedby='searchbar' placeholder='Search for an investment to research.' onChange={event => setSearch(event.target.value)}></input>
                </div>
            </form>
            <div className="row">
                <br></br>
                {Data.filter((post) => {
                    if (search === "") {
                        return null;
                    } else if (post.security.toLowerCase().includes(search.toLowerCase())) {
                        console.log(post)
                        return post;
                    }
                }).map((post) => (
                    <>
                    <div className='row' key={post.security} >
                        <div className='col-sm'>
                        <Card style={{ width: '24rem'}}>
                            <Card.Body>
                                <Card.Title>{post.security} Corporate Summary</Card.Title>
                                <Card.Text>
                                    {post.summary}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-sm'>
                            <img className="img-fluid" src={ require('./sample_ticker.png') } height="300"  width="300" alt="Stock Chart Placeholder"></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm'>
                        <Card style={{ width: '24rem'}}>
                            <Card.Body>
                                <Card.Title>News About {post.security}</Card.Title>
                                <Card.Text>
                                    {post.summary}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-sm'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Broker</th>
                                    <th>Bid</th>
                                    <th>Ask</th>
                                    <th>volume</th>
                                    <th>Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Robinhood</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                </tr>
                                <tr>
                                    <td>e-Trade</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                </tr>
                                <tr>
                                    <td>Charles Schwab</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                    <td>Placeholder</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default SearchBar