import React from "react";
import Topics from "./Topics";
import SearchBar from "./SearchBar";
import { Nav } from "../../Styles/Navbar";
import * as api from "../../api";
import { NewArticleButton } from "../../Styles/Sidebar";
import { Link } from "@reach/router";

class NavBar extends React.Component {
  state = {
    topics: []
  };

  render() {
    let topics = "";
    let newButton = "";
    if (window.innerWidth >= 600) {
      topics = (
        <Topics
          topics={this.state.topics}
          resetSearch={this.props.resetSearch}
        />
      );
    } else {
      newButton = (
        <Link to="/new">
          <NewArticleButton window={window.innerWidth}>
            &#x270E;
          </NewArticleButton>
        </Link>
      );
    }
    return (
      <Nav window={window.innerWidth}>
        {topics}
        {newButton}
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
