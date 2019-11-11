import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
     <Router>
        <Route exact path="/"
        render={props=>
        <Home />
        }
        />
      </Router>
    </div>
    )
  }
}


