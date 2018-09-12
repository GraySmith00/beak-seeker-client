import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { getNearbyHotspots } from '../../actions/thunks/getNearbyHotspots';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export class HotspotsList extends Component {
  componentDidMount() {
    this.props.getNearbyHotspots();
  }

  render() {
    const { loading } = this.props;
    let displayHotspotLinks;

    if (loading) {
      displayHotspotLinks = <LoadingSpinner />;
    } else {
      displayHotspotLinks = this.props.hotspots.map(hotspot => (
        <div key={hotspot.locId} className="hotspot">
          <Link to={`/hotspots/${hotspot.locId}`}>{hotspot.locName}</Link>
        </div>
      ));
    }

    return (
      <div>
        <h1>HotspotsList</h1>
        {displayHotspotLinks}
      </div>
    );
  }
}

HotspotsList.propTypes = {
  getNearbyHotspots: PropTypes.func.isRequired,
  hotspots: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStatetoProps = state => ({
  hotspots: state.hotspots,
  loading: state.hotspotsLoading
});

const mapDispatchToProps = dispatch => ({
  getNearbyHotspots: () => dispatch(getNearbyHotspots())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(HotspotsList);
