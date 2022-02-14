const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {type: String, default: null},
    last_name: {type: String, default: null},
    email: {type: String, unique: true},
    password: {type: String}, // going to need to store salted hash, figure out later.
    token: {type: String},
}, {
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);