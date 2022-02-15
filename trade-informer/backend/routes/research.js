const router = require('express').Router();
const axios = require('axios');

require('dotenv').config();

router.route('/').get((request, response) => {
    console.log("research works");
});

router.route('/:id').get((request, response) =>{
    var stock = request.params.id;
    // console.log(POLYGON_API);
    // axios.get(`https://api.polygon.io/v1/open-close/${stock}/2020-10-14?adjusted=true&apiKey=6DtQAVvDKC71TeDfnJtKlHA9B5y2c924`)
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