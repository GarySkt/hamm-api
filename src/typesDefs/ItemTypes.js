const { gql } = require('apollo-server');

const ItemTypes = gql`
    type Item {
        id: ID!
        user: User
        name: String!
        detail: String
        percentage: Float!
        amount: Float!
        details: [Detail]
    }

    input ItemInput {
        name: String!
        detail: String
        percentage: Float!
        amount: Float!
    }

    extend type Query {
        getItems: [Item]
    }

    extend type Mutation {
        addItem(input: ItemInput): Item
    }
`;

module.exports = {
    ItemTypes,
};