import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

import './MySightings.css';

class MySightings extends Component {
  render() {
    const { currentUser } = this.props;
    const sightingsObj = currentUser.sightings.reduce(
      (sightingsObj, sighting) => {
        if (!sightingsObj[sighting.speciesCode]) {
          sightingsObj[sighting.speciesCode] = {
            count: 0,
            comName: sighting.comName
          };
        }
        sightingsObj[sighting.speciesCode].count++;
        return sightingsObj;
      },
      {}
    );

    let displayLinks;
    if (!sightingsObj) {
      displayLinks = 'loading...';
    } else {
      displayLinks = Object.keys(sightingsObj).map((sightingKey, i) => (
        <Link
          key={`${sightingKey.speciesCode}-${i}`}
          to={`/hotspots/L1743685/${sightingKey}`}
          className="bird-link"
        >
          {sightingsObj[sightingKey].comName} -{' '}
          {sightingsObj[sightingKey].count}
        </Link>
      ));
    }

    return (
      <div className="my-sightings">
        <Header currentPage="My Sightings" />
        <main className="main-content">{displayLinks}</main>
      </div>
    );
  }
}

MySightings.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(MySightings);
