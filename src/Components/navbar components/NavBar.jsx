import React from "react";
import Topics from "./Topics";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav>
      <Topics />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
