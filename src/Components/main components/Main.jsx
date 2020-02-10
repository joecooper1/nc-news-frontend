import React from "react";
import Article from "./article components/Article";
import ArticleList from "./ArticleList";
import UserProfile from "./UserProfile";
import NewArticle from "./NewArticle";
import { Router } from "@reach/router";
import Background from "../Background";

const Main = props => {
  return (
    <div>
      <Background />
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
        <NewArticle path="/new" user={props.user} />
      </Router>
    </div>
  );
};

export default Main;
