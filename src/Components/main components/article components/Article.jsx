import React from "react";
import * as api from "../../../api";
import Comments from "./comments components/Comments";
import EditArticleOptions from "./EditArticleOptions";
import ArticleTextVariable from "./ArticleTextVariable";
import Voting from "./Voting";
import FavStar from "../FavStar";
import { navigate, Link } from "@reach/router";
import {
  ArticleBody,
  ArticleInfo,
  Line,
  LoadingBar,
  EmptyList
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
    //Sets what user page to link to when author name is clicked
    const userLink = `/users/${article.author}`;

    let commentBox = "";
    let comments = "";

    // If comments are set to not visible, nothing will show. Toggled with show comments button
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

    // If no article object is found, error message displays
    if (this.state.isLoading) {
      return <LoadingBar>Loading...</LoadingBar>;
    } else if (article.created_at === "") {
      return (
        <EmptyList>
          Sorry, no article was found <br /> matching your search. <br />
          <br /> :(
        </EmptyList>
      );
    }

    return (
      <ArticleBody window={window.innerWidth}>
        <ArticleInfo>
          by <Link to={userLink}>{article.author}</Link> / posted:{" "}
          {article.created_at.slice(0, 10)}
        </ArticleInfo>
        <h2>{article.title}</h2>
        <span>
          <FavStar user={this.props.user} article_id={article.article_id} />
        </span>
        <ArticleInfo>
          Comments: {article.comment_count} &nbsp;{" "}
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
    api
      .getArticle(this.props.uri)
      .then(({ article }) => {
        this.setState({
          article: article,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({ isLoading: false });
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
    api.patchArticle(articleInput, this.state.article.article_id).then(() => {
      return this.setState({
        articleEdit: false
      });
    });
  };

  // Undo edit, close edit box
  cancelChanges = () => {
    this.setState({
      articleEdit: false
    });
  };

  removeArticle = event => {
    event.preventDefault();
    api.deleteArticleById(this.state.article.article_id).then(() => {
      navigate("/");
      console.log("woop");
    });
  };
}

export default Article;
