import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage";
import Profile from "./components/Profile/Authentication";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
