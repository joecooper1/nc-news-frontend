import React from "react";
import { TopicList, TopicItem } from "../../Styles/Navbar";

const Topics = () => {
  return (
    <TopicList id="Topics">
      <TopicItem>Cooking</TopicItem>
      <TopicItem>Coding</TopicItem>
      <TopicItem>Football</TopicItem>
    </TopicList>
  );
};

export default Topics;
