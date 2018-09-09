import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import BirdInfo from '../BirdInfo/BirdInfo';
import { dashCaseNameHelper } from '../../utils/helpers';

class Hotspot extends Component {
  render() {
    const { hotspot } = this.props;
    const { locName, birds } = this.props.hotspot;
    const displayBirds = birds
      .map((bird, index) => (
        <div key={`${index}-${bird.speciesCode}`} className="bird">
          <Link
            to={`/hotspots/${dashCaseNameHelper(
              hotspot.locName
            )}/${dashCaseNameHelper(bird.comName)}`}
          >
            {bird.comName}
          </Link>
          <Route
            exact
            path={`/hotspots/${dashCaseNameHelper(
              hotspot.locName
            )}/${dashCaseNameHelper(bird.comName)}`}
            render={() => <BirdInfo bird={bird} />}
          />
        </div>
      ))
      .slice(0, 10);
    return (
      <Router>
        <div>
          <h1>{locName}</h1>
          <div className="birds">{displayBirds}</div>
        </div>
      </Router>
    );
  }
}

Hotspot.propTypes = {
  hotspot: PropTypes.object.isRequired
};

export default Hotspot;
