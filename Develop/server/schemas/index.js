const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.listen(PORT, () => {
  console.log(`🌍 Now listening on localhost:${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});