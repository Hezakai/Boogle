const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const typeDefs= require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers')
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({ app })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
}
startApolloServer(typeDefs, resolvers);