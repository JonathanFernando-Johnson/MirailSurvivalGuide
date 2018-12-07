import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./login";
import CheckList from "./check-list";
import Register from "./register";
import "./App.css";
import MenuAppBar from "./MenuAppBar";
import { Nav, Navbar,NavItem,NavDropdown ,MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    switch (true) {
      case true:
        return (
          <div>
            <MenuAppBar/>
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
