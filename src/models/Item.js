const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server');

const Item = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    detail: String,
    percentage: Number,
    amount: Number
});

module.exports = mongoose.model('Item', Item);