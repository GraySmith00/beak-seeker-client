import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import Home from '../Home/Home';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <NavLink to="/home">Home</NavLink>
            </nav>
          </header>
          <main>
            <section className="routes">
              <Switch>
                <Route exact path="/home" component={Home} />
              </Switch>
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
