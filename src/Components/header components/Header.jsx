import React from "react";
import Login from "./Login";
import { Title } from "../../Styles/Title";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header>
      <Title>
        <Link to="/" onClick={props.resetSearch}>
          NC NEWS
        </Link>
      </Title>
      <Login user={props.user} changeUser={props.changeUser} />
    </header>
  );
};

export default Header;
