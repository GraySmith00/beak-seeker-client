import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../actions/thunks/setCurrentUser';

import Header from '../../components/Header/Header';

import './Home.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    };
  }

  async componentDidMount() {
    const id = window.location.search.slice(4);
    try {
      await this.props.setCurrentUser(id);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const currentPage = (
      <p>
        <i className="fas fa-home" /> Home
      </p>
    );
    return (
      <div className="home">
        <Header currentPage={currentPage} />
        <main className="main-content">
          <NavLink to="/hotspots" className="nav-link">
            <i className="fas fa-map-marked-alt" /> Nearby Hotspots
          </NavLink>
          <NavLink to="/leaderboard" className="nav-link">
            <i className="fas fa-trophy" /> Leaderboard
          </NavLink>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  setCurrentUser: id => dispatch(setCurrentUser(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
