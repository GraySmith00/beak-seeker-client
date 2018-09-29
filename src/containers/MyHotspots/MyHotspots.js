import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMyHotspots } from '../../actions/thunks/getMyHotspots';

import Header from '../../components/Header/Header';
import './MyHotspots.css';

class MyHotspots extends Component {
  async componentDidMount() {
    const { currentUser } = this.props;
    const ids = currentUser.sightings.reduce((ids, sighting) => {
      if (!ids[sighting.locationId]) {
        ids[sighting.locationId] = null;
      }
      return ids;
    }, {});
    await getMyHotspots(Object.keys(ids));
  }

  render() {
    const { currentUser } = this.props;

    const displayHotspotLinks = currentUser.sightings.map((sighting, i) => (
      <Link
        key={`${sighting.locationId}-${i}`}
        className="hotspot"
        to={`/hotspots/${sighting.locationId}`}
      >
        {sighting.locationName}
      </Link>
    ));

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
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(MyHotspots);
