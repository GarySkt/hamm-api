const { User, Item, Transaction } = require('../models');
const { AuthenticationError } = require('apollo-server');

const UserResolvers = {
    Query: {
        async getAccount(parent, input, context) {
            if (!context.user) throw new AuthenticationError('You must be logged in')

            return context.user;
        }
    },

    Mutation: {
        async signUp(parent, { input }, context) {
            const user = new User(input);

            return token = user.signUp();
        },

        async login(parent, { email, password }, context) {
            return token = User.login(email, password);
        }
    },

    User: {
        async items(parent) {
            return await Item.find({ user: parent.id });
        },

        async transactions(parent) {
            return await Transaction.find({ user: parent.id });
        },
    }
};

module.exports = {
    UserResolvers,
};