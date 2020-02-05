import React from "react";
import * as api from "../../../api";
import Comments from "./comments components/Comments";
import EditArticleOptions from "./EditArticleOptions";
import ArticleTextVariable from "./ArticleTextVariable";
import Voting from "./Voting";
import {
  ArticleBody,
  ArticleInfo,
  Line,
  LoadingBar
} from "../../../Styles/Main";

class Article extends React.Component {
  state = {
    article: { created_at: "" },
    visibleComments: false,
    isLoading: true,
    articleEdit: false
  };

  render() {
    const { article } = this.state;

    let commentBox = "";
    let comments = "";
    if (this.state.visibleComments === false) {
      commentBox = "Show comments";
      comments = <div></div>;
    } else {
      commentBox = "Hide comments";
      comments = (
        <Comments
          article_id={this.state.article.article_id}
          user={this.props.user}
        />
      );
    }

    if (this.state.isLoading) {
      return <LoadingBar>Loading...</LoadingBar>;
    }

    return (
      <ArticleBody window={window.innerWidth}>
        <ArticleInfo>
          by {article.author} / posted: {article.created_at.slice(0, 10)}
        </ArticleInfo>
        <h2>{article.title}</h2>
        <ArticleInfo>
          Comments: {article.comment_count}{" "}
          <EditArticleOptions
            user={this.props.user}
            article={this.state.article}
            editArticle={this.editArticle}
            removeArticle={this.removeArticle}
          />
        </ArticleInfo>
        <Line />
        <ArticleTextVariable
          article={this.state.article}
          articleEdit={this.state.articleEdit}
          commitChanges={this.commitChanges}
          cancelChanges={this.cancelChanges}
        />
        <Line />
        <Voting article={this.state.article} />
        <Line />
        <button onClick={this.showOrHideComments}>{commentBox}</button>
        {comments}
      </ArticleBody>
    );
  }

  componentDidMount() {
    api.getArticle(this.props.uri).then(({ article }) => {
      this.setState({
        article: article,
        isLoading: false
      });
    });
  }

  showOrHideComments = () => {
    this.setState(currentState => {
      return { visibleComments: !currentState.visibleComments };
    });
  };

  editArticle = () => {
    this.setState({ articleEdit: true });
  };

  commitChanges = articleInput => {
    api
      .patchArticle(articleInput, this.state.article.article_id)
      .then(articleResponse => {
        return this.setState({
          articleEdit: false
        });
      });
  };

  cancelChanges = () => {
    this.setState({
      articleEdit: false
    });
  };

  removeArticle = event => {
    console.log("here");
    event.preventDefault();
    api.deleteArticleById(this.state.article.article_id);
  };
}

export default Article;
