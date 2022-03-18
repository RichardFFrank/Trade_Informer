const jwt = require('jsonwebtoken');

const config = process.env;

const validateToken = (request, response, next) => {
    
    // check the body, query params, and header for the token.
    const token = request.body.token || request.query.token || request.headers["x-access-token"];

    if (!token) {
        return response.status(403).send("This action is unauthorized. Get a token and come back.")
    }
    try {
        const decodedToken = jwt.verify(token, config.TOKEN_KEY);
        request.user = decodedToken;
    } catch (error) {
        return response.status(401).send("Invalid Token, quit hackin'");
    }
    return next();
}

module.exports = validateToken;