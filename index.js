const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// require graphql http
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;

app.listen(PORT, () => console.log(`bookr is running on ${PORT}`))