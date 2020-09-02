const mongoose = require('mongoose');

const Detail = new mongoose.Schema({
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    amount: Number
});

module.exports = mongoose.model('Detail', Detail);