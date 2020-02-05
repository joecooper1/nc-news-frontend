import React from "react";
import { CommentsDisplay, CommentInput } from "../../../../Styles/Main";
import * as api from "../../../../api";
import Comment from "./Comment";

class Comments extends React.Component {
  state = {
    comments: [],
    newComment: false,
    commentInput: ""
  };

  render() {
    let disableSubmit = true;
    if (this.state.commentInput.length > 0) disableSubmit = false;
    let typeNewComment = "";
    if (this.state.newComment) {
      typeNewComment = (
        <form onSubmit={this.postComment}>
          <CommentInput>
            <textarea
              onChange={this.handleChange}
              value={this.state.commentInput}
              placeholder="add a comment..."
              style={{ width: "inherit", height: "inherit" }}
            ></textarea>
          </CommentInput>
          <button disabled={disableSubmit}>Submit</button>
        </form>
      );
    }

    return (
      <CommentsDisplay>
        <button id="addButton" onClick={this.addCommentToggle}>
          +
        </button>
        {typeNewComment}
        {this.state.comments.map(comment => {
          return (
            <Comment
              key={comment.comment_id}
              comment={comment}
              vote={this.vote}
              user={this.props.user}
              deleteComment={this.deleteComment}
            />
          );
        })}
      </CommentsDisplay>
    );
  }

  componentDidMount() {
    api
      .getComments(this.props.article_id, "created_at", "desc")
      .then(({ comments }) => {
        this.setState({ comments: comments });
      });
  }

  vote(comment_id, num) {
    api.patchVotes("comments", comment_id, num).then(() => {});
  }

  deleteComment = comment_id => {
    api.deleteCommentById(comment_id).then(() => {
      api
        .getComments(this.props.article_id, "created_at", "desc")
        .then(({ comments }) => {
          this.setState({
            comments: comments
          });
        });
    });
  };

  addCommentToggle = () => {
    this.setState(currentState => {
      return { newComment: !currentState.newComment };
    });
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  postComment = event => {
    event.preventDefault();
    api
      .postNewComment(
        this.state.commentInput,
        this.props.user,
        this.props.article_id
      )
      .then(({ comment }) => {
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments],
            commentInput: "",
            newComment: false
          };
        });
      });
  };
}

export default Comments;
