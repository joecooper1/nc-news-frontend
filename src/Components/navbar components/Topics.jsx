import React from "react";
import { TopicList, TopicItem } from "../../Styles/Navbar";
import { Link } from "@reach/router";

const Topics = ({ topics, resetSearch }) => {
  return (
    <TopicList id="Topics">
      {topics.map(topic => {
        const topicLink = `/${topic}`;
        return (
          <TopicItem key={topic} id={topic}>
            <Link
              to={topicLink}
              key={topicLink}
              className="topic"
              onClick={resetSearch}
              style={{ color: "inherit" }}
            >
              {topic}
            </Link>
          </TopicItem>
        );
      })}
    </TopicList>
  );
};

export default Topics;
