const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    betsBooked: [],
    betsPlaced: [],
    betsWon: [],
    betsLost: []
})

const User = mongoose.model('User', userSchema);

module.exports = User;