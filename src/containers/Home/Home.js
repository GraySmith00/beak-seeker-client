import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

import HotspotsList from '../HotspotsList/HotspotsList';
import Leaderboard from '../Leaderboard/Leaderboard';
import { setCurrentUser } from '../../actions/thunks/setCurrentUser';

class Home extends Component {
  componentDidMount() {
    console.log('hiiiiiiii');
    const id = window.location.search.slice(4);
    console.log(id);
    this.props.setCurrentUser(id);
  }

  render() {
    return (
      <Router>
        <div className="home">
          <nav>
            <NavLink to="/hotspots">Nearby Hotspots</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </nav>
          <main>
            <Switch>
              <Route exact path="/hotspots" component={HotspotsList} />
              <Route exact path="/leaderboard" component={Leaderboard} />
            </Switch>
          </main>
        </div>
      </Router>
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
