import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Route
              exact
              path="/"
              render={() => {
                if (!this.props.currentUser) {
                  return <SignIn />;
                } else {
                  return <Home />;
                }
              }}
            />
            <Route path="/home" component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);
