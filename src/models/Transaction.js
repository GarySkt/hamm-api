const mongoose = require('mongoose');

const Transaction = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    detail: String,
    amount: Number,
    type: Boolean,
    date_time: Date
});

module.exports = mongoose.model('Transaction', Transaction);