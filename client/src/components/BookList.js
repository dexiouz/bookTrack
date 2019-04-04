import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import BookDetails from './BookDetails';
import { getBooksQuery } from '../queries/queries';


class BookList extends Component {
  displayBooks() {
    const data = this.props.data;
    return data.loading ? (<div>Loading books...</div>) :
      (
        data.books.map(book => <li key={book.id} >{book.name}</li>)
      )
  }
  render() {
    return (
      <div>
        <ul>
          {this.displayBooks()}
        </ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);