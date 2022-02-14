const auth = require('../auth');
const router = require('express').Router();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus: 200
}

router.route('/').get(auth, cors(corsOptions), (request, response) => {
    response.status(200).send("Welcome to Trade informer.");
});



// router.route('/').get((request, response) => {
//     console.log("Portfolio Works");
// });

module.exports = router;