const { gql } = require('apollo-server');

const DetailTypes = gql`
    type Detail {
        id: ID!
        transaction: Transaction
        item: Item
        amount: Float!
    }
`;

module.exports = {
    DetailTypes,
};