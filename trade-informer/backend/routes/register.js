const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a user.
router.route('/').post(async(request, response) => {
    try {
        const { firstName, lastName, email, password } = request.body;

        // Validate the request contains all necessary information for registration.
        if (!(firstName && lastName && email && password)) {
            response.status(400).send("All input is required");
        }

        // Search the database to ensure duplicate users are not already added.
        const prevUser = await User.findOne({email});
        if (prevUser){
            return response.status(409).send("User Already Exists. Please Login");
        }

        // encrypt the password.
        encryptedPassword = await bcrypt.hash(password, 10);

        // create the user.
        const user = await User.create({
            first_name: firstName,
            last_name: lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        // generate the JWT token.
        const token = jwt.sign(
            { user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );
        user.token = token;

        // return the token to the user.
        response.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;