import React, { Component } from 'react';
import Home from '../Home/Home';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
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

  onSuccess = response => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({
          isAuthenticated: true,
          user: user,
          token: token
        });
      }
    });
  };

  onFailed = error => {
    alert(error);
  };

  render() {
    return (
      <div className="App">
        <main>
          <Home />
          <a href="http://localhost:5000/twitter/login">Sign in with twitter</a>
        </main>
      </div>
    );
  }
}

export default App;
