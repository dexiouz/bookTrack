import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from '../src/components/BookList';
import './App.css';

// apollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <h1>Chidera Reading Lists</h1>
        <BookList />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
