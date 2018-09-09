import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { getNearbyHotspots } from '../../actions/thunks/getNearbyHotspots';
import { dashCaseNameHelper } from '../../utils/helpers';
import Hotspot from '../Hotspot/Hotspot';

class HotspotsList extends Component {
  componentDidMount() {
    this.props.getNearbyHotspots();
  }

  render() {
    const displayHotspots = this.props.hotspots.map(hotspot => (
      <div key={hotspot.locId} className="hotspot">
        <Link to={`/hotspots/${dashCaseNameHelper(hotspot.locName)}`}>
          {hotspot.locName}
        </Link>
        <Route
          exact
          path={`/hotspots/${dashCaseNameHelper(hotspot.locName)}`}
          render={() => <Hotspot hotspot={hotspot} />}
        />
      </div>
    ));

    return (
      <Router>
        <div>
          <h1>HotspotsList</h1>
          {displayHotspots}
        </div>
      </Router>
    );
  }
}

HotspotsList.propTypes = {
  getNearbyHotspots: PropTypes.func.isRequired,
  hotspots: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
  hotspots: state.hotspots
});

const mapDispatchToProps = dispatch => ({
  getNearbyHotspots: () => dispatch(getNearbyHotspots())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(HotspotsList);
