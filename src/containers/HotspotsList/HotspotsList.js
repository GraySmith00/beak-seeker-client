import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getNearbyHotspots } from '../../actions/thunks/getNearbyHotspots';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Header from '../../components/Header/Header';

import './HotspotsList.css';

export class HotspotsList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const { hotspots } = this.props;

    if (Object.keys(hotspots).length === 0) {
      try {
        await this.props.getNearbyHotspots();
      } catch (error) {
        console.log(error);
      }
    }

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
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
      <div className="hotspots-list">
        <Header currentPage="Nearby Hotspots" />
        <main className="main-content">{displayHotspotLinks}</main>
      </div>
    );
  }
}

HotspotsList.propTypes = {
  getNearbyHotspots: PropTypes.func.isRequired,
  hotspots: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  hotspots: state.hotspots
});

export const mapDispatchToProps = dispatch => ({
  getNearbyHotspots: () => dispatch(getNearbyHotspots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotspotsList);
