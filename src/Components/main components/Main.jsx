import React from "react";

import ArticleList from "./ArticleList";
import { Router } from "@reach/router";

const Main = () => {
  return (
    <Router>
      <ArticleList path="/" topic="" />
      <ArticleList path="/:topic" />
    </Router>
  );
};

export default Main;
