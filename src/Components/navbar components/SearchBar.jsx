import React from "react";
import { SearchBarForm, GoButton } from "../../Styles/Navbar";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  render() {
    let inputWidth = "180px";
    if (window.innerWidth < 600) {
      inputWidth = "50vw";
    }
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
              style={{ width: inputWidth }}
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
