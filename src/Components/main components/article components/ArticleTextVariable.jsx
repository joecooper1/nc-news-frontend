import React from "react";
import { ArticleText } from "../../../Styles/Main";

class ArticleTextVariable extends React.Component {
  state = {
    articleInput: this.props.article.body,
    previousInput: this.props.article.body
  };

  render() {
    if (!this.props.articleEdit) {
      return <ArticleText>{this.state.articleInput}</ArticleText>;
    } else {
      return (
        <form
          onSubmit={this.handleSubmit}
          onReset={this.cancelChanges}
          className="editArticleForm"
        >
          <textarea
            onChange={this.handleChange}
            value={this.state.articleInput}
            className="articleText"
          >
            {this.state.articleInput}
          </textarea>
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </form>
      );
    }
  }

  handleChange = event => {
    this.setState({ articleInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.commitChanges(this.state.articleInput);
    this.setState({ previousInput: this.state.articleInput });
  };

  cancelChanges = event => {
    event.preventDefault();
    this.setState({ articleInput: this.state.previousInput });
    this.props.cancelChanges();
  };
}

export default ArticleTextVariable;
