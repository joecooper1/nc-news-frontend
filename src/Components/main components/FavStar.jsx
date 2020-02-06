import React from "react";
import { StarColor } from "../../Styles/Main";
import * as api from "../../api";

class FavStar extends React.Component {
  state = {
    favourited: false
  };

  render() {
    return (
      <StarColor favourited={this.state.favourited}>
        <button
          style={{ color: "inherit", textShadow: "inherit" }}
          className="star"
          onClick={this.handleClick}
        >
          <span role="img" aria-label="un/favourite">
            &#11088;
          </span>
        </button>
      </StarColor>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user)
      api.getFavourites(this.props.user).then(({ articles }) => {
        this.setState({ favourited: false });
        articles.map(article => {
          if (article.article_id === this.props.article_id) {
            return this.setState({ favourited: true });
          }
        });
      });
  }

  componentDidMount() {
    api
      .getFavourites(this.props.user)
      .then(({ articles }) => {
        articles.map(article => {
          if (article.article_id === this.props.article_id) {
            return this.setState({ favourited: true });
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
