import React from "react";
import "./App.css";
import Header from "./Components/header components/Header";
import NavBar from "./Components/navbar components/NavBar";
import Main from "./Components/main components/Main";
import SideBar from "./Components/sidebar components/SideBar";

class App extends React.Component {
  state = {
    topic: "",
    searchTerm: "",
    user: ""
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Main />
        <SideBar />
      </div>
    );
  }
}

export default App;
