import React from "react";

class Main extends React.Component {
  state = {
    view: "normal",
    sort_by: "created_at",
    order: "desc",
    limit: 10,
    page: 1
  };

  render() {
    return <main></main>;
  }
}

export default Main;
