import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBirdImage, getBirdInfo } from '../../utils/helpers';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { connect } from 'react-redux';

class BirdInfo extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log(comName);

    const birdImage = await getBirdImage(comName);
    const birdInfo = await getBirdInfo(comName);
    this.setState({
      birdImage,
      birdInfo,
      loading: false
    });
  }

  render() {
    console.log('hiiii from birdinfo!!');
    const { birdImage, birdInfo, loading } = this.state;
    let birdContent;

    if (loading) {
      birdContent = <LoadingSpinner />;
    } else {
      birdContent = (
        <div className="bird-content">
          {birdImage ? (
            <img src={birdImage} alt="bird picture" />
          ) : (
            <p>
              Sorry, we could not find an image of this bird at this time :(
            </p>
          )}
          <p>{birdInfo}</p>
        </div>
      );
    }

    return (
      <div>
        <h1>BirdInfo</h1>
        {birdContent}
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
