import React from "react";
import * as api from "../../api";
import { navigate } from "@reach/router";
import { NewArticleBody } from "../../Styles/Sidebar";
import { ArticleInfo, Line } from "../../Styles/Main";

class NewArticle extends React.Component {
  state = {
    titleInput: "",
    bodyInput: "",
    topics: [],
    chosenTopic: "coding"
  };

  render() {
    return (
      <NewArticleBody window={window.innerWidth}>
        <ArticleInfo>by {this.props.user}</ArticleInfo>

        <form onSubmit={this.handleSubmit} className="editArticleForm">
          <label className="newTitle">
            <input
              name="titleInput"
              onChange={this.handleChange}
              value={this.state.titleInput}
              className="newTitleInput"
              placeholder="title"
              style={{ marginTop: "30px" }}
            ></input>
          </label>
          <Line />
          <textarea
            name="bodyInput"
            onChange={this.handleChange}
            value={this.state.bodyInput}
            className="newBodyInput"
            placeholder="Once upon a time..."
            style={{ marginTop: "30px" }}
          ></textarea>
          <Line />
          <label className="newTitle" style={{ marginTop: "30px" }}>
            Topic: &nbsp;
            <select onChange={this.handleChange} name="chosenTopic">
              {this.state.topics.map(topic => {
                return <option key={topic}>{topic}</option>;
              })}
            </select>
          </label>
          <button
            disabled={!this.state.titleInput || !this.state.bodyInput}
            style={{ display: "inline", float: "right", fontSize: "2em" }}
          >
            Submit
          </button>
        </form>
      </NewArticleBody>
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postArticle(
        this.state.titleInput,
        this.state.bodyInput,
        this.state.chosenTopic,
        this.props.user
      )
      .then(({ article }) => {
        navigate(`/articles/${article.article_id}`);
      });
  };
}

export default NewArticle;
