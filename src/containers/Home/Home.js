import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../actions/thunks/setCurrentUser';

export class Home extends Component {
  componentDidMount() {
    const id = window.location.search.slice(4);

    this.props.setCurrentUser(id);
  }

  render() {
    return (
      <div className="home">
        <nav>
          <NavLink to="/hotspots">Nearby Hotspots</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
      </div>
    );
  }
}

Home.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: id => dispatch(setCurrentUser(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
