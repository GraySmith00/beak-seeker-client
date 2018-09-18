import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleBirdSighting } from '../../actions/thunks/toggleBirdSighting';

import Header from '../../components/Header/Header';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import './Hotspot.css';

export class Hotspot extends Component {
  constructor() {
    super();
    this.state = {
      hotspot: {},
      loading: true
    };
  }

  componentDidMount() {
    const { hotspotId, currentUser } = this.props;
    const hotspot = this.props.hotspots.find(
      hotspot => hotspot.locId === hotspotId
    );

    this.setState({ hotspot, loading: false });
  }

  handleChange = bird => {
    const { hotspotId, currentUser, toggleBirdSighting } = this.props;
    const newSighting = {
      user: currentUser,
      locationId: hotspotId,
      speciesCode: bird.speciesCode,
      comName: bird.comName
    };
    toggleBirdSighting(newSighting);
  };

  render() {
    const { currentUser } = this.props;
    const { hotspot, loading } = this.state;
    const { birds } = this.state.hotspot;
    let displayBirdLinks;

    if (!loading) {
      displayBirdLinks = birds
        .map((bird, index) => {
          let birdSeen = currentUser.sightings.find(
            sighting =>
              sighting.locationId === hotspot.locId &&
              sighting.speciesCode === bird.speciesCode
          );

          birdSeen ? (birdSeen = true) : (birdSeen = false);

          return (
            <div key={`${index}-${bird.speciesCode}`} className="bird">
              <Link
                to={`/hotspots/${hotspot.locId}/${bird.speciesCode}`}
                className="bird-link"
              >
                {bird.comName}
              </Link>
              <input
                onChange={() => this.handleChange(bird)}
                type="checkbox"
                name={bird.speciesCode}
                checked={birdSeen}
                className="checkbox-input"
              />
            </div>
          );
        })
        .slice(0, 10);
    }

    return (
      <div className="hotspot">
        <Header currentPage="Hotspot Info" />
        <main className="main-content">
          <h2>{this.state.hotspot.locName}</h2>
          <div className="birds">
            <form>{displayBirdLinks}</form>
          </div>
          <Link to={`/tweet`} className="twitter-button">
            Tweet Recent Sighting!
          </Link>
        </main>
      </div>
    );
  }
}

Hotspot.propTypes = {
  hotspotId: PropTypes.string.isRequired,
  hotspots: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  toggleBirdSighting: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  hotspots: state.hotspots,
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  toggleBirdSighting: (user, locationId, speciesCode) =>
    dispatch(toggleBirdSighting(user, locationId, speciesCode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotspot);
