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
            Readymade literally sartorial keytar narwhal, tofu everyday carry
            fingerstache vice whatever hashtag put a bird on it. Gastropub
            poutine helvetica, lyft letterpress hexagon slow-carb XOXO. Migas
            fixie lomo, swag stumptown +1 put a bird on it wolf tilde PBR&B
            try-hard subway tile chicharrones typewriter.
          </p>
        </div>
        <a
          href="http://localhost:5000/twitter/login"
          className="twitter-button"
        >
          Sign in with Twitter
        </a>
      </div>
    );
  }
}

export default SignIn;
