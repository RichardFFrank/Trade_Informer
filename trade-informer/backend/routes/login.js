// reference material - https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/

const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.route('/').post(async (request, response) => {
    console.log("login Works");

    try {
        // get email and pass from user
        const { email, password } = request.body;
        
        // validate that we have both an email and a password
        if (!(email && password)) {
            response.status(400).send("Email and Password are required");
        }

        // check if there is a user in the database                         @TO-DO: Refer the user to the register page.
        const user = await User.findOne({email});
        
        // check if the password is valid.
        if (user && (await bcrypt.compare(password, user.password))) {
            // create JWT token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h",
                }
            );

            //save the current token for the user.
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