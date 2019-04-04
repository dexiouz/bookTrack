import React, { Component } from 'react';
import BookList from '../src/components/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chidera Reading Lists</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
