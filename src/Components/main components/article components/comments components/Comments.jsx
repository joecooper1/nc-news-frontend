import React from "react";
import {
  CommentsDisplay,
  Line,
  Comment,
  CommentInfo,
  VoteCount
} from "../../../../Styles/Main";
import * as api from "../../../../api";

class Comments extends React.Component {
  state = {
    comments: []
  };

  render() {
    return (
      <CommentsDisplay>
        {this.state.comments.map(comment => {
          return (
            <Comment>
              <CommentInfo>
                <p>
                  <strong>{comment.author}</strong> &nbsp;
                  <button>thumbs up</button> &nbsp;{" "}
                  <VoteCount voteCount={comment.votes}>
                    {comment.votes}
                  </VoteCount>
                </p>
                <p style={{ color: "grey" }}>
                  {comment.created_at.slice(11, 19)} on{" "}
                  {comment.created_at.slice(0, 10)}
                </p>
              </CommentInfo>{" "}
              {comment.body}
              <Line></Line>
            </Comment>
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
}

export default Comments;
