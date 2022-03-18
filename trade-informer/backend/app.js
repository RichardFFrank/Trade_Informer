// app.js creates all our routes and logic.
require('dotenv').config();
require('./database').connect();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


/*
    Page routes are below:
*/ 
const portfolioRouter = require('./routes/portfolio');
const aboutRouter = require('./routes/about');
const researchRouter = require('./routes/research');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.use('/portfolio', portfolioRouter);
app.use('/about', aboutRouter);
app.use('/research', researchRouter);

module.exports = app;