import React from "react";
import { SearchBarForm, GoButton } from "../../Styles/Navbar";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  render() {
    return (
      <SearchBarForm onSubmit={this.handleSubmit}>
        <label>
          Search <input type="text" placeholder="javascript"></input>
        </label>
        <GoButton>Go!</GoButton>
      </SearchBarForm>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
  };
}

export default SearchBar;
