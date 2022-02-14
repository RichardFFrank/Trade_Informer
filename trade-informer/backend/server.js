// server.js creates our server.

const express = require('express');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const port = process.env.PORT || 3002; // using 3000 due to new airwatch constrains on port 5000

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});