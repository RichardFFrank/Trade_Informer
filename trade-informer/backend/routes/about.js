const router = require('express').Router();

router.route('/').get((request, response) => {
    console.log("About Page Works");
});

module.exports = router;