import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMyHotspots } from '../../actions/thunks/getMyHotspots';

import Header from '../../components/Header/Header';
import './MyHotspots.css';

class MyHotspots extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const { currentUser } = this.props;
    const ids = currentUser.sightings.reduce((ids, sighting) => {
      if (!ids[sighting.locationId]) {
        ids[sighting.locationId] = null;
      }
      return ids;
    }, {});
    await this.props.getMyHotspots(Object.keys(ids));
    this.setState({ loading: false });
  }

  render() {
    const { currentUser, myHotspots } = this.props;
    const { loading } = this.state;
    let displayHotspotLinks;

    if (loading) {
      displayHotspotLinks = <p>Loading...</p>;
    } else {
      displayHotspotLinks = myHotspots.map((hotspot, i) => (
        <Link
          key={`${hotspot.locId}-${i}`}
          className="hotspot"
          to={`/hotspots/${hotspot.locId}`}
        >
          {hotspot.locName}
        </Link>
      ));
    }

    return (
      <div className="my-hotspots">
        <Header currentPage="My Hotspots" />
        <main className="main-content">
          <h1>My Hotspots</h1>
          {displayHotspotLinks}
        </main>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  myHotspots: state.myHotspots
});

export const mapDispatchToProps = dispatch => ({
  getMyHotspots: locIds => dispatch(getMyHotspots(locIds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHotspots);
