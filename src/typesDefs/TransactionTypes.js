const { gql } = require('apollo-server');

const TransactionTypes = gql`
    type Transaction {
        id: ID!
        user: User
        detail: String
        amount: Float!
        type: Boolean!
        date_time: String!
        details: [Detail]
    }

    input TransactionInput {
        detail: String
        amount: Float!
    }

    extend type Query {
        getTransactions: [Transaction]
    }

    extend type Mutation {
        addTransaction(input: TransactionInput): Transaction
    }
`;

module.exports = {
    TransactionTypes,
};