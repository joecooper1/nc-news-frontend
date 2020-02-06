import React from "react";
import { StarColor } from "../../Styles/Main";
import * as api from "../../api";

class FavStar extends React.Component {
  state = {
    favourited: false
  };

  render() {
    console.log(this.state.favourited);
    return (
      <StarColor favourited={this.state.favourited}>
        <button
          style={{ backgroundColor: "inherit" }}
          className="star"
          onClick={this.handleClick}
        >
          &#11088;
        </button>
      </StarColor>
    );
  }

  componentDidMount() {
    api
      .getFavourites(this.props.user)
      .then(({ articles }) => {
        articles.map(article => {
          if (article.article_id === this.props.article_id) {
            this.setState({ favourited: true });
          }
        });
      })
      .catch(() => console.log("no get"));
  }

  handleClick = () => {
    api
      .postFavourite(this.props.user, this.props.article_id)
      .then(() => {
        this.setState(currentState => {
          return { favourited: !currentState.favourited };
        });
      })
      .catch(() => console.log("no post"));
  };
}

export default FavStar;
