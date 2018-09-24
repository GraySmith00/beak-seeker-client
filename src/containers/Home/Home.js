import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../actions/thunks/setCurrentUser';
import { getUser } from '../../utils/apiCalls';

import Header from '../../components/Header/Header';

import './Home.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      user: {}
    };
  }

  async componentDidMount() {
    const id = window.location.search.slice(4);

    if (this.props.currentUser) {
      this.setState({ user: this.props.currentUser });
    } else {
      try {
        await this.props.setCurrentUser(id);
        const user = await getUser(id);
        this.setState({ user });
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div className="home">
        <Header currentPage="Home" />
        <main className="main-content">
          {user && (
            <section>
              <div className="greeting">
                <img src={user.image} alt="" />
              </div>
              <h2>{`Welcome Back ${user.username}`}</h2>
            </section>
          )}
          <NavLink to="/hotspots" className="nav-link">
            <i className="fas fa-map-marked-alt" /> Nearby Hotspots
          </NavLink>
          <NavLink to="/leaderboard" className="nav-link">
            <i className="fas fa-trophy" /> Leaderboard
          </NavLink>
          <NavLink to="/myhotspots" className="nav-link">
            <i className="fas fa-fire" /> My Hotspots
          </NavLink>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  setCurrentUser: id => dispatch(setCurrentUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
