const router = require('express').Router();
const axios = require('axios');

require('dotenv').config();

// base route for the research page.
router.route('/').get((request, response) => {
});

// get stock data based on the stock ticker provided.
router.route('/:ticker').get((request, response) =>{
    let stock = request.params.ticker.toUpperCase();
    axios.get(`https://api.polygon.io/v1/open-close/${stock}/2020-10-14?adjusted=true&apiKey=6DtQAVvDKC71TeDfnJtKlHA9B5y2c924`)
        .then(info => {
            response.json(info.data);
        })
        .catch(error => {
            console.log(error);
            response.status(400).json(error.message);
        });
    });

module.exports = router;