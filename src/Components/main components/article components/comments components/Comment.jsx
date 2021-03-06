import React from "react";
import {
  Line,
  CommentStyle,
  VoteCount,
  DeleteButton
} from "../../../../Styles/Main";

class Comment extends React.Component {
  state = { votes: 0, disableVoting: false };

  render() {
    const comment = this.props.comment;

    //A delete button only shows if logged in as the author of comment
    let deleteOption = "";
    if (comment.author === this.props.user) {
      deleteOption = (
        <DeleteButton>
          <button
            onClick={() => this.props.deleteComment(comment.comment_id)}
            style={{
              color: "inherit",
              backgroundColor: "inherit",
              borderColor: "inherit"
            }}
          >
            Delete
          </button>
        </DeleteButton>
      );
    }

    // Vote buttons are disabled on click until after page refresh, currently no memory in api
    // of who has voted for what.
    // The created_at date and time is sliced in two parts from a longer format string.
    return (
      <CommentStyle>
        <aside>
          <p>
            <strong>{comment.author}</strong> &nbsp;
            <button
              disabled={this.state.disableVoting}
              onClick={() => this.handleClick(comment.comment_id, 1)}
            >
              <span role="img" aria-label="thumbs up" className="thumbs">
                &#x1F44D;
              </span>
            </button>{" "}
            &nbsp;{" "}
            <button
              disabled={this.state.disableVoting}
              onClick={() => this.handleClick(comment.comment_id, -1)}
            >
              <span role="img" aria-label="thumbs up" className="thumbs">
                &#x1F44E;
              </span>
            </button>{" "}
            &nbsp;{" "}
            <VoteCount voteCount={this.state.votes}>
              {this.state.votes}
            </VoteCount>
          </p>
          <p style={{ color: "grey" }}>
            {comment.created_at.slice(11, 19)} on{" "}
            {comment.created_at.slice(0, 10)}
          </p>
        </aside>{" "}
        {comment.body} <br />
        {deleteOption}
        <Line></Line>
      </CommentStyle>
    );
  }

  componentDidMount() {
    this.setState({ votes: this.props.comment.votes });
  }

  //Increase votes by one, optimistic rendering!!, and disable further voting.
  handleClick = (comment_id, num) => {
    this.props.vote(comment_id, num);
    this.setState(currentState => {
      return { votes: currentState.votes + num, disableVoting: true };
    });
  };
}

export default Comment;
