const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql

const books = [
  { name: 'Purple Hibiscus', genre: 'Novel', id: '1', authorId: '1' },
  { name: "macbet", genre: 'drama', id: '2', authorId: '2' },
  { name: 'Outliers', genre: 'Self development', id: '3', authorId: '3' }
];

const authors = [
  { name: 'Chimamanda Ngozi Adichie', age: 32, id: '1' },
  { name: 'Shakespeare', age: 65, id: '2' },
  { name: 'Malcolm Gladwell', age: 42, id: '3' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent)
        return _.find(authors, { id: parent.authorId })
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'ROotQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(typeof (args.id));
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id })
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: RootQuery
})