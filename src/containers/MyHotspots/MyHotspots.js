import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMyHotspots } from '../../actions/thunks/getMyHotspots';

import Header from '../../components/Header/Header';
import LoadingSpinner2 from '../../components/LoadingSpinner2/LoadingSpinner2';
import './MyHotspots.css';

class MyHotspots extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const { currentUser } = this.props;
    const ids = currentUser.sightings.reduce((ids, sighting) => {
      if (!ids[sighting.locationId]) {
        ids[sighting.locationId] = null;
      }
      return ids;
    }, {});

    await this.props.getMyHotspots(Object.keys(ids));
    this.setState({ loading: false });
  }

  render() {
    const { myHotspots } = this.props;
    const { loading } = this.state;
    let displayHotspotLinks;

    if (loading) {
      displayHotspotLinks = (
        <div style={{ marginLeft: '130px' }}>
          <LoadingSpinner2 />;
        </div>
      );
    } else {
      displayHotspotLinks = myHotspots.map((hotspot, i) => (
        <Link
          key={`${hotspot.locId}-${i}`}
          className="hotspot-link"
          to={`/hotspots/${hotspot.locId}`}
        >
          {hotspot.locName}
        </Link>
      ));
    }

    return (
      <div className="my-hotspots">
        <Header currentPage="My Hotspots" />
        <main className="main-content">{displayHotspotLinks}</main>
      </div>
    );
  }
}

MyHotspots.propTypes = {
  myHotspots: PropTypes.array.isRequired,
  getMyHotspots: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  myHotspots: state.myHotspots
});

export const mapDispatchToProps = dispatch => ({
  getMyHotspots: locIds => dispatch(getMyHotspots(locIds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHotspots);
