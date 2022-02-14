const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    investment: {type: String, required: true},
    quantity: {type: Number, required: true},
    price_paid: {type: Number, required: true},
    user: {type: String, required: true},
}, {
    timestamps: true,
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;