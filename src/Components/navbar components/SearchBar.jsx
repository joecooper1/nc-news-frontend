import React from "react";
import { SearchBarForm, GoButton } from "../../Styles/Navbar";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  render() {
    return (
      <SearchBarForm>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search{" "}
            <input
              type="text"
              placeholder="javascript"
              value={this.state.searchInput}
              onChange={this.handleChange}
            ></input>
          </label>
          <GoButton>Go!</GoButton>
        </form>
      </SearchBarForm>
    );
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.doSearch(this.state.searchInput);
    this.setState({ searchInput: "" });
  };
}

export default SearchBar;
