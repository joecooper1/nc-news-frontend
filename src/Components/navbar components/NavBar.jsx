import React from "react";
import Topics from "./Topics";
import SearchBar from "./SearchBar";
import * as api from "../../api";

class NavBar extends React.Component {
  state = {
    topics: []
  };

  render() {
    return (
      <nav>
        <Topics
          topics={this.state.topics}
          resetSearch={this.props.resetSearch}
        />
        <SearchBar doSearch={this.props.doSearch} />
      </nav>
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
