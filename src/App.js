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
    isLoading: true,
    window: window.innerWidth
  };

  render() {
    window.addEventListener("resize", this.handleResize);
    let sideBar = <SideBar />;
    if (window.innerWidth < 980) {
      sideBar = "";
    }
    return (
      <div className="App">
        {/* <Background /> */}
        <Header
          resetSearch={this.resetSearch}
          user={this.state.user}
          changeUser={this.changeUser}
        />
        <NavBar doSearch={this.doSearch} resetSearch={this.resetSearch} />
        <Main searchTerm={this.state.searchTerm} user={this.state.user} />
        {sideBar}
      </div>
    );
  }

  handleResize = () => {
    this.setState({ window: window.innerWidth });
  };

  doSearch = input => {
    this.setState({ searchTerm: input });
  };

  resetSearch = () => {
    this.setState({ searchTerm: "" });
  };

  changeUser = event => {
    localStorage.setItem("user", event.target.value);
    this.setState({ user: event.target.value });
  };

  componentDidMount() {
    localStorage.getItem("user") &&
      this.setState({ user: localStorage.getItem("user") });
  }
}

export default App;
