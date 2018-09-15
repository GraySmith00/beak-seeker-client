import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Hotspot extends Component {
  render() {
    const { hotspotId } = this.props;
    const hotspot = this.props.hotspots.find(
      hotspot => hotspot.locId === hotspotId
    );
    const { locName, birds } = hotspot;

    const displayBirdLinks = birds
      .map((bird, index) => (
        <div key={`${index}-${bird.speciesCode}`} className="bird">
          <Link to={`/hotspots/${hotspot.locId}/${bird.speciesCode}`}>
            {bird.comName}
          </Link>
        </div>
      ))
      .slice(0, 10);

    return (
      <div>
        <h1>{locName}</h1>
        <div className="birds">{displayBirdLinks}</div>
        <Link to={`/tweet`}>Post a Tweet!</Link>
      </div>
    );
  }
}

Hotspot.propTypes = {
  hotspotId: PropTypes.string.isRequired,
  hotspots: PropTypes.array.isRequired,
  currentUser: PropTypes.object
};

export const mapStateToProps = state => ({
  hotspots: state.hotspots,
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Hotspot);
