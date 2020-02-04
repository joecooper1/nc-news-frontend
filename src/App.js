import React from "react";
import "./App.css";
import Header from "./Components/header components/Header";
import NavBar from "./Components/navbar components/NavBar";
import Main from "./Components/main components/Main";
import SideBar from "./Components/sidebar components/SideBar";

class App extends React.Component {
  state = {
    searchTerm: "",
    user: "grumpy19",
    isLoading: true
  };

  render() {
    return (
      <div className="App">
        <Header
          resetSearch={this.resetSearch}
          user={this.state.user}
          changeUser={this.changeUser}
        />
        <NavBar doSearch={this.doSearch} resetSearch={this.resetSearch} />
        <Main searchTerm={this.state.searchTerm} user={this.state.user} />
        <SideBar />
      </div>
    );
  }

  doSearch = input => {
    this.setState({ searchTerm: input });
  };

  resetSearch = () => {
    this.setState({ searchTerm: "" });
  };

  changeUser = event => {
    this.setState({ user: event.target.value });
  };
}

export default App;
