const { Item, User } = require('../models');
const { AuthenticationError } = require('apollo-server');

const ItemResolvers = {
    Query: {
        async getItems(parent, input, context) {
            if (!context.user) throw new AuthenticationError('You must be logged in')

            return await Item.find({ user: context.user.id });
        },
    },

    Mutation: {
        async addItem(parent, { input }, context) {
            if (!context.user) throw new AuthenticationError('You must be logged in')

            const item = new Item({ ...input, user: context.user.id });
            await item.save();

            return item;
        }
    },

    Item: {
        async user(parent) {
            return await User.findById(parent.user);
        }
    }
};

module.exports = {
    ItemResolvers,
};