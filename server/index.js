const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// require graphql http
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express()

// connect to database
// mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds131914.mlab.com:31914/book-db")
mongoose.connect("mongodb://localhost:/book-db", { useNewUrlParser: true } );
mongoose.connection.once('open', () => {
  console.log('connected to mongodb')
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;

app.listen(PORT, () => console.log(`bookr is running on ${PORT}`));