import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default class App extends Component {
  state = {
    loggedIn: true,
    userName: 'Santiago Lisa'
  }

  render() {
    return (
      <div className="App">
     <Router>
        <Route exact path="/"
        render={props=>
        !this.state.loggedIn ? (
        <Home />
        ) : (<Profile name={this.state.userName}/>)
        }
        />
      </Router>
    </div>
    )
  }
}


