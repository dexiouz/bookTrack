import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import BookDetails from './BookDetails';
import { getBooksQuery } from '../queries/queries';


class BookList extends Component {
  state = {
    selected: null
  }
  displayBooks() {
    const data = this.props.data;
    return data.loading ? (<div>Loading books...</div>) :
      (
        data.books.map(book => <li 
          key={book.id} 
          onClick={(e) => this.setState({ selected: book.id})}
          >
          {book.name}
          </li>)
      )
  }
  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);