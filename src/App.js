import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
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
  );
}

export default App;
