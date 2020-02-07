import React from "react";
import {
  UserProfileBody,
  Name,
  ProfilePic,
  LoadingBar,
  EmptyList
} from "../../Styles/Main";
import * as api from "../../api";
import ArticlesSmallDisplay from "./ArticlesSmallDisplay";

class UserProfile extends React.Component {
  state = {
    user: {},
    articlesWritten: [],
    isLoading: true,
    errorCatch: false
  };

  render() {
    const { user } = this.state;

    if (this.state.isLoading) {
      return <LoadingBar>Loading...</LoadingBar>;
    } else if (this.state.errorCatch) {
      return (
        <EmptyList>
          Sorry, there's nodoby here. <br />
          <br /> :(
        </EmptyList>
      );
    }
    return (
      <UserProfileBody window={window.innerWidth}>
        <ProfilePic
          src={user.avatar_url}
          alt={user.name + " profile picture"}
          window={window.innerWidth}
        ></ProfilePic>
        <Name window={window.innerWidth}>
          <h2>{user.name}</h2>
          <h3>aka {user.username}</h3>
        </Name>
        <ArticlesSmallDisplay user={user.username} />
      </UserProfileBody>
    );
  }

  componentDidMount() {
    api
      .getUser(this.props.username)
      .then(({ user }) => {
        this.setState({ user: user, isLoading: false, errorCatch: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, errorCatch: true });
      });
  }
}

export default UserProfile;
