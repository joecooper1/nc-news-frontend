import React from "react";
import * as api from "../../api";
import { LogInBar, UserDropDown } from "../../Styles/Title";

//User dropdown uses list of existing users from api. Not currently an 'add user' function

class Login extends React.Component {
  state = { users: [] };

  render() {
    let loggedInAs = "logged in as";
    if (window.innerWidth < 600) loggedInAs = "";
    return (
      <LogInBar window={window.innerWidth}>
        <p>{loggedInAs}</p> &nbsp; &nbsp;
        <UserDropDown
          user={this.props.user}
          onChange={this.props.changeUser}
          window={window.innerWidth}
        >
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
