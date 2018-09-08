import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hotspot extends Component {
  render() {
    const { locName, birds } = this.props.hotspot;
    const displayBirds = birds
      .map((bird, index) => (
        <p key={`${index}-${bird.speciesCode}`} className="bird">
          {bird.comName}
        </p>
      ))
      .slice(0, 10);
    return (
      <div>
        <h1>{locName}</h1>
        <div className="birds">{displayBirds}</div>
      </div>
    );
  }
}

Hotspot.propTypes = {
  hotspot: PropTypes.object.isRequired
};

export default Hotspot;
