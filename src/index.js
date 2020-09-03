const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const config = require('../config');
const { auth } = require('./libs/auth');

const { typeDefs } = require('./typesDefs');
const { resolvers } = require('./resolvers');

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: auth,
    debug: config.APP_DEBUG,
});

server.listen(config.APP_PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});