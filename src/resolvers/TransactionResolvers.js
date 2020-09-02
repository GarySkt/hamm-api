const { Transaction, User, Item, Detail } = require('../models');
const { AuthenticationError } = require('apollo-server');

const TransactionResolvers = {
    Query: {
        async getTransactions(parent, input, context) {
            if (!context.user) throw new AuthenticationError('You must be logged in')

            return await Transaction.find({ user: context.user.id });
        },
    },

    Mutation: {
        async addTransaction(parent, { input }, context) {
            if (!context.user) throw new AuthenticationError('You must be logged in')

            const transaction = new Transaction({ ...input, user: context.user.id, type: true, date_time: new Date() });
            await transaction.save();

            const items = await Item.find({ user: context.user.id });

            items.forEach(async (item) => {
                const amount = input.amount * item.percentage / 100;

                const detail = new Detail({ transaction, item, amount });
                await detail.save();

                item.amount += amount;

                await item.save();
            });

            return transaction;
        }
    },

    Transaction: {
        async user(parent) {
            return await User.findById(parent.user);
        },

        async details(parent) {
            return await Detail.find({ transaction: parent.id });
        }
    }
};

module.exports = {
    TransactionResolvers,
};