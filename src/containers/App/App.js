import React, { Component } from 'react';

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
      <div className="App">
        <main>
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
