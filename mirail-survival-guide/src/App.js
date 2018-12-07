import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./login";
import CheckList from "./check-list";
import Register from "./register";
import "./App.css";

class App extends Component {
  render() {
    switch (false) {
      case true:
        return (
          <div>
            <Register />
          </div>
        );
        break;

      case false:
        return <CheckList velo={true} gamelle={true} carte={true} />;
        break;
    }
  }
}

export default App;
