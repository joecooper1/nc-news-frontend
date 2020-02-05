import React from "react";
import { EditBox } from "../../../Styles/Main";

class EditArticleOptions extends React.Component {
  state = {
    deletePrompt: false
  };

  render() {
    const { article } = this.props;

    let deleteOptions = "";
    if (this.state.deletePrompt) {
      deleteOptions = (
        <form onSubmit={this.props.removeArticle} onReset={this.cancelDelete}>
          Are you sure? <button type="submit">Yes</button>
          <button type="reset">No</button>
        </form>
      );
    }

    if (this.props.user === article.author) {
      return (
        <EditBox>
          <button
            style={{
              borderColor: "inherit",
              backgroundColor: "inherit",
              color: "blue"
            }}
            onClick={this.props.editArticle}
          >
            {" "}
            edit{" "}
          </button>
          <button
            style={{
              borderColor: "inherit",
              backgroundColor: "inherit",
              color: "red"
            }}
            onClick={this.promptDelete}
          >
            {" "}
            delete{" "}
          </button>
          {deleteOptions}
        </EditBox>
      );
    } else {
      return "";
    }
  }

  promptDelete = event => {
    event.preventDefault();
    this.setState({ deletePrompt: true });
  };

  cancelDelete = event => {
    event.preventDefault();
    this.setState({ deletePrompt: false });
  };
}

export default EditArticleOptions;
