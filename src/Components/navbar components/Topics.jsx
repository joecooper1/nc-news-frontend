import React from "react";
import { TopicList, TopicItem } from "../../Styles/Navbar";
import { Link } from "@reach/router";

const Topics = ({ topics }) => {
  return (
    <TopicList id="Topics">
      {topics.map(topic => {
        const topicLink = `/${topic}`;
        return (
          <TopicItem key={topic} id={topic}>
            <Link to={topicLink} key={topicLink} className="topic">
              {topic}
            </Link>
          </TopicItem>
        );
      })}
    </TopicList>
  );
};

export default Topics;
