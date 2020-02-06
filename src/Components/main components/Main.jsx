import React from "react";
import Article from "./article components/Article";
import ArticleList from "./ArticleList";
import UserProfile from "./UserProfile";
import { Router } from "@reach/router";

const Main = props => {
  return (
    <Router>
      <ArticleList
        path="/"
        topic=""
        searchTerm={props.searchTerm}
        user={props.user}
      />
      <ArticleList
        path="/:topic"
        searchTerm={props.searchTerm}
        user={props.user}
      />
      <Article path="/articles/:article_id" user={props.user} />
      <UserProfile path="/users/:username" user={props.user} />
    </Router>
  );
};

export default Main;
