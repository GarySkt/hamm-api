const { Detail, Item, Transaction } = require('../models');
const { AuthenticationError } = require('apollo-server');

const DetailResolvers = {
    Query: {
    },

    Mutation: {
    },

    Detail: {
        async item(parent) {
            return await Item.findById(parent.item);
        },
        
        async transaction(parent) {
            return await Transaction.findById(parent.transaction);
        },
    }
};

module.exports = {
    DetailResolvers,
};