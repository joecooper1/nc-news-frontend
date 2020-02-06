import React from "react";
import { UserProfileBody, Name, ProfilePic } from "../../Styles/Main";
import * as api from "../../api";
import ArticlesSmallDisplay from "./ArticlesSmallDisplay";

class UserProfile extends React.Component {
  state = {
    user: {},
    articlesWritten: []
  };

  render() {
    const { user } = this.state;

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
        <ArticlesSmallDisplay user={user.name} />
      </UserProfileBody>
    );
  }

  componentDidMount() {
    api.getUser(this.props.username).then(({ user }) => {
      this.setState({ user: user });
    });
  }
}

export default UserProfile;
