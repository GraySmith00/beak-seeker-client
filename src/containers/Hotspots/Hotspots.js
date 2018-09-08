import React, { Component } from 'react';
import { getNearbyHotspots } from '../../actions/thunks/getNearbyHotspots';
import { connect } from 'react-redux';

class Hotspots extends Component {
  componentDidMount() {
    this.props.getNearbyHotspots();
  }

  render() {
    return (
      <div>
        <h1>Hotspots</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getNearbyHotspots: () => dispatch(getNearbyHotspots())
});

export default connect(
  null,
  mapDispatchToProps
)(Hotspots);
