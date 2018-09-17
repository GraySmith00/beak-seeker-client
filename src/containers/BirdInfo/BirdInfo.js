import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBirdImage, getBirdInfo } from '../../utils/apiCalls';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

import './BirdInfo.css';

export class BirdInfo extends Component {
  constructor() {
    super();
    this.state = {
      comName: '',
      birdImage: '',
      birdInfo: '',
      loading: true
    };
  }
  async componentDidMount() {
    const { locId, speciesCode, hotspots } = this.props;
    const location = hotspots.find(hotspot => hotspot.locId === locId);

    const bird = location.birds.find(bird => bird.speciesCode === speciesCode);
    const { comName } = bird;

    const birdImage = await getBirdImage(comName);
    const birdInfo = await getBirdInfo(comName);

    this.setState({
      comName,
      birdImage,
      birdInfo,
      loading: false
    });
  }

  render() {
    const { birdImage, birdInfo, loading, comName } = this.state;
    let birdContent;

    if (loading) {
      birdContent = <LoadingSpinner />;
    } else {
      birdContent = (
        <div className="bird-content">
          {birdImage ? (
            <img src={birdImage} alt="bird" />
          ) : (
            <p>
              Sorry, we could not find an image of this bird at this time :(
            </p>
          )}
          <h3>{comName}</h3>
          <p>{birdInfo}</p>
        </div>
      );
    }

    return (
      <div className="bird-info">
        <Header currentPage="Bird Info" />
        <main className="main-content">{birdContent}</main>
      </div>
    );
  }
}

BirdInfo.propTypes = {
  locId: PropTypes.string.isRequired,
  speciesCode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  hotspots: state.hotspots
});

export default connect(mapStateToProps)(BirdInfo);
