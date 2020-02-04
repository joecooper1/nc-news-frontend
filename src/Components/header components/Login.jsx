import React from "react";
import * as api from "../../api";
import { LogInBar, UserDropDown } from "../../Styles/Title";

class Login extends React.Component {
  state = { users: [] };

  render() {
    return (
      <LogInBar>
        <p>Logged in as </p>{" "}
        <UserDropDown user={this.props.user} onChange={this.props.changeUser}>
          {this.state.users.map(user => {
            return <option key={user}>{user}</option>;
          })}
        </UserDropDown>
      </LogInBar>
    );
  }

  componentDidMount() {
    api.getUsers().then(({ users }) => {
      const goodUsers = users.reduce((goodUsers, user) => {
        goodUsers.push(user.username);
        return goodUsers;
      }, []);
      this.setState({ users: goodUsers });
    });
  }
}

export default Login;
