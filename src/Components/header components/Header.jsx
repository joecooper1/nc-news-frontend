import React from "react";
import Login from "./Login";
import Title from "../../Styles/Title";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <Title>
        <Link to="/">NC NEWS</Link>
      </Title>
      <Login />
    </header>
  );
};

export default Header;
