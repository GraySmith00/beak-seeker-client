import React, { Component } from 'react';

import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <div className="hero">
          <div className="overlay">
            <div className="welcome-text">
              <h3>Welcome to</h3>
              <h2>
                <i className="fas fa-dove" />
                BeakSeeker
              </h2>
            </div>
          </div>
        </div>
        <div className="app-description">
          <p>
            BeakSeeker is the most fun way to go birding! Find the best local
            hotspots. See which birds have been recently seen in your area. Earn
            badges for spotting birds and compete against your fellow birders to
            see who is the ultimate beak seeker!
          </p>
        </div>
        <a
          href="https://gs-beakseeker-server.herokuapp.com/twitter/login"
          className="twitter-button"
        >
          Sign in with Twitter
        </a>
      </div>
    );
  }
}

export default SignIn;
