import React from "react";
import { VotingStyle } from "../../../Styles/Main";
import * as api from "../../../api";

class Voting extends React.Component {
  state = { disableVoting: false, votes: this.props.article.votes };

  render() {
    let pluralPeople = "people";
    if (this.state.votes === 1) pluralPeople = "person";

    return (
      <VotingStyle>
        Did you like this article? &nbsp;{" "}
        <button
          disabled={this.state.disableVoting}
          onClick={() => this.vote(this.props.article.article_id, 1)}
        >
          Yes
        </button>
        <button
          disabled={this.state.disableVoting}
          onClick={() => this.vote(this.props.article.article_id, 0)}
        >
          No
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        {this.state.votes} {pluralPeople} liked this article
      </VotingStyle>
    );
  }

  vote(article_id, num) {
    api.patchVotes("articles", article_id, num).then(() => {});
    this.setState(currentState => {
      return { disableVoting: true, votes: currentState.votes + num };
    });
  }
}

export default Voting;
