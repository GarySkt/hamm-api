const { TransactionResolvers } = require('./TransactionResolvers');
const { ItemResolvers } = require('./ItemResolvers');
const { DetailResolvers } = require('./DetailResolvers');
const { UserResolvers } = require('./UserResolvers');

const resolvers = [
    TransactionResolvers,
    ItemResolvers,
    DetailResolvers,
    UserResolvers,
];

module.exports = {
    resolvers,
};