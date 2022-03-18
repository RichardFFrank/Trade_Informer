// database.js manages our connection to the database.

const mongoose = require('mongoose');

const { ATLAS_URI } = process.env;

exports.connect = () => {
    mongoose.connect(ATLAS_URI)
        .then(() => {
            console.log("MongoDB Connection Established.");
        })
        .catch((error) => {
            console.log("Database connection failed. Exiting Now.");
            console.error(error);
            process.exit(1);
        });
};