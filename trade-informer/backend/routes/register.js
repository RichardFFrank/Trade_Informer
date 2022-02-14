const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route('/').post(async(request, response) => {
    console.log("register Works");
    try {
        const { firstName, lastName, email, password } = request.body;

        if (!(firstName && lastName && email && password)) {
            response.status(400).send("All input is required");
        }

        const prevUser = await User.findOne({email});
        if (prevUser){
            return response.status(409).send("User Already Exists. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name: firstName,
            last_name: lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        const token = jwt.sign(
            { user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );
        user.token = token;

        response.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;