import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {createStore} from 'redux'


class App extends Component {
  render() {
    return (

      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/topics">Topics</Link>
                  </li>
              </ul>

              <hr />


          </div>
      </Router>
    );
  }
}

export default App;
