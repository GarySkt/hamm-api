const { TransactionTypes } = require('./TransactionTypes');
const { DetailTypes } = require('./DetailTypes');
const { ItemTypes } = require('./ItemTypes');
const { UserTypes } = require('./UserTypes');

const typeDefs = [
    `
        type Query

        type Mutation
    `,
    TransactionTypes,
    DetailTypes,
    ItemTypes,
    UserTypes,
];

module.exports = {
    typeDefs,
};