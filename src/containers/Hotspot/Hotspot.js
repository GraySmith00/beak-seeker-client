import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Hotspot extends Component {
  render() {
    console.log('hiiiiii from hotspot');
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
      </div>
    );
  }
}

Hotspot.propTypes = {
  hotspotId: PropTypes.string.isRequired,
  hotspots: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  hotspots: state.hotspots
});

export default connect(mapStateToProps)(Hotspot);
