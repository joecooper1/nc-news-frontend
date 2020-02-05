import React from "react";
import Topics from "./Topics";
import SearchBar from "./SearchBar";
import { Nav } from "../../Styles/Navbar";
import * as api from "../../api";

class NavBar extends React.Component {
  state = {
    topics: []
  };

  render() {
    let topics = "";
    if (window.innerWidth > 600)
      topics = (
        <Topics
          topics={this.state.topics}
          resetSearch={this.props.resetSearch}
        />
      );
    return (
      <Nav window={window.innerWidth}>
        {topics}
        <SearchBar doSearch={this.props.doSearch} />
      </Nav>
    );
  }

  componentDidMount() {
    api.getTopics().then(({ topics }) => {
      const goodTopics = topics
        .reduce((goodTopics, topic) => {
          goodTopics.push(topic.slug[0].toUpperCase() + topic.slug.slice(1));
          return goodTopics;
        }, [])
        .sort();
      this.setState({ topics: goodTopics });
    });
  }
}

export default NavBar;
