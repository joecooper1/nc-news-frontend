import React from "react";
import { SearchBarForm, GoButton } from "../../Styles/Navbar";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  render() {
    let placeHolder = "javascript";
    let search = "Search";
    if (window.innerWidth < 600) {
      placeHolder = "search";
      search = "";
    }
    return (
      <SearchBarForm>
        <form onSubmit={this.handleSubmit}>
          <label>
            {search}{" "}
            <input
              type="text"
              placeholder={placeHolder}
              value={this.state.searchInput}
              onChange={this.handleChange}
              className="searchBar"
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
