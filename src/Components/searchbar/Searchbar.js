import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    find: '',
  };

  handleSearchForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.find);
    this.setState({ find: '' });
  };

  handleInputChange = e => {
    this.setState({ find: e.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSearchForm}>
          <button
            type="submit"
            className="SearchForm-button"
            // onSubmit={this.handleSearchForm}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.find}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
