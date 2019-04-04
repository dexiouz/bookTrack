import React, { Component } from 'react';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { graphql, compose } from 'react-apollo';


class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    authorId: ''
  }
  displayAuthors() {
    const data = this.props.getAuthorsQuery;
    return data.loading ? (<option disabled>Loading books...</option>) :
      (
        data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
      )
  }
  submitForm = (e) => {
    e.preventDefault()
    const {name, genre, authorId} = this.state;
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId 
      }
    })
  }
  render() {
    console.log(this.props)
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label> Book Name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })} />
        </div>

        <div className="field">
          <label> Genre:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ genre: e.target.value })} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select
            onChange={(e) => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}


export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook);