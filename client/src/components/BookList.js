import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
  books{
    name
    id
  }
}
`
class BookList extends Component {
  displayBooks() {
    const data = this.props.data;
    return data.loading ? (<div>Loading books...</div>) :
      (
        data.books.map(book => <li key={book.id} >{book.name}</li>)
      )
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);