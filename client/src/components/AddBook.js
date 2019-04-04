import React, { Component } from 'react';
import { getAuthorsQuery } from '../queries/queries';
import { graphql } from 'react-apollo';


class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    authorId: ''
  }
  displayAuthors() {
    const data = this.props.data;
    return data.loading ? (<option disabled>Loading books...</option>) :
      (
        data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
      )
  }
  submitForm = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label> Book Name:</label>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
        </div>

        <div className="field">
          <label> Genre:</label>
          <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })}>
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