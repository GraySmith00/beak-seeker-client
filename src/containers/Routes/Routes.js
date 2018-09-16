import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import HotspotsList from '../HotspotsList/HotspotsList';
import SignIn from '../SignIn/SignIn';
import Leaderboard from '../Leaderboard/Leaderboard';
import Hotspot from '../Hotspot/Hotspot';
import BirdInfo from '../BirdInfo/BirdInfo';
import PostTweet from '../PostTweet/PostTweet';
import Footer from '../../components/Footer/Footer';

export class Routes extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Router>
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
          {currentUser && <Footer />}
        </Fragment>
      </Router>
    );
  }
}

Routes.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  hotspots: state.hotspots
});

export default connect(mapStateToProps)(Routes);
