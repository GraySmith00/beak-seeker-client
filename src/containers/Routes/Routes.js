import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/userActions';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Home from '../Home/Home';
import HotspotsList from '../HotspotsList/HotspotsList';
import SignIn from '../SignIn/SignIn';
import Leaderboard from '../Leaderboard/Leaderboard';
import Hotspot from '../Hotspot/Hotspot';
import BirdInfo from '../BirdInfo/BirdInfo';
import PostTweet from '../PostTweet/PostTweet';
import Footer from '../../components/Footer/Footer';
import MyHotspots from '../MyHotspots/MyHotspots';
import MySightings from '../MySightings/MySightings';

export class Routes extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Router>
        <ScrollToTop>
          <Fragment>
            <Route path="/home" component={Home} />
            <Route exact path="/hotspots" component={HotspotsList} />
            <Route exact path="/leaderboard" component={Leaderboard} />
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
            <Route
              exact
              path={`/hotspots/:location_id`}
              render={({ match }) => {
                return <Hotspot hotspotId={match.params.location_id} />;
              }}
            />
            <Route
              exact
              path={`/hotspots/:location_id/:speciesCode`}
              render={({ match }) => {
                return (
                  <BirdInfo
                    locId={match.params.location_id}
                    speciesCode={match.params.speciesCode}
                  />
                );
              }}
            />
            <Route exact path="/tweet" component={PostTweet} />
            <Route
              exact
              path="/logout"
              render={() => {
                this.props.logout();
                return <SignIn />;
              }}
            />
            {currentUser && <Footer />}
            <Route exact path="/myhotspots" component={MyHotspots} />
            <Route exact path="/mysightings" component={MySightings} />
          </Fragment>
        </ScrollToTop>
      </Router>
    );
  }
}

Routes.propTypes = {
  logout: PropTypes.func,
  currentUser: PropTypes.object,
  hotspots: PropTypes.array,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  hotspots: state.hotspots
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
