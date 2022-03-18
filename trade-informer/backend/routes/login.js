// Authentication process based on source: https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/

const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.route('/').post(async (request, response) => {
    try {
        // get email and pass from user
        const email = request.body.email;
        const password = request.body.password;

        // validate that we have both an email and a password
        if (!(email && password)) {
            response.status(400).send("Email and Password are required");
        }

        // check if there is a user in the database
        const user = await User.findOne({email});
        
        // check if the password is valid.
        if (user && (await bcrypt.compare(password, user.password))) {
            // create JWT token
            const token = jwt.sign(
                { user_id: user._id, email, first_name: user.first_name, last_name: user.last_name },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h",
                }
            );
            // save the current token for the user.
            user.token = token;
            
            // return success
            return response.status(200).json(user);
            }
        return response.status(400).send("Invalid Username or Password");
    }
    catch(error) {
        console.log(error);
    }
});

module.exports = router;