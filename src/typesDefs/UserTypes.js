const { gql } = require('apollo-server');

const UserTypes = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        phone: String
        items: [Item]
        transactions: [Transaction]
    }

    type Token {
        token: String!
    }

    input UserInput {
        name: String!
        email: String!
        phone: String
        password: String!
    }

    extend type Query {
        getAccount: User
    }

    extend type Mutation {
        signUp(input: UserInput): Token
        login(email: String!, password: String!): Token
    }
`;

module.exports = {
    UserTypes,
};