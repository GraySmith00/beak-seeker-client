import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBirdImage, getBirdInfo } from '../../utils/helpers';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

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
    const { comName } = this.props.bird;
    const birdImage = await getBirdImage(comName);
    const birdInfo = await getBirdInfo(comName);
    this.setState({
      birdImage,
      birdInfo,
      loading: false
    });
  }

  render() {
    const { birdImage, birdInfo, loading } = this.state;
    let birdContent;

    if (loading) {
      birdContent = <LoadingSpinner />;
    } else {
      birdContent = (
        <div className="bird-content">
          {birdImage ? (
            <img src={birdImage} alt={this.props.bird.comName} />
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
  bird: PropTypes.object.isRequired
};

export default BirdInfo;
