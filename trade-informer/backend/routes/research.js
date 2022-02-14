const router = require('express').Router();

router.route('/').get((request, response) => {
    console.log("research works");
});

module.exports = router;