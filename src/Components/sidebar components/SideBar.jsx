import React from "react";
import { NewArticleButton } from "../../Styles/Sidebar";
import { Link } from "@reach/router";
import TopArticles from "./TopArticles";

class SideBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="sidebar">
        <Link to="/new">
          <NewArticleButton>Write new</NewArticleButton>
        </Link>
        <TopArticles />
      </div>
    );
  }
}

export default SideBar;
