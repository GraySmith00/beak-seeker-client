import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleBirdSighting } from '../../actions/thunks/toggleBirdSighting';

export class Hotspot extends Component {
  handleChange = bird => {
    const { hotspotId, currentUser, toggleBirdSighting } = this.props;
    toggleBirdSighting(currentUser, hotspotId, bird.speciesCode);
  };

  render() {
    const { hotspotId, currentUser } = this.props;
    const hotspot = this.props.hotspots.find(
      hotspot => hotspot.locId === hotspotId
    );
    const { locName, birds } = hotspot;

    const displayBirdLinks = birds
      .map((bird, index) => {
        let birdSeen = currentUser.sightings.find(
          sighting =>
            sighting.locationId === hotspot.locId &&
            sighting.speciesCode === bird.speciesCode
        );

        birdSeen ? (birdSeen = true) : (birdSeen = false);

        return (
          <div key={`${index}-${bird.speciesCode}`} className="bird">
            <Link to={`/hotspots/${hotspot.locId}/${bird.speciesCode}`}>
              {bird.comName}
            </Link>
            <input
              onChange={e => this.handleChange(bird)}
              type="checkbox"
              name={bird.speciesCode}
              checked={birdSeen}
            />
          </div>
        );
      })
      .slice(0, 10);

    return (
      <div>
        <h1>{locName}</h1>
        <div className="birds">
          <form>{displayBirdLinks}</form>
        </div>
        <Link to={`/tweet`}>Post a Tweet!</Link>
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
