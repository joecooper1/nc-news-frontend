import React from "react";
import * as api from "../../../api";
import Comments from "./comments components/Comments";
import {
  ArticleBody,
  ArticleInfo,
  ArticleText,
  Line
} from "../../../Styles/Main";

class Article extends React.Component {
  state = {
    article: {},
    visibleComments: false
  };

  render() {
    let commentBox = "";
    let comments = "";
    if (this.state.visibleComments === false) {
      commentBox = "Show comments";
      comments = <div></div>;
    } else {
      commentBox = "Hide comments";
      comments = <Comments article_id={this.state.article.article_id} />;
    }

    const { article } = this.state;
    return (
      <ArticleBody>
        <ArticleInfo>
          by {article.author} / posted: {article.created_at}
        </ArticleInfo>
        <h2>{article.title}</h2>
        <ArticleInfo>
          Votes: {article.votes} Comments: {article.comment_count}
        </ArticleInfo>
        <Line />
        <ArticleText>{article.body}</ArticleText>
        <Line />
        <button onClick={this.showOrHideComments}>{commentBox}</button>
        {comments}
      </ArticleBody>
    );
  }

  componentDidMount() {
    api.getArticle(this.props.uri).then(({ article }) => {
      this.setState({ article: article });
    });
  }

  showOrHideComments = () => {
    this.setState(currentState => {
      return { visibleComments: !currentState.visibleComments };
    });
  };
}

export default Article;
