import React, { Component } from 'react';
import { getAuthorsQuery } from '../queries/queries';
import { graphql } from 'react-apollo';


class AddBook extends Component {
  displayAuthors() {
    const data = this.props.data;
    return data.loading ? (<option disabled>Loading books...</option>) :
      (
        data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
      )
  }
  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label> Book Name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label> Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);