import React from "react";
import Data from "../MOCK_DATA.json";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import SearchBar from './search_bar';

function Research() {


    return (
        <div className="App">
            <div className="row">
                <div className="col-sm">
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}

export default Research;