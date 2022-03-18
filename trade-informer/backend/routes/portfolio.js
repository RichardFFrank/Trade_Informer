const router = require('express').Router();
let Portfolio = require('../models/portfolio.model');

// List all records of stocks in the database.
router.route('/').get((request, response) => {
    Portfolio.find({}).select('investment quantity price_paid user')
        .then(exercises => response.json(exercises))
        .catch(error => response.status(400).json("Error: "+Error));
});

// Add a stock to a users portfolio.
router.route('/add').post((request, response) => {
    console.log(request.body);
    const investment = request.body.investment;
    const quantity = Number(request.body.quantity);
    const price_paid = Number(request.body.price_paid);
    const user = request.body.user;

    const newInvestment = new Portfolio({
        investment, quantity, price_paid, user
    });

    newInvestment.save()
        .then(() => response.json('Investment Added!'))
        .catch(error => response.status(400).json('Error: '+error));
});

// Get all items in a users portfolio.
router.route('/user/:user').get((request, response) =>{
    Portfolio.find().where("user").equals(request.params.user)
        .then(portfolio => response.json(portfolio))
        .catch(error => response.status(400).json('Error: '+error));
});

// Get a specific stock based on ID.
router.route('/:id').get((request, response) => {
    Portfolio.findById(request.params.id)
        .then(portfolio => response.json(portfolio))
        .catch(error => response.status(400).json('Error: '+error));
});

// Update a specific stock, based on ID.
router.route('/update/:id').post((request, response) => {
    Portfolio.findById(request.params.id)
        .then(investment => {
            console.log("found");
            investment.investment = request.body.investment;
            investment.quantity = Number(request.body.quantity);
            investment.price_paid = Number(request.body.price_paid);
            investment.user = request.body.user;
        
            investment.save()
                .then(() => response.json("Investment Updated"))
                .catch(error => response.status(400).json('Error: '+error));
        
        })
        .catch(error => response.status(400).json("Error: "+error));
});

// Delete a specific stock, based on ID.
router.route('/:id').delete((request, response) => {
    Portfolio.findByIdAndDelete(request.params.id)
        .then(() => response.json('Investment Deleted.'))
        .catch(error => response.status(400).json("Error: "+error));
});

module.exports = router;