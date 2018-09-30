import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleBirdSighting } from '../../actions/thunks/toggleBirdSighting';

import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BadgeModal from '../BadgeModal/BadgeModal';

import './Hotspot.css';

export class Hotspot extends Component {
  constructor() {
    super();
    this.state = {
      hotspot: {},
      loading: true,
      numSighted: 0,
      modalOpen: false
    };
  }

  async componentDidMount() {
    const { hotspotId, hotspots, myHotspots, currentUser } = this.props;
    let hotspot =
      hotspots.find(hotspot => hotspot.locId === hotspotId) ||
      myHotspots.find(hotspot => hotspot.locId === hotspotId);

    const numSighted = currentUser.sightings.filter(
      sighting => sighting.locationId === hotspot.locId
    ).length;

    this.setState({ hotspot, numSighted, loading: false });
  }

  handleChange = async bird => {
    const { hotspotId, currentUser, toggleBirdSighting } = this.props;
    const { hotspot } = this.state;

    const newSighting = {
      user: currentUser,
      locationId: hotspotId,
      locationName: hotspot.locName,
      speciesCode: bird.speciesCode,
      comName: bird.comName
    };

    const newSightings = toggleBirdSighting(newSighting);

    const numSighted = newSightings.filter(
      sighting => sighting.locationId === hotspot.locId
    ).length;

    if (numSighted === 6) {
      this.setState({ numSighted, modalOpen: true });
    } else if (numSighted === 8) {
      this.setState({ numSighted, modalOpen: true });
    } else {
      this.setState({ numSighted });
    }
  };

  handleModalClose = e => {
    e.stopPropagation();
    this.setState({ modalOpen: false });
  };

  render() {
    const { currentUser } = this.props;
    const { hotspot, loading, numSighted, modalOpen } = this.state;
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
            <div
              key={`${index}-${bird.speciesCode}`}
              className={`bird ${birdSeen}`}
            >
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
      <div className="hotspot-show">
        <Header currentPage="Hotspot Info" />
        <main className="main-content">
          {modalOpen && <BadgeModal handleModalClose={this.handleModalClose} />}
          <h2>{this.state.hotspot.locName}</h2>
          {!loading && <ProgressBar numSighted={numSighted} />}
          {numSighted >= 6 && (
            <div className="badges">
              <i className="fas fa-trophy" style={{ color: 'silver' }} />
              {numSighted >= 8 && (
                <i className="fas fa-trophy" style={{ color: 'gold' }} />
              )}
            </div>
          )}
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
  currentUser: state.currentUser,
  myHotspots: state.myHotspots
});

export const mapDispatchToProps = dispatch => ({
  toggleBirdSighting: (user, locationId, speciesCode) =>
    dispatch(toggleBirdSighting(user, locationId, speciesCode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotspot);
